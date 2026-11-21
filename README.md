# Neo Website

Official website for **Neo** — an AI-powered desktop companion, in development.
"Your AI. Always by your side."

Built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons. Deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build to dist/
npm run preview  # preview the production build
```

## Deployment

Push to `main` — `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages automatically.

Site: https://mmarlodev.github.io/neo.github.io/

## Updating content

- **Download link** — set `downloadUrl` in `src/data/product.ts` to the GitHub Releases asset URL once a build is published.
- **Changelog** — add entries to `src/data/changelog.ts` (newest first).
- **Logo** — `public/assets/neo-logo.png` is the official logo (512×512 optimized; the original 1254×1254 source is kept at `neo-logo-source.png` in the project root).
- **OG image** — replace `public/assets/og-image.svg` with a 1200×630 PNG when the final logo is ready.
