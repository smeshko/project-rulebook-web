---
title: Development Documentation
description: Setup guides, workflows, and development instructions
author: Documentation Architect
date: 2026-01-25
---

# Development

Setup and development workflow documentation.

## Contents

| Document | Description |
|----------|-------------|
| [Getting Started](getting-started.md) | Environment setup and first run |
| [Workflow](workflow.md) | Development process and conventions |
| [Scripts](scripts.md) | Available npm commands |

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

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | >= 18 |
| npm/yarn/pnpm | Latest |

## Related Documentation

- [Architecture](../architecture/README.md) - System design patterns
- [Reference](../reference/README.md) - Source tree and components
- [Testing](../testing/README.md) - Test strategy

## Detailed Documentation

- [Development Guide](development-guide.md) - Comprehensive setup and workflow guide
