---
title: Getting Started
description: Environment setup and first run guide
author: Documentation Architect
date: 2026-01-25
---

# Getting Started

Get your development environment set up and run the project.

## Prerequisites

| Requirement | Version | Installation |
|-------------|---------|--------------|
| Node.js | >= 18 | [Download](https://nodejs.org/) |
| npm/yarn/pnpm | Latest | Comes with Node.js |
| Git | Latest | [Download](https://git-scm.com/) |

## Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>
cd project-rulebook-landing-page

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Configuration

### Required Variables

Currently no environment variables are required for local development.

### Optional Variables

Create a `.env` file for any local overrides:

```bash
# .env (already gitignored)
# Add any required configuration here
```

## Verification

Confirm your setup is working:

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server (after build)
npm run start
```

Expected: No errors, application accessible at localhost:3000

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

## Common Setup Issues

### Issue: Node version mismatch

**Symptom:** Package installation fails or warnings about Node version

**Solution:**
```bash
# Check Node version
node --version

# Use nvm to switch versions
nvm install 18
nvm use 18
```

### Issue: Port already in use

**Symptom:** `Error: listen EADDRINUSE: address already in use :::3000`

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

## Next Steps

1. [Architecture Overview](../architecture/overview.md) - Understand the system
2. [Component Reference](../reference/ui-components.md) - Browse components
3. [Design System](../design/design-system.md) - Styling guidelines
