# Story 1.1: Update Header Branding

Status: ready-for-dev
Linear Issue: not-configured
Epic: 1 - Meeple Brand Identity
Created: 2025-12-31

---

## Story

As a **visitor**,
I want to see "Meeple" branding in the header,
so that I know I'm on the correct website for the Meeple app.

## Acceptance Criteria

**Given** I visit the landing page
**When** the page loads
**Then** the header displays "Meeple" as the logo text
**And** the logo icon remains (orange box with document icon)

## Tasks / Subtasks

- [ ] Open `src/components/layout/Header.tsx`
- [ ] Locate the logo text span element (line 43)
- [ ] Change "Rulebook" to "Meeple"
- [ ] Verify the change renders correctly in development
- [ ] Test on both desktop and mobile views
- [ ] Ensure mobile menu still functions correctly

---

## Developer Context

### Technical Requirements

This is a simple text replacement task. The Header component is a client-side React component (has `"use client"` directive) that uses Next.js Link component for navigation.

**Current Code (line 43):**
```tsx
<span className="font-black text-xl uppercase tracking-tight">Rulebook</span>
```

**Target Change:**
```tsx
<span className="font-black text-xl uppercase tracking-tight">Meeple</span>
```

### Architecture Compliance

- **Component Type:** Client Component (`'use client'` directive present)
- **Styling:** Tailwind CSS utility classes (no changes needed to styling)
- **Location:** `src/components/layout/Header.tsx`
- **Pattern:** Functional component with hooks (useState, useEffect)

### Library & Framework Requirements

- **React:** 18.x
- **Next.js:** 14.2.18 (App Router)
- **Tailwind CSS:** 3.4.1
- No additional dependencies required

### File Structure Requirements

| File | Action | Purpose |
|------|--------|---------|
| `src/components/layout/Header.tsx` | Modify | Update logo text |

### Testing Requirements

- Visual verification in browser (development mode)
- Test responsive behavior (mobile menu toggle)
- No unit tests required for text change
- Verify no TypeScript errors

---

## Dev Notes

- This is a single-line text change
- The logo icon (orange box with document SVG) should NOT be changed
- The styling classes remain identical
- Ensure the change is saved and hot-reload updates the browser

### References

- [Source: _bmad-output/epics.md#Story 1.1: Update Header Branding]
- [Source: _bmad-output/project-planning-artifacts/architecture.md#Component Architecture]

---

## Dependencies

- **Depends On:** None
- **Blocks:** None
- **Can Parallel With:** Story 1.2, Story 1.3, Story 1.4

### Dependency Rationale

No dependencies - this story modifies only `Header.tsx` which is independent of other Epic 1 stories.

---

## Dev Agent Record

### Agent Model Used

N/A

### Completion Notes List

### File List
