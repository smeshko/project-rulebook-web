# Story 1.2: Update Footer Branding

Status: ready-for-dev
Linear Issue: not-configured
Epic: 1 - Meeple Brand Identity
Created: 2025-12-31

---

## Story

As a **visitor**,
I want to see consistent "Meeple" branding in the footer,
so that the brand identity is reinforced throughout my experience.

## Acceptance Criteria

**Given** I scroll to the footer
**When** I view the footer content
**Then** the footer displays "Meeple" as the logo text
**And** the tagline reads "Learn any board game in 60 seconds"
**And** the copyright shows "© 2025 Meeple. All rights reserved."
**And** social/contact links are removed (Twitter link removed, email link removed)

## Tasks / Subtasks

- [ ] Open `src/components/layout/Footer.tsx`
- [ ] Locate the logo text span (line 35) and change "Rulebook" to "Meeple"
- [ ] Update the tagline if needed (line 37-39)
- [ ] Update the copyright text (line 99) from "Rulebook" to "Meeple"
- [ ] Remove the Twitter link from the `footerLinks.connect` array (line 17)
- [ ] Remove the Email link from the `footerLinks.connect` array (line 18)
- [ ] Remove or hide the Connect section entirely (since it will be empty)
- [ ] Verify all changes render correctly
- [ ] Test responsive layout

---

## Developer Context

### Technical Requirements

This involves multiple text changes and removing the Connect section. The Footer component is a client-side React component.

**Changes Required:**

1. **Logo Text (line 35):**
```tsx
// FROM:
<span className="font-black text-xl uppercase tracking-tight">Rulebook</span>
// TO:
<span className="font-black text-xl uppercase tracking-tight">Meeple</span>
```

2. **Copyright Text (line 99):**
```tsx
// FROM:
© {new Date().getFullYear()} Rulebook. All rights reserved.
// TO:
© {new Date().getFullYear()} Meeple. All rights reserved.
```

3. **Remove Connect Links (lines 16-19):**
```tsx
// REMOVE THIS ENTIRE OBJECT FROM footerLinks:
connect: [
  { name: "Twitter", href: "https://twitter.com/rulebookapp" },
  { name: "Email", href: "mailto:hello@rulebook.app" },
],
```

4. **Remove Connect Section Rendering (lines 76-93):**
Remove or comment out the entire Connect section `<div>` block.

### Architecture Compliance

- **Component Type:** Client Component (`'use client'` directive present)
- **Styling:** Tailwind CSS utility classes
- **Location:** `src/components/layout/Footer.tsx`
- **Pattern:** Functional component with static data objects

### Library & Framework Requirements

- **React:** 18.x
- **Next.js:** 14.2.18 (App Router)
- **Tailwind CSS:** 3.4.1
- No additional dependencies required

### File Structure Requirements

| File | Action | Purpose |
|------|--------|---------|
| `src/components/layout/Footer.tsx` | Modify | Update branding and remove Connect section |

### Testing Requirements

- Visual verification in browser (development mode)
- Verify footer layout still renders correctly without Connect section
- Check responsive behavior on mobile
- Ensure links in Product and Legal sections still work
- No unit tests required for text/layout changes

---

## Dev Notes

- The grid layout uses `grid-cols-2 md:grid-cols-4` - with Connect section removed, consider changing to `md:grid-cols-3` for better spacing
- The tagline "Learn any board game in 60 seconds. AI-powered rules, instant setup." is slightly different from acceptance criteria - verify with user if "AI-powered rules, instant setup." should remain
- The "Coming soon to iOS and Android" text at bottom should remain unchanged

### Grid Layout Consideration

After removing Connect section, the grid will have:
- Logo/Description (col-span-2 on mobile, col-span-1 on desktop)
- Product links
- Legal links

Consider adjusting the grid classes for better visual balance.

### References

- [Source: _bmad-output/epics.md#Story 1.2: Update Footer Branding]
- [Source: _bmad-output/project-planning-artifacts/architecture.md#Component Architecture]

---

## Dependencies

- **Depends On:** None
- **Blocks:** None
- **Can Parallel With:** Story 1.1, Story 1.3, Story 1.4

### Dependency Rationale

No dependencies - this story modifies only `Footer.tsx` which is independent of other Epic 1 stories.

---

## Dev Agent Record

### Agent Model Used

N/A

### Completion Notes List

### File List
