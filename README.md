# teo.ai Marketing Site

A content-managed marketing site for **teo.ai**, built with Next.js 14 (App Router) and powered by Prismic slices. The project pairs animated hero storytelling with case studies, integration showcases, and a custom login funnel, all editable from Prismic's editor.

- **Production CMS**: Prismic (`teo-ai` repository)
- **UI layer**: Next.js 14 · React 18 · TypeScript · Tailwind CSS · NextUI · GSAP/Framer Motion
- **Content primitives**: Shared slices for Hero, Bento feature grid, Showcase, Integrations, Case Studies, Call To Action, Login, and Rich Text


## Getting Started

### Prerequisites
- Node.js 18.17+ and npm 9+
- Access to the `teo-ai` Prismic repository (or your own fork)
- Optional: a Prismic access token if the repository is not public

### Install & run
```bash
npm install
npm run dev
```

`npm run dev` launches both the Next.js dev server and Slice Machine (for local slice/model editing). Use `npm run next:dev` if you only need the Next.js server, or `npm run slicemachine` to open Slice Machine independently.

### Environment variables
Create a `.env.local` file if you need to override defaults:

```bash
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=teo-ai   # Different Prismic environment name, optional
PRISMIC_ACCESS_TOKEN=xxxxxxxx            # Required only if the repository is private
```

> `createClient` in `src/prismicio.ts` falls back to the repository name from `slicemachine.config.json`, so no configuration is needed for public repositories.

## Project Structure

```
src/
  app/               # App Router routes, layouts, providers, preview & revalidate endpoints
  components/        # Reusable UI (header/footer with Prismic settings integration, StarGrid etc.)
  hooks/             # `usePrefersReducedMotion` hook shared across GSAP animations
  slices/            # Slice components registered in `src/slices/index.ts`
  prismicio.ts       # Prismic client factory + route resolvers
customtypes/         # Slice Machine models for Prismic custom types and shared slices
```

Key route handlers:
- `src/app/page.tsx`: Homepage, resolves the `page` document with UID `home`
- `src/app/[uid]/page.tsx`: Static pages driven by the `page` custom type
- `src/app/case-study/[uid]/page.tsx`: Case study detail pages with logo hero and dynamic slice zone
- `src/app/login/page.tsx`: Login landing page rendered from the dedicated `login` custom type
- `src/app/api/revalidate/route.ts`: Helper endpoint to revalidate Prismic-tagged pages on demand

## Content Model

Custom types shipped with the repo:
- `settings`: Global navigation, default metadata, CTA toggle for nav items (used in `Header`/`Footer`)
- `page`: Marketing pages composed of shared slices with per-page SEO fields
- `case_study`: Company-specific case studies; linked from the `CaseStudies` slice
- `login`: Single document providing the login form slice

Shared slices available from Slice Machine (`src/slices`):
- `Hero`: Animated hero section with GSAP-powered entrance animations and StarGrid backdrop
- `Bento`: Configurable feature cards with optional wide layout, gradient accents, and Prismic-managed imagery
- `Showcase`: Scroll-triggered product highlight with CTA and media panel
- `Integrations`: Animated integration timeline; supports `digitalocean`, `cloudflare`, `npm`, `github`, `figma`, and `fly` icon keys
- `CaseStudies`: Fetches linked `case_study` documents server-side and renders logo/summary pairs
- `CallToAction`: Gradient-backed CTA with branded mark
- `Login`: NextUI-based credential form using Prismic copy
- `RichText`: General purpose long-form content with hyperlink/code span serializers

All slices are auto-registered through `src/slices/index.ts`, enabling lazy loading via Next.js dynamic imports.

## Animations & Accessibility
- Animations are orchestrated with GSAP/Framer Motion; the shared `usePrefersReducedMotion` hook honors system reduced-motion preferences and disables transitions when necessary
- Background motifs (`StarGrid`, integration "signal lines") rely on Tailwind-based utility classes defined in `globals.css`

## Development Workflow
1. **Edit content** in Prismic; navigation updates happen in the `Settings` singleton
2. **Model or tweak slices** with Slice Machine (`http://localhost:9999` by default) and preview them at `http://localhost:3000/slice-simulator`
3. **Fetch new case studies** by linking a `case_study` document inside the `CaseStudies` slice; routes are generated via `generateStaticParams`
4. **Trigger revalidation** by POSTing to `/api/revalidate` after publishing content, or rely on on-demand revalidation tags in production

## Available npm scripts
- `npm run dev` – Next.js dev server + Slice Machine (concurrently)
- `npm run next:dev` – Next.js dev server only
- `npm run slicemachine` – Slice Machine standalone
- `npm run build` – Production build
- `npm run start` – Serve the built app
- `npm run lint` – Run Next.js/ESLint rules
- `npm run format` – Format with Prettier + Tailwind plugin

## Deployment Notes
- Production builds pre-render Prismic documents; previews are enabled via `@prismicio/next`'s `PrismicPreview` component in `src/app/layout.tsx`
- ISR is configured through `next: { revalidate: 5 }` during development and tag-based revalidation in production (`"prismic"` cache tag)
- Ensure the hosting environment exposes any required Prismic environment name or tokens via env vars described above

## License

Apache License 2.0 – see [`LICENSE`](./LICENSE).
