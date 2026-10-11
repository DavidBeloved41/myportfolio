# David Atakpa Portfolio

A personal portfolio for David Atakpa, Software Developer and Product Builder in Ghana. The site focuses on practical software products and clearly distinguishes active development from planned work.

## Features

- Responsive home, about, projects, case-study, and contact pages.
- Project cards and statically generated case studies driven by typed data in `data/projects.ts`.
- Source-qualified SVG architecture diagrams with an accessible, keyboard-operable lightbox on the two existing case studies.
- Explicit project and feature status labels; unknown implementation details and links are omitted.
- Light and dark themes that follow the operating-system preference, with a manual toggle.
- Accessible navigation and dialog controls, visible keyboard focus, reduced-motion support, and semantic page structure.
- Page metadata, Open Graph and Twitter cards, a favicon, `robots.txt`, and a generated sitemap.
- No contact form backend or invented email address.

## Technology

- Next.js App Router and React
- TypeScript
- Tailwind CSS 4, with a small custom CSS design system
- ESLint
- Lucide React icons

Small visual transitions use CSS so they remain lightweight and respect reduced-motion preferences. The portfolio does not add an animation runtime for simple entrance and hover effects.

## Project Structure

```text
app/                 App Router pages, metadata, sitemap, robots, favicon
components/layout/   Shared header and footer
components/projects/ Project cards, SVG architecture diagrams, and lightbox
data/architecture.ts  Separate source-qualified diagram content
components/ui/       Shared section heading
data/projects.ts     Typed portfolio project content
lib/site.ts          Configured site origin for SEO routes
public/              Public static assets
types/project.ts     Project and feature types
```

## Local Development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Local development uses `http://localhost:3000` by default and can override it with `NEXT_PUBLIC_SITE_URL`; `.env.example` documents this local setting. Production builds always use `https://david-atakpa.vercel.app` for canonicals, Open Graph URLs, the sitemap, and `robots.txt`, regardless of that local setting. No Vercel environment variable is required for the production origin.

## Checks and Production Build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

The production build can be deployed to Vercel or another host that supports Next.js. This portfolio currently uses `https://david-atakpa.vercel.app` as its fixed production origin; update `lib/site.ts` if the production domain changes.

## Adding a Project

Add one `Project` entry to `data/projects.ts`. The project index, featured work, static case-study route, and sitemap consume this data automatically. Keep unavailable fields out until their details and links are confirmed.
