# Project Documentation Index

**Project:** project-rulebook-web (Meeple Landing Page)
**Generated:** 2026-01-22
**Workflow:** document-project v2.0.0

---

## Project Overview

| Attribute | Value |
|-----------|-------|
| **Repository Type** | Monolith |
| **Project Type** | Web (Static Landing Page) |
| **Primary Language** | TypeScript |
| **Framework** | Next.js 14.2.18 |
| **Architecture** | App Router with Component-Based UI |

### Product Context

- **Name:** Meeple
- **Tagline:** Learn Any Board Game in 60 Seconds
- **Website:** https://meeple.app
- **Purpose:** AI-powered board game rules learning app

---

## Quick Reference

### Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14.2.18 |
| UI Library | React 18 |
| Styling | TailwindCSS 3.4.1 |
| Language | TypeScript 5 |
| Analytics | Plausible |

### Entry Points

| File | Description |
|------|-------------|
| `src/app/layout.tsx` | Root layout (metadata, fonts, analytics) |
| `src/app/page.tsx` | Home page |
| `src/app/*/page.tsx` | Sub-pages (pricing, privacy, support, terms) |

### Architecture Patterns

- Next.js App Router (file-based routing)
- Component-Based UI (layout/sections/ui hierarchy)
- Static Site Generation (SSG)
- TailwindCSS with Brutalist design system
- Dark mode support (class strategy)

---

## Generated Documentation

### Core Documentation

| Document | Description | Status |
|----------|-------------|--------|
| [project-overview.md](./project-overview.md) | Executive summary and project context | ✓ |
| [architecture.md](./architecture.md) | Full architecture documentation | ✓ |
| [source-tree-analysis.md](./source-tree-analysis.md) | Annotated directory structure | ✓ |
| [development-guide.md](./development-guide.md) | Setup and development instructions | ✓ |

### Component & Design

| Document | Description | Status |
|----------|-------------|--------|
| [ui-components-root.md](./ui-components-root.md) | Component inventory and design system | ✓ |

### Machine-Readable Data

| Document | Description | Status |
|----------|-------------|--------|
| [project-scan-report.json](./project-scan-report.json) | Full scan data in JSON format | ✓ |

### Optional Documentation

| Document | Description | Status |
|----------|-------------|--------|
| api-contracts.md | API endpoint documentation | _(N/A - Static site)_ |
| data-models.md | Database schema documentation | _(N/A - No database)_ |
| deployment-guide.md | Deployment configuration | _(Not configured)_ |
| contribution-guide.md | Contribution guidelines | _(Not found)_ |

---

## Existing Documentation

Documentation discovered in the project:

| Document | Type | Location |
|----------|------|----------|
| README.md | Project readme | `/README.md` |
| product-spec.md | iOS product spec | `/docs/ios/product-spec.md` |
| android-migration-*.md | Migration guides | `/docs/ios/` |

---

## Getting Started

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:3000
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

### Deployment

Deploy to Vercel (recommended) - zero configuration required for Next.js apps.

---

## Document Relationships

```
index.md (You are here)
├── project-overview.md          # Executive summary
├── architecture.md              # Technical architecture
│   └── References: source-tree-analysis.md
│   └── References: ui-components-root.md
│   └── References: development-guide.md
├── source-tree-analysis.md      # Directory structure
├── ui-components-root.md        # Component inventory
├── development-guide.md         # Dev setup
└── project-scan-report.json     # Raw scan data
```

---

## AI Assistant Quick Tips

When working with this codebase:

1. **Component changes:** Check `ui-components-root.md` for existing components
2. **Adding pages:** Follow App Router pattern in `src/app/`
3. **Styling:** Use TailwindCSS utilities; see `tailwind.config.ts` for custom theme
4. **State:** Use component-local state (useState/useEffect); no global store
5. **SEO:** Update metadata in `layout.tsx` or page-specific metadata

---

## Scan Metadata

| Metric | Value |
|--------|-------|
| Scan Mode | full |
| Scan Level | deep |
| Completed Steps | 11 |
| Files Generated | 7 |
| Warnings | 0 |
| Errors | 0 |
