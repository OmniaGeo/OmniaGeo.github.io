# Launch architecture

OMNIA Launch Edition is a static Next.js App Router site. All retained routes are pre-rendered at build time and can be served from a CDN. There are no API routes, middleware rewrites, database clients, authentication clients or server-only secrets.

The contact form keeps the designed form experience but opens a pre-filled `mailto:` message instead of posting user data to a backend.
