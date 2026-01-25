---
title: Architecture Documentation
description: System architecture, patterns, and deployment
author: Documentation Architect
date: 2026-01-25
---

# Architecture

System design and architectural documentation for the Meeple Landing Page.

## Contents

| Document | Description |
|----------|-------------|
| [Overview](overview.md) | High-level architecture with diagrams |
| [Tech Stack](tech-stack.md) | Framework and library choices |
| [Deployment](deployment.md) | Vercel deployment architecture |

## Quick Reference

**Architecture Style:** Static Site Generation (SSG) with Component-Based UI

**Framework:** Next.js 14 with App Router

**Styling:** TailwindCSS with Neo-Brutalist design system

## Key Decisions

1. **App Router over Pages Router** - Modern Next.js patterns, better metadata handling
2. **Component Hierarchy** - `layout/` -> `sections/` -> `ui/`
3. **Static Generation** - No API routes, pure static content
4. **No Global State** - Component-local state only (useState)

## Architecture Diagram

```
Browser -> Next.js App Router -> Layout (Header/Footer)
                              -> Page Sections (Hero, Features, etc.)
                              -> UI Components (Button, Card, etc.)
                              -> TailwindCSS Styling
```

## Related Documentation

- [Development](../development/README.md) - Setup and workflow
- [Reference](../reference/README.md) - Component catalogs
- [Design](../design/README.md) - Design system details

## Detailed Documentation

- [Architecture](architecture.md) - Full technical architecture documentation
- [Planning Architecture](planning-architecture.md) - Architecture from planning phase
