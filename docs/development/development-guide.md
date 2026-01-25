# Development Guide

**Project:** project-rulebook-web (Meeple Landing Page)
**Generated:** 2026-01-22

## Prerequisites

| Requirement | Version | Source |
|-------------|---------|--------|
| Node.js | >= 18 | Inferred from Next.js 14 |
| npm/yarn/pnpm/bun | Latest | package.json scripts |

## Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd project-rulebook-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

From `package.json`:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## Project Structure

```
src/
├── app/          # Next.js App Router pages
├── components/   # React components
│   ├── layout/   # Header, Footer
│   ├── sections/ # Page sections (Hero, Features, etc.)
│   └── ui/       # Reusable UI components
└── lib/          # Utility functions
```

## Environment Variables

Create a `.env` file (already gitignored) for local development:

```bash
# Example environment variables
# Add any required API keys or configuration here
```

**Note:** The `.env` file is gitignored and should not be committed.

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 14.2.18 |
| UI Library | React | ^18 |
| Styling | TailwindCSS | ^3.4.1 |
| Language | TypeScript | ^5 |
| Linting | ESLint | ^8 |

## Code Style

- **TypeScript:** Strict mode enabled (`tsconfig.json`)
- **ESLint:** Extends `next/core-web-vitals` and `next/typescript`
- **TailwindCSS:** Custom design system with brutalist theme

### Path Aliases

```typescript
// Use @/ for src imports
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
```

## Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## Testing

No test framework is currently configured. Consider adding:
- Jest + React Testing Library for unit/integration tests
- Playwright or Cypress for E2E tests

## Deployment

The project is designed for deployment on Vercel (recommended) or any Next.js-compatible hosting:

- **Vercel:** Auto-detects Next.js, zero config needed
- **Other hosts:** Run `npm run build` then serve the `.next` folder

### Analytics

Plausible Analytics is integrated (privacy-friendly, no cookie banner required).
- Domain: `meeple.app`
- Script loaded in `layout.tsx`
