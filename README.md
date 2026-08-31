# Youstina Salah Nathan — Portfolio

Personal portfolio of **Eng. Youstina Salah Nathan** — Full-Stack & AI Engineer with a data-analysis background (Assiut, Egypt).

Built with TanStack Start (React 19 + Vite 7), TypeScript, and Tailwind CSS v4.

## Features

- Animated split-layout portfolio with pastel blush/cream theme (WCAG AA contrast)
- Pages: Home, Projects, Skills & Experience, Blog, Contact
- Sticky section navbar with smooth scrolling on the homepage
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Downloadable CV (PDF) from the sidebar and contact page
- Contact form that emails messages via [Resend](https://resend.com)

## Requirements

- Node.js 20+ (or [Bun](https://bun.sh) 1.1+)
- npm, pnpm, or bun

## Local setup

```sh
# 1. Clone / unzip the project, then enter the folder
cd youstina-portfolio

# 2. Install dependencies
npm install        # or: bun install

# 3. Create your local environment file
cp .env.example .env
# open .env and fill in RESEND_API_KEY (see below)

# 4. Start the dev server
npm run dev        # or: bun run dev
```

The app runs at **http://localhost:8080**.

## Environment variables

See [`.env.example`](./.env.example) for the full list. Only the contact form
needs configuration:

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For the contact form | Server-side key used to send contact emails |

Without it the site still runs; the contact form shows a friendly error and
asks visitors to email directly.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server on port 8080 |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Project structure

```text
public/                     Static assets (CV PDF, favicon, robots.txt)
src/
  components/               Reveal, SectionNav, shadcn/ui components
  lib/contact.functions.ts  Server function that sends the contact email
  routes/                   File-based routes (__root, index, projects, skills, blog, contact)
  styles.css                Tailwind v4 theme tokens and animations
```

## Deployment

Any host that supports a TanStack Start / Vite build works. Run
`npm run build` and deploy the generated output, making sure `RESEND_API_KEY`
is set as a server environment variable.
