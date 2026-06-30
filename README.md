# kite-hq.github.io

The marketing site for **[Kite](https://github.com/kite-hq/kite)** — the lightweight, Git-friendly, open-source API client.

Live at **https://kite-hq.github.io**.

Built with [Astro](https://astro.build) as a single static page. Zero client-side JavaScript; the whole site is plain HTML and CSS.

## Develop

```sh
bun install      # install dependencies
bun dev          # start the dev server at http://localhost:4321
bun run build    # build the static site to ./dist
bun run preview  # preview the production build locally
```

## Deploy

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds with Astro and publishes to GitHub Pages.

Because this repository is named `<org>.github.io`, GitHub Pages serves it from the root path, so the Astro config uses `site: 'https://kite-hq.github.io'` and `base: '/'`.

One-time setup: **Settings → Pages → Source = GitHub Actions**.

## Structure

```text
public/                 brand assets (logo, favicon, wordmark, OG image)
src/pages/index.astro   the single page (markup + styles)
astro.config.mjs        site + base configuration
```

Brand colors, fonts, and copy live in `SITE_PLAN.md`.
