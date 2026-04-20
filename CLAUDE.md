# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is configured in this project.

## Architecture Overview

This is a **Next.js 14 App Router** personal portfolio site with a file-based markdown blog system.

### Key Directories

- `src/app/` — App Router pages and layouts. Routes: `/`, `/blog`, `/blog/[slug]`, `/portfolio`, `/portfolio/[slug]`
- `src/components/` — Reusable React components; shadcn/ui components live in `src/components/ui/`
- `src/data/resume.tsx` — **Single source of truth** for all personal data (work experience, education, skills, projects, links). Edit here to update content across the site.
- `src/lib/` — Utilities: `utils.ts` (cn helper), `seo.ts`/`blog-seo.ts`/`portfolio-seo.ts` (metadata generators)
- `content/` — Markdown files for blog posts (with YAML frontmatter)

### Content Management

**Blog posts** are `.md` files in `content/`. Frontmatter fields drive SEO and listing metadata. The blog pipeline uses `gray-matter` → `unified`/`remark`/`rehype` → `rehype-pretty-code` (Shiki) for syntax highlighting.

**Portfolio and personal data** live entirely in `src/data/resume.tsx` as TypeScript constants — no CMS or database.

### Styling

- Tailwind CSS with the `class` dark mode strategy (toggled via `next-themes`)
- shadcn/ui components (Radix UI primitives) in `src/components/ui/`
- Framer Motion / Motion for animations
- Path alias: `@/*` → `src/*`

### SEO & Config

- `next.config.mjs` — security headers, image optimization (webp/avif, 1-year TTL), short URL redirects (resume, social links with UTM params), `optimizePackageImports` for lucide-react and framer-motion
- `src/app/sitemap.ts` — auto-generated sitemap
- Each page uses `generateMetadata()` with JSON-LD structured data (BlogPosting, ItemList, BreadcrumbList schemas)
- Redirects are managed in `src/app/lib/redirects.ts` and imported into `next.config.mjs`

### Component Conventions

- Server components by default; add `"use client"` only when needed (event handlers, hooks, animations)
- `generateStaticParams()` used in `blog/[slug]` and `portfolio/[slug]` for static generation
