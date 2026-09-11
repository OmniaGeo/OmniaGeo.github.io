# OMNIA Launch Edition

This is the public launch-only OMNIA website. It intentionally contains **no Workshop, OmniBot, authentication, Supabase integration, admin console, customer-site publishing backend, or API routes**.

## What remains

- Georgian and English public marketing pages
- Services and service detail pages
- Work/case-study pages
- Contact page
- Privacy / Terms / Cookie pages
- Dark/light mode, motion, responsive design and SEO metadata
- Optional consent-gated Google Analytics
- Static contact form that opens the visitor's email client

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run release:check
```

The Next.js build uses `output: "export"`, producing a fully static `out/` directory suitable for CDN hosting.

## Environment

Copy `.env.example` to `.env.local` if needed. The launch build has no private server secrets.
