---
title: Design Documentation
description: UX specifications, design system, and visual design
author: Documentation Architect
date: 2026-01-25
---

# Design

UX and visual design specifications.

## Contents

| Document | Description |
|----------|-------------|
| [Design System](design-system.md) | Colors, typography, spacing tokens |
| [UX Specification](ux-specification.md) | User experience documentation |
| [Components](components.md) | UI component specifications |

## Design System Overview

**Style:** Neo-Brutalist

### Colors

| Token | Light | Dark |
|-------|-------|------|
| Primary | Orange | Orange |
| Background | White | Dark Gray |
| Text | Black | White |

### Key Characteristics

- Bold colors (orange, pink, blue, purple)
- Hard drop shadows (offset, no blur)
- Heavy typography (font-weight 900)
- High contrast
- Dark mode support

### Typography

- **Display:** Large headlines
- **Heading:** Section titles
- **Body:** Content text
- **Caption:** Small labels

### Spacing Scale

```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
```

## Tailwind Integration

Custom theme values are defined in `tailwind.config.ts`:

```typescript
// Example: using design tokens
className="bg-orange-500 shadow-[4px_4px_0_0_black] font-black"
```

## Related Documentation

- [Reference](../reference/README.md) - Component catalog
- [Product](../product/README.md) - Product requirements
- [iOS](../ios/README.md) - Mobile design system

## Detailed Documentation

- [UX Specification](ux-specification.md) - Complete UX design documentation
