# Project Overview

**Project Name:** project-rulebook-web
**Product Name:** Meeple
**Domain:** https://meeple.app
**Generated:** 2026-01-22

---

## Executive Summary

**Meeple** is an AI-powered mobile application that helps users learn board game rules in 60 seconds by scanning the game box. This repository contains the **landing page website** for the Meeple product.

### Purpose

- Marketing and product showcase
- User acquisition and conversion funnel
- SEO and organic discovery
- Legal compliance (terms, privacy, support pages)

### Target Audience

- Board game enthusiasts
- Casual gamers hosting game nights
- Users frustrated with complex rulebooks

---

## Tech Stack Summary

| Layer | Technology | Version |
|-------|------------|---------|
| **Runtime** | Node.js | >= 18 |
| **Framework** | Next.js | 14.2.18 |
| **UI Library** | React | ^18 |
| **Language** | TypeScript | ^5 |
| **Styling** | TailwindCSS | ^3.4.1 |
| **Linting** | ESLint | ^8 |
| **Analytics** | Plausible | - |

---

## Architecture Classification

| Attribute | Value |
|-----------|-------|
| **Type** | Web Application |
| **Pattern** | Static Landing Page |
| **Rendering** | SSG (Static Site Generation) |
| **State** | Component-local only |
| **Database** | None |
| **API** | None |

---

## Repository Structure

```
project-rulebook-landing-page/
├── src/
│   ├── app/              # Next.js App Router (pages)
│   ├── components/       # React components
│   │   ├── layout/       # Header, Footer
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI
│   └── lib/              # Utilities
├── public/               # Static assets
├── docs/                 # Project documentation
└── [config files]        # TS, Tailwind, ESLint, etc.
```

---

## Key Features

### Landing Page Sections

1. **Hero** - Main headline, value proposition, CTA
2. **Features** - Product capabilities showcase
3. **How It Works** - 3-step process explanation
4. **Testimonials** - Social proof
5. **USP** - Unique selling points
6. **Pricing** - Plan options
7. **Final CTA** - Conversion section

### Additional Pages

- `/pricing` - Detailed pricing page
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/support` - Support information

---

## Design System

**Style:** Neo-Brutalist

- Bold colors (orange, pink, blue, purple)
- Hard drop shadows (offset, no blur)
- Heavy typography (font-weight 900)
- High contrast
- Dark mode support

---

## Documentation Index

| Document | Description |
|----------|-------------|
| [architecture.md](./architecture.md) | Full architecture documentation |
| [source-tree-analysis.md](./source-tree-analysis.md) | Directory structure with annotations |
| [ui-components-root.md](./ui-components-root.md) | Component inventory and design system |
| [development-guide.md](./development-guide.md) | Setup and development instructions |
| [project-scan-report.json](./project-scan-report.json) | Machine-readable scan data |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Deployment

**Recommended:** Vercel (zero-config Next.js deployment)

The site is static and can be deployed to any CDN:
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- AWS Amplify

---

## Related Projects

Based on the `docs/ios/` folder, there is a related **iOS/Android mobile application** for Meeple. The landing page promotes downloads of the mobile app.

---

## Contacts & Resources

- **Website:** https://meeple.app
- **Analytics:** Plausible dashboard
