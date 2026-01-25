# Source Tree Analysis

**Project:** project-rulebook-web (Meeple Landing Page)
**Generated:** 2026-01-22
**Repository Type:** Monolith
**Framework:** Next.js 14.2.18 with App Router

## Directory Structure

```
project-rulebook-landing-page/
├── .claude/                    # Claude Code AI assistant configuration
│   └── commands/bmad/          # BMAD workflow commands
├── .cursor/                    # Cursor IDE AI rules
│   └── rules/bmad/             # BMAD rules for Cursor
├── .gemini/                    # Google Gemini AI commands
│   └── commands/               # Gemini workflow commands
├── docs/                       # Project documentation
│   └── ios/                    # iOS app documentation & migration guides
│       └── screenshots/        # iOS app screenshots
├── public/                     # Static assets (served at /)
│   └── screenshots/            # Product screenshots
├── src/                        # Source code root
│   ├── app/                    # Next.js App Router pages
│   │   ├── fonts/              # Custom font files
│   │   ├── pricing/            # /pricing page
│   │   ├── privacy/            # /privacy page
│   │   ├── support/            # /support page
│   │   ├── terms/              # /terms page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # ⭐ ROOT LAYOUT (entry point)
│   │   ├── page.tsx            # ⭐ HOME PAGE (entry point)
│   │   └── sitemap.ts          # Dynamic sitemap generation
│   ├── components/             # React components
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   └── index.ts        # Barrel export
│   │   ├── sections/           # Page section components
│   │   │   ├── Hero.tsx        # Hero section
│   │   │   ├── Features.tsx    # Features showcase
│   │   │   ├── HowItWorks.tsx  # Process explanation
│   │   │   ├── USP.tsx         # Unique selling points
│   │   │   ├── Testimonials.tsx# Customer testimonials
│   │   │   ├── Pricing.tsx     # Pricing plans
│   │   │   ├── FinalCTA.tsx    # Final call-to-action
│   │   │   └── index.ts        # Barrel export
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx      # Button component
│   │       ├── Card.tsx        # Card container
│   │       ├── Badge.tsx       # Status badge
│   │       ├── Input.tsx       # Form input
│   │       ├── PhoneMockup.tsx # Device mockup
│   │       ├── SectionHeader.tsx # Section title
│   │       └── index.ts        # Barrel export
│   └── lib/                    # Utility functions
│       └── utils.ts            # Class name utilities (cn function)
├── .env                        # Environment variables (gitignored)
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # TailwindCSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project readme
```

## Entry Points

| File | Type | Description |
|------|------|-------------|
| `src/app/layout.tsx` | Root Layout | Application shell, metadata, fonts, analytics |
| `src/app/page.tsx` | Home Page | Main landing page composition |
| `src/app/*/page.tsx` | Sub Pages | Additional route pages (pricing, privacy, support, terms) |

## Critical Directories

### `/src/app/` - Next.js App Router
- **Purpose:** Route definitions and page components
- **Pattern:** File-based routing with layout inheritance
- **Key Files:**
  - `layout.tsx` - Root layout with metadata, fonts, Plausible analytics
  - `page.tsx` - Home page assembling all sections
  - `sitemap.ts` - Dynamic sitemap for SEO

### `/src/components/` - React Components
- **Purpose:** Reusable UI building blocks
- **Organization:**
  - `layout/` - Structural components (Header, Footer)
  - `sections/` - Landing page sections (Hero, Features, etc.)
  - `ui/` - Atomic UI components (Button, Card, Badge)

### `/src/lib/` - Utilities
- **Purpose:** Shared utility functions
- **Key Functions:**
  - `cn()` - Class name utility combining clsx + tailwind-merge

### `/public/` - Static Assets
- **Purpose:** Publicly served static files
- **Contents:**
  - `screenshots/` - Product screenshots
  - `favicon.ico`, `og-image.png`, `twitter-card.png` - Branding assets

### `/docs/ios/` - iOS Documentation
- **Purpose:** iOS app documentation and migration guides
- **Note:** Contains Android-to-iOS migration documentation

## File Counts

| Category | Count |
|----------|-------|
| TypeScript Files | 26 |
| Page Routes | 5 |
| Layout Components | 2 |
| Section Components | 7 |
| UI Components | 6 |
| Utility Files | 1 |

## Path Aliases

Configured in `tsconfig.json`:
- `@/*` → `./src/*`

Example: `import { Button } from "@/components/ui"`
