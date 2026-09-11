import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const requireForTools=createRequire(import.meta.url);
let ts; try { ts=requireForTools('typescript'); } catch { ts=requireForTools('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript/lib/typescript.js'); }
const root=process.cwd();
const skip=new Set(['node_modules','.next','.git','out']);
const files=[];
function walk(dir){for(const name of fs.readdirSync(dir)){if(skip.has(name))continue;const full=path.join(dir,name);const st=fs.statSync(full);if(st.isDirectory())walk(full);else files.push(full);}}
walk(root);
const source=files.filter(f=>/\.(ts|tsx)$/.test(f)&&!f.endsWith('.d.ts'));
const syntax=[];
for(const file of source){const text=fs.readFileSync(file,'utf8');const result=ts.transpileModule(text,{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext},fileName:file,reportDiagnostics:true});for(const d of result.diagnostics||[])if(d.category===ts.DiagnosticCategory.Error)syntax.push(`${path.relative(root,file)}: ${ts.flattenDiagnosticMessageText(d.messageText,' ')}`);}
const missing=[];
const alias=/from\s+["']@\/([^"']+)["']|import\s+["']@\/([^"']+)["']/g;
for(const file of source){const text=fs.readFileSync(file,'utf8');let m;while((m=alias.exec(text))){const rel=m[1]||m[2];const base=path.join(root,rel);const candidates=[base,`${base}.ts`,`${base}.tsx`,`${base}.js`,`${base}.jsx`,path.join(base,'index.ts'),path.join(base,'index.tsx')];if(!candidates.some(fs.existsSync))missing.push(`${path.relative(root,file)} -> @/${rel}`);}}
const cssErrors=[];
for(const file of files.filter(f=>f.endsWith('.css'))){const text=fs.readFileSync(file,'utf8').replace(/\/\*[\s\S]*?\*\//g,'');let depth=0;for(const ch of text){if(ch==='{')depth++;if(ch==='}')depth--;if(depth<0)break;}if(depth!==0)cssErrors.push(`${path.relative(root,file)} braces=${depth}`);}
const forbidden=[];
const forbiddenPaths=['app/api','app/workshop','app/OmniBot','app/login','app/signup','app/space','app/admin','app/published','components/workshop','components/account','components/onboarding','lib/supabase','lib/server','supabase','middleware.ts','app/workshop.css','app/auth-space.css'];
for(const rel of forbiddenPaths) if(fs.existsSync(path.join(root,rel))) forbidden.push(`launch build still contains ${rel}`);
const forbiddenTerms=[/from\s+["']@\/lib\/supabase\//,/\/api\//,/\/workshop(?:["'`/])/i,/OmniBot(?:Widget|Experience)/,/AccountEntry/];
for(const file of source){const rel=path.relative(root,file);const text=fs.readFileSync(file,'utf8');for(const rx of forbiddenTerms)if(rx.test(text))forbidden.push(`${rel} contains launch-excluded integration: ${rx}`);}
const config=fs.readFileSync(path.join(root,'next.config.ts'),'utf8');
if(!/output:\s*["']export["']/.test(config))forbidden.push('next.config.ts is not static-export mode');
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
for(const dep of ['@supabase/supabase-js','resend','gsap','lenis','@playwright/test','playcanvas']) if(pkg.dependencies?.[dep]||pkg.devDependencies?.[dep]) forbidden.push(`launch package still depends on ${dep}`);
const release=[];
const siteSource=fs.readFileSync(path.join(root,'lib/site.ts'),'utf8');
if(/shanddarmomo-web\.vercel\.app/.test(siteSource)) release.push('old Shanddar MoMo live URL is still present');
if(!/https:\/\/shanddarmomoweb\.vercel\.app/.test(siteSource)) release.push('expected Shanddar MoMo live URL is missing');
for(const rel of ['public/social-share.png','public/omnia-mark.png','public/work/shanddar-momo.webp','public/work/restaurant-direct.webp','public/work/beauty-booking.webp','public/work/professional-authority.webp']) if(!fs.existsSync(path.join(root,rel))) release.push(`missing public asset: ${rel}`);
for(const rel of ['app/page.tsx','app/en/page.tsx','app/services/page.tsx','app/en/services/page.tsx','app/work/page.tsx','app/en/work/page.tsx','app/contact/page.tsx','app/en/contact/page.tsx','app/privacy/page.tsx','app/en/privacy/page.tsx','app/terms/page.tsx','app/en/terms/page.tsx','app/cookies/page.tsx','app/en/cookies/page.tsx']) if(!fs.existsSync(path.join(root,rel))) release.push(`missing localized route: ${rel}`);
const css=fs.readFileSync(path.join(root,'app/globals.css'),'utf8');
if(!/\.systems-lines-fixed\s*\{[\s\S]*?transform:\s*none;/.test(css)) release.push('digital-systems SVG transform reset is missing');
const fail=syntax.length+missing.length+cssErrors.length+forbidden.length+release.length;
console.log(`OMNIA Launch QA\n  TS/TSX: ${source.length}\n  syntax errors: ${syntax.length}\n  missing @ imports: ${missing.length}\n  CSS integrity issues: ${cssErrors.length}\n  launch isolation issues: ${forbidden.length}\n  release integrity issues: ${release.length}`);
for(const [label,list] of [['syntax',syntax],['imports',missing],['css',cssErrors],['isolation',forbidden],['release',release]])if(list.length){console.error(`\n${label}:`);list.slice(0,80).forEach(x=>console.error(` - ${x}`));}
process.exit(fail?1:0);
