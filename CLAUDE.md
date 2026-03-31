# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build
npm run build:dev  # Dev-mode build
npm run lint       # ESLint
npm run test       # Run tests once (vitest)
npm run test:watch # Run tests in watch mode
npm run preview    # Preview production build
```

## Business Context

**Client:** Claim Consultants — Pakistan-based industrial Loss Assessing firm.

**CRITICAL — Business Model:**
- They are **Loss Assessors** — they work for the **insured/policyholder**
- They are NOT Loss Adjusters (who work for the insurance company)
- Every piece of content must reflect this: "we represent the insured"
- Never use the words "Loss Adjusting" or "adjuster" in any content written for this site

**Background:**
- Founded by B.E qualified Mechanical & Electrical Engineers
- Field experience in Textile, Power (energy), and Pharmaceutical industries
- Services: Policy Review, Root Cause Analysis, Claim Documentation, Claim Handling

**Target clients:** Industrial clients (textile mills, power plants, pharma manufacturers) who have suffered a loss and need professional representation against their insurer.

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui + Framer Motion

**Routing:** React Router DOM v6. All routes are defined in `src/App.tsx`. Pages live in `src/pages/`, reusable sections in `src/components/`.

**All routes:**
- `/` → `Index.tsx`
- `/about` → `AboutPage.tsx`
- `/services` → `ServicesPage.tsx`
- `/industries` → `IndustriesPage.tsx`
- `/case-studies` → `CaseStudiesPage.tsx`
- `/contact` → `ContactPage.tsx`
- `/blog` → `BlogPage.tsx`

**Styling system:**
- Custom color tokens in `tailwind.config.ts`: `kpmgdark` (#00338D), `kpmgmid` (#0051BA), `kpmglight` (#4178D9), `kpmgnavy`, `offwhite`, `slategray`, `lightblue`, `darktext`
- Custom utility classes in `src/index.css`: `.btn-kpmg`, `.btn-kpmg-outline`, `.card-blue-top`, `.section-divider`
- Font families: `font-sans` → Source Sans Pro, `font-heading` → Exo (both from Google Fonts, imported in `index.css`)
- Use `cn()` from `src/lib/utils.ts` for conditional class merging (clsx + tailwind-merge)

**UI Components:** shadcn/ui components in `src/components/ui/`. Do not modify these — they are generated primitives built on Radix UI.

**Animation pattern:** Framer Motion with scroll-triggered `whileInView` animations. Always use `viewport={{ once: true }}` and stagger with `transition={{ delay: i * 0.1 }}`.

**Assets:**
- Illustrations: `src/assets/illustrations/` (imported directly in components)
- Hero carousel images: `public/Heroimage/`
- Industry images: `public/industries/`
- About/banner images: `public/about/`
- Logo: `public/Logo/logo.webp`

**SEO:** Use `react-helmet-async` `<Helmet>` in each page component for `<title>` and `<meta name="description">`.

**Forms:** React Hook Form + Zod for validation. Data fetching uses TanStack React Query (QueryClient in `src/App.tsx`).

## Homepage Section Order (Index.tsx)

1. `Hero` — carousel background, static headline + value props + CTA
2. `About` — "WHO WE ARE" intro
3. `SplitBanner` — image + text banner
4. `WhatWeDo` — 4 services grid
5. `Mission` — core principles grid
6. `Industries` — sectors served
7. `CaseStudies` — claim history carousel
8. `Testimonials` — client quotes
9. `Contact` — inquiry form

## Key Conventions

- Active nav link: `location.pathname === link.path` comparison via `useLocation()`
- Responsive breakpoints follow `sm` / `lg` pattern (mobile-first, desktop at `lg:`)
- Section layout: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container
- `section-divider` between sections in `src/pages/Index.tsx`
- Services in navbar and WhatWeDo are 4 only: Policy Review, Root Cause Analysis, Claim Documentation, Claim Handling
- Navbar Services dropdown: click to open (not hover), outside click to close — uses `useRef` + `mousedown` event
- Git remote: `https://github.com/saqibbinshabbir007/Claim-consult.git`

## Content Rules

- No AI-generated vibe — write like a real firm, not a template
- No filler phrases like "leveraging synergies", "seamless experience", "cutting-edge solutions"
- Tone: direct, technical, professional — like a consulting firm's actual website
- Always position the firm on the **insured's side**, never neutral
