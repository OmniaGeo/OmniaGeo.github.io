# Launch QA

`npm run qa` checks syntax, internal imports, CSS brace integrity, retained-route links, and asserts that Workshop/OmniBot/auth/backend code has not leaked into the launch edition.

`npm run release:check` additionally runs TypeScript and a full static Next.js build.
