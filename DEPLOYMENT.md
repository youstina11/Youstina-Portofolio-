# Deploying the portfolio

The app is a TanStack Start (React 19 + Vite 7) project. `npm run build` produces
the client bundle in `dist/client` and the server bundle used for SSR.

Set `RESEND_API_KEY` as an environment variable on whichever host you use, otherwise
the contact form shows a friendly "email me directly" error.

## Option 1 — Lovable (simplest)

Click **Publish** in the Lovable editor. Backend changes deploy immediately; frontend
changes go live when you click Update in the publish dialog. A custom domain can be
connected under Project settings → Domains.

## Option 2 — Vercel

1. Push the project to GitHub.
2. In Vercel: **New Project → Import** the repository.
3. Settings (already declared in `vercel.json`):
   - Build command: `npm run build`
   - Output directory: `dist/client`
4. Add the environment variable `RESEND_API_KEY` (Production + Preview).
5. Deploy. Vercel rebuilds on every push to `main`.

## Option 3 — Netlify

1. Push the project to GitHub.
2. In Netlify: **Add new site → Import an existing project**.
3. Settings come from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist/client`
   - Node version: 20
4. Add `RESEND_API_KEY` under Site settings → Environment variables.
5. Deploy.

## Option 4 — Any Node host (Render, Railway, Fly.io, VPS)

```sh
npm ci
npm run build
npm run preview   # or serve the generated server output with `node`
```

Set `RESEND_API_KEY` and `PORT` in the host's environment settings.

## After deploying

- Update the domain used in `public/sitemap.xml`, `public/robots.txt`, and the
  `canonical` / `og:url` tags in `src/routes/*.tsx` if you move to a custom domain.
- Submit `https://your-domain/sitemap.xml` in Google Search Console.
