import type { Locale } from "./site";

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ka";
}

export function localizePath(path: string, locale: Locale): string {
  const clean = path === "/en" ? "/" : path.replace(/^\/en(?=\/|$)/, "") || "/";
  if (locale === "ka") return clean;
  return clean === "/" ? "/en" : `/en${clean}`;
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  return localizePath(pathname, nextLocale);
}

export function localeName(locale: Locale) {
  return locale === "ka" ? "ქართული" : "English";
}
