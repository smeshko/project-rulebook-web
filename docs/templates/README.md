---
title: Templates
description: Code templates and patterns for development
author: Documentation Architect
date: 2026-01-25
---

# Templates

Code templates and patterns for consistent development.

## Contents

| Template | Description |
|----------|-------------|
| [Component Template](component-template.md) | New UI component scaffold |
| [Section Template](section-template.md) | New page section scaffold |

## Component Template

### UI Component Structure

```typescript
// src/components/ui/NewComponent.tsx
import { cn } from "@/lib/utils";

interface NewComponentProps {
  children: React.ReactNode;
  className?: string;
}

export function NewComponent({ children, className }: NewComponentProps) {
  return (
    <div className={cn("base-styles", className)}>
      {children}
    </div>
  );
}
```

### Export Pattern

```typescript
// src/components/ui/index.ts
export { NewComponent } from "./NewComponent";
```

## Section Template

### Page Section Structure

```typescript
// src/components/sections/NewSection.tsx
import { SectionHeader } from "@/components/ui";

export function NewSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Section Title"
          subtitle="Section description"
        />
        {/* Section content */}
      </div>
    </section>
  );
}
```

## Styling Patterns

### Brutalist Shadow

```typescript
className="shadow-[4px_4px_0_0_black] dark:shadow-[4px_4px_0_0_white]"
```

### Responsive Container

```typescript
className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
```

### Button Variants

```typescript
// Primary
className="bg-orange-500 text-white font-bold px-6 py-3"

// Secondary
className="bg-white border-2 border-black text-black font-bold px-6 py-3"
```

## Related Documentation

- [Reference](../reference/README.md) - Existing components
- [Design](../design/README.md) - Design system tokens
- [Architecture](../architecture/README.md) - Component hierarchy
