# OMNIA GitHub Pages deployment

Repository: `OmniaGeo/OmniaGeo.github.io`
Production URL: `https://omniageo.github.io`

## One-time GitHub setting

Open the repository on GitHub:

1. Settings
2. Pages
3. Build and deployment
4. Source: **GitHub Actions**

## Deploy

Push the contents of this folder to the repository's `main` branch.
The included workflow `.github/workflows/deploy-pages.yml` will:

1. Install dependencies
2. Run QA
3. Run TypeScript checks
4. Build the static Next.js export
5. Deploy `out/` to GitHub Pages

Every later push to `main` repeats the deployment automatically.
