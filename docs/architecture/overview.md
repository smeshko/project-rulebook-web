---
title: Architecture Overview
description: High-level architecture documentation for Meeple Landing Page
author: Documentation Architect
date: 2026-01-25
---

# Architecture Overview

High-level architecture documentation for the Meeple Landing Page.

## Executive Summary

This is a **Next.js 14 landing page** for **Meeple**, an AI-powered board game rules application. The website serves as a marketing and conversion funnel for the mobile app.

**Architecture Style:** Static Site Generation (SSG) with Component-Based UI

**Target URL:** https://meeple.app

## Architecture Diagram

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

## Key Architectural Decisions

1. **App Router (not Pages Router):** Uses Next.js 14's App Router for improved layouts, metadata handling, and server components.

2. **Component Hierarchy:**
   - `layout/` - Structural shells (Header, Footer)
   - `sections/` - Page-level content blocks
   - `ui/` - Atomic, reusable components

3. **Styling Strategy:** TailwindCSS with custom brutalist design system.

4. **No Global State:** Simple landing page uses component-local state only.

5. **Static Generation:** No API routes or database - pure static content.

## Component Organization

```
src/components/
├── layout/           # Structural components
│   ├── Header.tsx    # Navigation with mobile menu
│   └── Footer.tsx    # Site footer with links
├── sections/         # Page sections
│   ├── Hero.tsx      # Main hero with headline + CTA
│   ├── Features.tsx  # Product features grid
│   ├── HowItWorks.tsx
│   ├── USP.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   └── FinalCTA.tsx
└── ui/               # Atomic UI components
    ├── Button.tsx
    ├── Card.tsx
    ├── Badge.tsx
    ├── Input.tsx
    ├── PhoneMockup.tsx
    └── SectionHeader.tsx
```

## Data Architecture

**Current State:** No database. All content is hardcoded in React components.

**Future Considerations:**
- CMS integration (Contentful, Sanity)
- Newsletter signup API
- Contact form API

## See Also

- [Full Architecture Document](../../_bmad-output/architecture.md) - Comprehensive details
- [Tech Stack](tech-stack.md) - Technology choices
- [Deployment](deployment.md) - Deployment architecture
