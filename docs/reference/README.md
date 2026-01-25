---
title: Reference Documentation
description: Source tree, component catalogs, and technical reference
author: Documentation Architect
date: 2026-01-25
---

# Reference

Technical reference documentation and catalogs.

## Contents

| Document | Description |
|----------|-------------|
| [Source Tree](source-tree.md) | Directory structure with annotations |
| [UI Components](ui-components.md) | Component inventory and usage |
| [Project Overview](project-overview.md) | Executive summary |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── layout/       # Header, Footer
│   ├── sections/     # Page sections (Hero, Features, etc.)
│   └── ui/           # Reusable UI components
└── lib/              # Utility functions
```

## Component Statistics

| Category | Count |
|----------|-------|
| Layout Components | 2 |
| Section Components | 7 |
| UI Components | 6 |
| **Total** | **15** |

## Path Aliases

```typescript
// Use @/ for src imports
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
```

## Related Documentation

- [Architecture](../architecture/README.md) - System design patterns
- [Development](../development/README.md) - Setup and workflow
- [Design](../design/README.md) - Design system tokens

## Detailed Documentation

- [Source Tree](source-tree.md) - Complete directory structure analysis
- [UI Components](ui-components.md) - Component inventory and design patterns
- [Project Overview](project-overview.md) - Executive summary and context
