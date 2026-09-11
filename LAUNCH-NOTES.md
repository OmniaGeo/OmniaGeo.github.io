# OMNIA Launch Edition — deployment notes

This build is intentionally public-site only.

Removed from the launch artifact:
- Workshop and project editor
- OmniBot and AI model integrations
- Authentication, profiles and My Space
- Supabase and database code
- Admin and hosting/publishing operations
- API routes and middleware rewrites
- Server secrets and backend environment variables

The contact form is static: it opens the visitor's email client with the enquiry pre-filled. Messenger and direct email links remain available.

## Deploy

1. Optionally create `.env.local` from `.env.example`.
2. Set `NEXT_PUBLIC_SITE_URL` to the final production domain.
3. Set `NEXT_PUBLIC_GA_ID` only if Google Analytics is wanted.
4. Run `npm install`.
5. Run `npm run release:check`.
6. Deploy to Vercel or any static host. `next build` emits the `out/` directory.

## Final pre-deploy hardening — 2026-09-11

- Corrected Shanddar MoMo live URL to `https://shanddarmomoweb.vercel.app`.
- Fixed the Digital Systems SVG alignment by resetting the inherited line transform and centering the scene in its frame.
- Reviewed Georgian/English launch copy and corrected several wording/consistency issues.
- Hardened contact-form validation while keeping the no-backend mailto flow.
- Fixed the global skip-link/main-content landmark and added Escape-to-close for the mobile menu.
- Removed the unused `playcanvas` dependency.
- Extended `npm run qa` with release-integrity checks for the live URL, key assets, localized routes and systems-scene alignment guard.
