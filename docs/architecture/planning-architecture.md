---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
workflowComplete: true
inputDocuments:
  - path: 'package.json'
    type: 'project-config'
    description: 'Next.js project dependencies and scripts'
  - path: 'tailwind.config.ts'
    type: 'design-tokens'
    description: 'Tailwind CSS configuration with brutalist design system'
  - path: 'src/app/page.tsx'
    type: 'entry-point'
    description: 'Main landing page component structure'
workflowType: 'architecture'
workflowContext: 'static-landing-page'
project_name: 'meeple-landing-page'
user_name: 'Ivo'
date: '2025-12-26'
---

# Architecture Document - Meeple Landing Page

**Author:** Ivo
**Date:** 2025-12-26
**Status:** Planning

---

## Executive Summary

The Meeple Landing Page is a static marketing website built with Next.js 14 and Tailwind CSS. It follows a simple, performance-optimized architecture designed for fast load times, SEO excellence, and easy maintenance. The site generates static HTML at build time, requiring no server-side runtime.

---

## Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    meeple-landing-page                          │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                     Next.js 14                           │   │
│  │                   (App Router)                           │   │
│  │                                                          │   │
│  │  ┌──────────────────────────────────────────────────┐   │   │
│  │  │                   src/app/                        │   │   │
│  │  │  ┌────────────┐  ┌────────────┐  ┌────────────┐  │   │   │
│  │  │  │ layout.tsx │  │  page.tsx  │  │ globals.css│  │   │   │
│  │  │  └────────────┘  └────────────┘  └────────────┘  │   │   │
│  │  └──────────────────────────────────────────────────┘   │   │
│  │                         │                                │   │
│  │  ┌──────────────────────▼──────────────────────────┐    │   │
│  │  │               src/components/                    │    │   │
│  │  │  ┌─────────────┐  ┌─────────────┐              │    │   │
│  │  │  │   layout/   │  │  sections/  │              │    │   │
│  │  │  │ Header      │  │ Hero        │              │    │   │
│  │  │  │ Footer      │  │ Features    │              │    │   │
│  │  │  └─────────────┘  │ HowItWorks  │              │    │   │
│  │  │                   │ Testimonials│              │    │   │
│  │  │                   │ USP         │              │    │   │
│  │  │                   │ Pricing     │              │    │   │
│  │  │                   │ FinalCTA    │              │    │   │
│  │  │                   └─────────────┘              │    │   │
│  │  └──────────────────────────────────────────────────┘   │   │
│  │                         │                                │   │
│  │  ┌──────────────────────▼──────────────────────────┐    │   │
│  │  │            Tailwind CSS + Design Tokens          │    │   │
│  │  └──────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  Static Export  │
                    │   (next build)  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Vercel      │
                    │   (Deployment)  │
                    └─────────────────┘
```

### Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Framework | Next.js | 14.2.18 | React meta-framework with SSG |
| Language | TypeScript | 5.x | Type-safe development |
| UI | React | 18.x | Component-based UI |
| Styling | Tailwind CSS | 3.4.1 | Utility-first CSS |
| Build | Next.js Compiler | Built-in | SWC-based compilation |
| Hosting | Vercel | - | Edge deployment (recommended) |

### Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Static Site Generation (SSG)** | Maximum performance, no server required |
| **Next.js App Router** | Modern React patterns, built-in optimizations |
| **Tailwind CSS** | Rapid development, design token integration |
| **No CMS** | Content changes via code, full control |
| **No Database** | Pure static content, no persistence needs |

---

## Project Structure

```
meeple-landing-page/
├── .next/                    # Build output (gitignored)
├── _bmad/                    # BMAD system configuration
├── _bmad-output/             # BMAD workflow outputs
│   └── project-planning-artifacts/
│       ├── prd.md
│       ├── ux-design-specification.md
│       └── architecture.md
├── docs/                     # Reference documentation
│   └── ios/                  # iOS design reference
├── node_modules/             # Dependencies (gitignored)
├── public/                   # Static assets
│   ├── favicon.ico
│   ├── app-store-badge.svg
│   ├── play-store-badge.svg
│   └── images/
│       ├── hero-mockup.png
│       ├── feature-icons/
│       └── og-image.png
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Landing page
│   │   ├── globals.css       # Global styles
│   │   ├── privacy/          # Privacy policy page
│   │   │   └── page.tsx
│   │   └── terms/            # Terms of service page
│   │       └── page.tsx
│   ├── components/           # React components
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── sections/         # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── USP.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   └── index.ts
│   │   └── ui/               # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Container.tsx
│   │       ├── Badge.tsx
│   │       └── index.ts
│   └── lib/                  # Utilities
│       └── utils.ts          # cn() and helpers
├── .env                      # Environment variables
├── .eslintrc.json           # ESLint config
├── .gitignore               # Git ignore patterns
├── next.config.mjs          # Next.js config
├── package.json             # Project manifest
├── postcss.config.mjs       # PostCSS config
├── tailwind.config.ts       # Tailwind with design tokens
└── tsconfig.json            # TypeScript config
```

---

## Component Architecture

### Component Hierarchy

```
RootLayout
└── Page
    ├── Header
    │   ├── Logo
    │   ├── NavLinks
    │   └── CTAButton
    ├── Main
    │   ├── Hero
    │   │   ├── Headline
    │   │   ├── Subheadline
    │   │   ├── StoreBadges
    │   │   └── AppMockup
    │   ├── Features
    │   │   └── FeatureCard (x6)
    │   ├── HowItWorks
    │   │   └── Step (x3)
    │   ├── Testimonials
    │   │   └── TestimonialCard (x4)
    │   ├── USP
    │   │   └── ComparisonCard (x2)
    │   ├── Pricing
    │   │   └── PricingCard (x3)
    │   └── FinalCTA
    │       └── StoreBadges
    └── Footer
        ├── Logo
        ├── Links
        └── StoreBadges
```

### Component Responsibilities

#### Layout Components

| Component | Responsibility |
|-----------|---------------|
| `Header` | Navigation, logo, primary CTA, mobile menu |
| `Footer` | Links, legal, social, store badges |

#### Section Components

| Component | Responsibility |
|-----------|---------------|
| `Hero` | Value proposition, store download CTAs, app mockup |
| `Features` | 6 feature cards highlighting capabilities |
| `HowItWorks` | 3-step visual process |
| `Testimonials` | Social proof with user quotes |
| `USP` | Differentiation from competitors |
| `Pricing` | Credit pack options and pricing |
| `FinalCTA` | Closing download prompt |

#### UI Components

| Component | Responsibility |
|-----------|---------------|
| `Button` | Primary, secondary, destructive variants |
| `Card` | Brutalist card with border/shadow |
| `Container` | Max-width content wrapper |
| `Badge` | Inline metadata/labels |

### Component Patterns

#### Server Components (Default)
All components are React Server Components by default:
- Static content rendering
- No client-side JavaScript shipped
- Better performance

#### Client Components (When Needed)
Add `'use client'` directive for:
- Mobile menu toggle state
- Scroll-based animations
- Dark mode toggle (if implemented)

---

## Styling Architecture

### Tailwind Configuration

The `tailwind.config.ts` defines the brutalist design system:

```typescript
// Key configuration areas
{
  theme: {
    extend: {
      colors: {
        surface: { /* Surface palette */ },
        content: { /* Text colors */ },
        brutalist: { /* Accent colors */ }
      },
      fontSize: {
        'display-lg': [...],
        'brutalist-title': [...]
      },
      boxShadow: {
        'brutalist-sm': '4px 4px 0 0 #000000',
        'brutalist-md': '6px 6px 0 0 #000000',
        // ...
      }
    }
  }
}
```

### CSS Organization

```css
/* globals.css structure */

/* 1. Tailwind layers */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 2. Base layer customizations */
@layer base {
  html { ... }
  body { ... }
}

/* 3. Component layer (reusable patterns) */
@layer components {
  .btn-primary { ... }
  .card-brutalist { ... }
}

/* 4. Utilities layer (custom utilities) */
@layer utilities {
  .text-balance { ... }
}
```

### Utility Patterns

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Build & Deployment

### Build Process

```bash
# Development
npm run dev          # Start dev server on :3000

# Production build
npm run build        # Generate static site
npm run start        # Serve production build locally

# Linting
npm run lint         # Run ESLint
```

### Static Export Configuration

```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',           // Static export
  images: {
    unoptimized: true         // For static hosting
  },
  trailingSlash: true         // Optional: /page/ instead of /page
};
```

### Deployment Options

| Platform | Configuration | Notes |
|----------|---------------|-------|
| **Vercel** (Recommended) | Auto-detected | Zero-config, edge CDN |
| Netlify | `npm run build` | Similar to Vercel |
| Cloudflare Pages | `npm run build` | Fast edge network |
| AWS S3 + CloudFront | Static hosting | More setup required |

### Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO | Yes |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (if used) | No |

---

## Performance Optimization

### Built-in Optimizations

| Optimization | Implementation |
|--------------|----------------|
| Static Generation | All pages pre-rendered at build |
| Image Optimization | Next.js Image component |
| Font Optimization | next/font for system fonts |
| Code Splitting | Automatic per-page splitting |
| Minification | SWC compiler built-in |

### Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | <1.5s | Lighthouse |
| Largest Contentful Paint | <2.5s | Lighthouse |
| Time to Interactive | <3.5s | Lighthouse |
| Cumulative Layout Shift | <0.1 | Core Web Vitals |
| Performance Score | >90 | Lighthouse |

### Image Strategy

```typescript
// Use Next.js Image for optimized loading
import Image from 'next/image';

<Image
  src="/images/hero-mockup.png"
  alt="Meeple app screenshot"
  width={400}
  height={800}
  priority              // Above-fold images
  placeholder="blur"    // Optional blur placeholder
/>
```

---

## SEO Implementation

### Meta Tags Structure

```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: 'Meeple - From Box to Playing in 60 Seconds',
  description: 'Never read a rulebook again. Snap a photo of any board game box and get instant, AI-generated rules.',
  keywords: ['board game rules', 'game rules app', 'learn board games'],
  openGraph: {
    title: 'Meeple - Board Game Rules Made Simple',
    description: 'Snap. Learn. Play.',
    url: 'https://meeple.app',
    siteName: 'Meeple',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeple - Board Game Rules Made Simple',
    description: 'Snap. Learn. Play.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};
```

### Semantic HTML

```html
<!-- Proper heading hierarchy -->
<h1>From Box to Playing in 60 Seconds</h1>
<h2>Why Meeple?</h2>
<h3>AI-Powered Recognition</h3>

<!-- Semantic sections -->
<header role="banner">...</header>
<main role="main">
  <section aria-labelledby="features-heading">...</section>
</main>
<footer role="contentinfo">...</footer>
```

### Sitemap & Robots

```typescript
// src/app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://meeple.app', lastModified: new Date() },
    { url: 'https://meeple.app/privacy', lastModified: new Date() },
    { url: 'https://meeple.app/terms', lastModified: new Date() },
  ];
}

// src/app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://meeple.app/sitemap.xml',
  };
}
```

---

## Analytics Integration

### Recommended: Privacy-Focused Analytics

```typescript
// Plausible (recommended)
// Add to layout.tsx <head>
<script
  defer
  data-domain="meeple.app"
  src="https://plausible.io/js/script.js"
/>

// OR Vercel Analytics (zero-config on Vercel)
import { Analytics } from '@vercel/analytics/react';
<Analytics />
```

### Event Tracking

| Event | Trigger | Data |
|-------|---------|------|
| `page_view` | Page load | URL, referrer |
| `cta_click` | Store button click | Store type (iOS/Android) |
| `scroll_depth` | Scroll milestones | 25%, 50%, 75%, 100% |
| `section_view` | Section enters viewport | Section name |

---

## Accessibility

### Implementation Checklist

| Requirement | Implementation |
|-------------|----------------|
| Skip link | First focusable element |
| Alt text | All images described |
| Heading hierarchy | H1 → H2 → H3 logical |
| Focus indicators | Visible focus rings |
| Color contrast | 4.5:1 minimum |
| Keyboard navigation | All interactive elements |
| ARIA labels | Where semantic HTML insufficient |
| Reduced motion | `prefers-reduced-motion` respected |

### Testing

```bash
# Lighthouse accessibility audit
npm run build
npx serve out
# Run Lighthouse in Chrome DevTools

# axe-core testing
npm install -D @axe-core/react
# Add to development build for runtime checks
```

---

## Development Workflow

### Git Workflow

| Branch | Purpose |
|--------|---------|
| `main` | Production deployments |
| `staging` | Development integration |
| `feature/*` | New features |
| `fix/*` | Bug fixes |

### Commit Standards

```bash
# Conventional commits
feat(hero): add animated mockup
fix(footer): correct link spacing
docs(readme): update deployment instructions
style(pricing): align card heights
```

### Code Quality

```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals"]
}
```

```bash
# Pre-commit checks
npm run lint
npm run build
```

---

## Security Considerations

### Headers Configuration

```typescript
// next.config.mjs
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
];

const nextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};
```

### Content Security

| Concern | Mitigation |
|---------|------------|
| No user input | Static content only |
| No sensitive data | No secrets in code |
| External resources | Only trusted CDNs |
| HTTPS | Enforced by hosting |

---

## Monitoring & Maintenance

### Monitoring Setup

| Tool | Purpose |
|------|---------|
| Vercel Analytics | Performance metrics |
| Plausible/Fathom | Traffic analytics |
| UptimeRobot | Availability monitoring |

### Maintenance Tasks

| Task | Frequency |
|------|-----------|
| Dependency updates | Monthly |
| Content refresh | As needed |
| Performance audit | Quarterly |
| Accessibility audit | Quarterly |

---

## Future Considerations

### Potential Enhancements

| Feature | Complexity | Trigger |
|---------|------------|---------|
| Blog section | Medium | SEO strategy |
| i18n support | Medium | International launch |
| Interactive demo | High | Marketing request |
| A/B testing | Low | Conversion optimization |
| Waitlist form | Low | Android beta launch |

### Scaling Path

The static architecture scales infinitely via CDN. Future dynamic features would require:
- API routes (Next.js built-in)
- Database (Supabase, PlanetScale)
- Auth (if needed for waitlist/beta)

---

*Architecture Document - Meeple Landing Page*
*Generated: 2025-12-26*
