---
title: Design System
description: Colors, typography, spacing, and design tokens
author: Documentation Architect
date: 2026-01-25
---

# Design System

Neo-Brutalist design system for the Meeple Landing Page.

## Design Philosophy

**Style:** Neo-Brutalist

- Bold, attention-grabbing colors
- Hard drop shadows (offset, no blur)
- Heavy typography (font-weight 900)
- High contrast
- Dark mode support

## Colors

### Primary Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| Primary | `#f97316` (orange-500) | `#f97316` | CTAs, highlights |
| Secondary | `#ec4899` (pink-500) | `#ec4899` | Accents |
| Tertiary | `#3b82f6` (blue-500) | `#3b82f6` | Links, info |

### Surface Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| Background | `#ffffff` | `#1a1a1a` | Page background |
| Surface | `#f5f5f5` | `#2a2a2a` | Cards, sections |
| Border | `#000000` | `#ffffff` | Borders, shadows |

### Text Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| Primary | `#000000` | `#ffffff` | Headlines, body |
| Secondary | `#666666` | `#a0a0a0` | Muted text |

## Typography

### Font Family

```css
font-family: 'Inter', sans-serif;
```

### Scale

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Display | 4rem (64px) | 900 | Hero headlines |
| Heading 1 | 3rem (48px) | 900 | Section titles |
| Heading 2 | 2rem (32px) | 700 | Subsections |
| Heading 3 | 1.5rem (24px) | 700 | Card titles |
| Body | 1rem (16px) | 400 | Content |
| Caption | 0.875rem (14px) | 400 | Labels, meta |

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| xs | 0.25rem (4px) | Tight spacing |
| sm | 0.5rem (8px) | Small gaps |
| md | 1rem (16px) | Standard spacing |
| lg | 1.5rem (24px) | Section padding |
| xl | 2rem (32px) | Large gaps |
| 2xl | 3rem (48px) | Section margins |
| 4xl | 4rem (64px) | Major sections |

## Shadows

### Brutalist Shadow

Hard offset shadow with no blur:

```css
/* Light mode */
box-shadow: 4px 4px 0 0 #000000;

/* Dark mode */
box-shadow: 4px 4px 0 0 #ffffff;
```

### Tailwind Usage

```typescript
className="shadow-[4px_4px_0_0_black] dark:shadow-[4px_4px_0_0_white]"
```

## Components

### Buttons

```typescript
// Primary Button
className="bg-orange-500 text-white font-bold px-6 py-3 shadow-[4px_4px_0_0_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_black] transition-all"

// Secondary Button
className="bg-white border-2 border-black text-black font-bold px-6 py-3 shadow-[4px_4px_0_0_black]"
```

### Cards

```typescript
className="bg-white border-2 border-black p-6 shadow-[4px_4px_0_0_black]"
```

### Badges

```typescript
className="bg-orange-500 text-white text-xs font-bold px-2 py-1"
```

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | < 640px | Single column |
| Tablet | 768px | Two columns |
| Desktop | 1024px | Full layout |
| Wide | 1280px | Max content width |

## Dark Mode

Toggle between light and dark using Tailwind's `dark:` prefix:

```typescript
className="bg-white dark:bg-gray-900 text-black dark:text-white"
```

## See Also

- [UX Specification](ux-specification.md) - Complete UX documentation
- [Components](components.md) - UI component specifications
- [Full Design Spec](../../_bmad-output/project-planning-artifacts/ux-design-specification.md) - Comprehensive design documentation
