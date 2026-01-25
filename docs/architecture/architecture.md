# Architecture Documentation

**Project:** project-rulebook-web (Meeple Landing Page)
**Generated:** 2026-01-22
**Version:** 1.0.0

---

## Executive Summary

This is a **Next.js 14 landing page** for **Meeple**, an AI-powered board game rules application. The website serves as a marketing and conversion funnel for the mobile app, featuring:

- Product showcase with features and benefits
- Pricing plans presentation
- Social proof (testimonials)
- Call-to-action funnels
- Legal pages (terms, privacy, support)

**Architecture Style:** Static Site Generation (SSG) friendly landing page with Component-Based UI architecture.

**Target URL:** https://meeple.app

---

## Technology Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| Language | TypeScript | ^5 | Type-safe JavaScript |
| Framework | Next.js | 14.2.18 | React meta-framework with App Router |
| UI Library | React | ^18 | Component-based UI |
| Styling | TailwindCSS | ^3.4.1 | Utility-first CSS |
| CSS Processing | PostCSS | ^8 | CSS transformations |
| Linting | ESLint | ^8 | Code quality |
| Utilities | clsx, tailwind-merge | ^2.1.1, ^3.4.0 | Class name management |
| Analytics | Plausible | N/A | Privacy-friendly analytics |

---

## Architecture Pattern

### Pattern: Next.js App Router with Component-Based UI

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                               │
├─────────────────────────────────────────────────────────────┤
│                     Next.js App Router                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                    layout.tsx                        │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │               page.tsx                       │    │    │
│  │  │  ┌─────────┐ ┌─────────┐ ┌─────────┐       │    │    │
│  │  │  │ Header  │ │ Section │ │ Footer  │       │    │    │
│  │  │  └────┬────┘ │Components│ └────┬────┘       │    │    │
│  │  │       │      └────┬────┘      │            │    │    │
│  │  │       └───────────┴───────────┘            │    │    │
│  │  │                   │                         │    │    │
│  │  │         ┌─────────┴─────────┐              │    │    │
│  │  │         │   UI Components   │              │    │    │
│  │  │         │ Button,Card,Badge │              │    │    │
│  │  │         └───────────────────┘              │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                    TailwindCSS Styling                       │
│              (Brutalist Design System)                       │
└─────────────────────────────────────────────────────────────┘
```

### Key Architectural Decisions

1. **App Router (not Pages Router):** Uses Next.js 14's App Router for improved layouts, metadata handling, and server components.

2. **Component Hierarchy:**
   - `layout/` - Structural shells (Header, Footer)
   - `sections/` - Page-level content blocks
   - `ui/` - Atomic, reusable components

3. **Styling Strategy:** TailwindCSS with custom brutalist design system (hard shadows, bold colors, heavy typography).

4. **No Global State:** Simple landing page uses component-local state only (useState, useEffect).

5. **Static Generation:** No API routes or database - pure static content suitable for edge deployment.

---

## Data Architecture

### Current State: No Database

This is a static landing page with no data persistence layer. All content is hardcoded in React components.

### Future Considerations

If dynamic content is needed:
- CMS integration (Contentful, Sanity, Payload)
- Newsletter signup (would require API route + email service)
- Contact form (would require API route + email/CRM)

---

## API Design

### Current State: No API Routes

No `/api` routes exist. The application is purely frontend.

### External Integrations

| Integration | Purpose | Implementation |
|-------------|---------|----------------|
| Plausible Analytics | Page views, conversions | Client-side script in layout.tsx |

---

## Component Architecture

### Component Organization

```
src/components/
├── layout/           # Structural components
│   ├── Header.tsx    # Navigation with mobile menu
│   ├── Footer.tsx    # Site footer with links
│   └── index.ts      # Barrel export
├── sections/         # Page sections (landing page blocks)
│   ├── Hero.tsx      # Main hero with headline + CTA
│   ├── Features.tsx  # Product features grid
│   ├── HowItWorks.tsx# 3-step process explanation
│   ├── USP.tsx       # Unique selling points
│   ├── Testimonials.tsx # Customer quotes
│   ├── Pricing.tsx   # Pricing plans
│   ├── FinalCTA.tsx  # Bottom conversion section
│   └── index.ts      # Barrel export
└── ui/               # Atomic UI components
    ├── Button.tsx    # Primary/secondary buttons
    ├── Card.tsx      # Content card container
    ├── Badge.tsx     # Status/label badges
    ├── Input.tsx     # Form input field
    ├── PhoneMockup.tsx # Device frame for screenshots
    ├── SectionHeader.tsx # Section title pattern
    └── index.ts      # Barrel export
```

### Component Statistics

| Category | Count |
|----------|-------|
| Layout Components | 2 |
| Section Components | 7 |
| UI Components | 6 |
| **Total** | **15** |

---

## Source Tree

See: `source-tree-analysis.md` for detailed directory structure.

Key directories:
- `src/app/` - Pages and routing
- `src/components/` - React components
- `src/lib/` - Utilities
- `public/` - Static assets

---

## Development Workflow

See: `development-guide.md` for complete setup instructions.

### Quick Commands

```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Production server
npm run lint   # Code linting
```

---

## Deployment Architecture

### Recommended: Vercel

```
┌─────────────────┐     ┌─────────────────┐
│   Git Push      │────▶│    Vercel       │
│   (main)        │     │   Build + CDN   │
└─────────────────┘     └────────┬────────┘
                                 │
                        ┌────────▼────────┐
                        │  Edge Network   │
                        │  (Global CDN)   │
                        └────────┬────────┘
                                 │
                        ┌────────▼────────┐
                        │   meeple.app    │
                        └─────────────────┘
```

### Environment Variables

Required for production:
- None currently (static site)
- Plausible domain hardcoded in layout.tsx

---

## Testing Strategy

### Current State: No Tests

No testing framework is configured.

### Recommended Additions

1. **Unit Tests:** Jest + React Testing Library
2. **E2E Tests:** Playwright
3. **Visual Regression:** Chromatic or Percy

### Test Coverage Goals

| Type | Target |
|------|--------|
| Unit | UI components |
| Integration | Page sections |
| E2E | Critical user flows |

---

## Security Considerations

### Current Security Posture

1. **No sensitive data:** Static site with no user data handling
2. **Environment variables:** `.env` properly gitignored
3. **Dependencies:** Keep updated for security patches
4. **HTTPS:** Enforced via Vercel/hosting

### Recommendations

- Add Content Security Policy headers
- Configure security headers in `next.config.mjs`
- Regular dependency audits (`npm audit`)

---

## Performance Characteristics

### Optimizations Applied

- **Font optimization:** next/font with Inter
- **Image optimization:** Public static assets
- **Code splitting:** Automatic via Next.js
- **CSS:** TailwindCSS purged for production

### Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | > 90 |
| Accessibility | > 90 |
| Best Practices | > 90 |
| SEO | > 90 |

---

## SEO Configuration

Configured in `layout.tsx`:

- **Title:** "Meeple — Learn Any Board Game in 60 Seconds"
- **Meta description:** AI-powered rules explanation
- **Open Graph:** Full social sharing metadata
- **Twitter Cards:** Large image cards
- **Sitemap:** Dynamic generation via `sitemap.ts`
- **Robots:** Index/follow enabled

---

## Document References

| Document | Purpose |
|----------|---------|
| `source-tree-analysis.md` | Detailed directory structure |
| `ui-components-root.md` | Component inventory and design system |
| `development-guide.md` | Setup and development instructions |
| `project-scan-report.json` | Full scan data (machine-readable) |
