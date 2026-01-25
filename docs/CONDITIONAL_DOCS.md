---
title: Conditional Documentation Guide
description: Find documentation based on your current task
author: Documentation Architect
date: 2026-01-25
---

# Conditional Documentation Guide

Find the right documentation based on what you're trying to accomplish.

---

## Getting Started

### New to the Project

1. [Getting Started](development/getting-started.md) - Environment setup
2. [Architecture Overview](architecture/overview.md) - System design
3. [Source Tree](reference/source-tree.md) - Code organization

### Understanding the Codebase

1. [Project Overview](reference/project-overview.md) - Executive summary
2. [Component Catalog](reference/ui-components.md) - Available components
3. [Tech Stack](architecture/tech-stack.md) - Technologies used

---

## Creating New Components

### Adding a New Section Component

1. Review [Architecture Overview](architecture/overview.md) for patterns
2. Check [Component Catalog](reference/ui-components.md) for existing patterns
3. Follow [Design System](design/design-system.md) for styling
4. Add to barrel exports in `src/components/sections/index.ts`

### Adding a New UI Component

1. Check [Component Catalog](reference/ui-components.md) for similar components
2. Follow [Design System](design/design-system.md) for tokens
3. Add to barrel exports in `src/components/ui/index.ts`

---

## Working with Styling

### Using the Design System

1. [Design System](design/design-system.md) - Colors, typography, spacing
2. [UX Specification](design/ux-specification.md) - Component specs
3. Check `tailwind.config.ts` for custom theme values

### Adding Dark Mode Support

1. Review [Design System](design/design-system.md#dark-mode) for dark variants
2. Use Tailwind `dark:` prefix for dark mode styles

---

## Deployment

### Deploying to Production

1. [Deployment Guide](architecture/deployment.md) - Vercel setup
2. Run `npm run build` to verify build succeeds
3. Push to `main` branch for auto-deploy

### Environment Configuration

1. Check [Getting Started](development/getting-started.md#environment) for env vars
2. Configure in Vercel dashboard for production

---

## Product Understanding

### Understanding Requirements

1. [PRD](product/prd.md) - Full product requirements
2. [Gap Analysis](product/gap-analysis.md) - Current vs. required

### Understanding Implementation Plan

1. [Epics](product/epics.md) - Epic breakdown
2. Check `_bmad-output/implementation-artifacts/` for stories

---

## Mobile App Context

### Understanding the Mobile App

1. [iOS Product Spec](ios/product-spec.md) - Mobile app overview
2. [Android Migration PRD](ios/android-migration-prd.md) - Mobile requirements
3. [Mobile Components](ios/android-migration-components.md) - UI specifications

---

## Debugging & Operations

### Fixing Issues

1. [Development Workflow](development/workflow.md) - Development process
2. Run `npm run lint` for code quality issues

### Checking Build

1. Run `npm run build` for production build
2. Run `npm run start` to test production locally
