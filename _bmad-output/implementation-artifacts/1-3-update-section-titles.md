# Story 1.3: Update Section Titles

Status: done
Linear Issue: not-configured
Epic: 1 - Meeple Brand Identity
Created: 2025-12-31

---

## Story

As a **visitor**,
I want section titles to reference "Meeple" consistently,
so that the brand name is clear throughout the page.

## Acceptance Criteria

**Given** I scroll through the landing page
**When** I view the Features section
**Then** the title reads "Why Meeple?" (not "Why Rulebook?")

**Given** I scroll to the USP section
**When** I view the section title
**Then** the title reads "What Makes Meeple Different" (not "What Makes Rulebook Different")

## Tasks / Subtasks

- [x] Open `src/components/sections/Features.tsx`
- [x] Locate the SectionHeader component (line 72-75)
- [x] Change title from "Why Rulebook?" to "Why Meeple?"
- [x] Open `src/components/sections/USP.tsx`
- [x] Locate the SectionHeader component (line 53-56)
- [x] Change title from "What Makes Rulebook Different" to "What Makes Meeple Different"
- [x] Also update any description text that mentions "Rulebook"
- [x] Verify changes render correctly in development

---

## Developer Context

### Technical Requirements

This involves two simple text changes in two different files. Both components use the `SectionHeader` UI component for their titles.

**Features.tsx Changes (lines 72-75):**
```tsx
// FROM:
<SectionHeader
  title="Why Rulebook?"
  subtitle="Everything you need to start playing any board game in under a minute."
/>

// TO:
<SectionHeader
  title="Why Meeple?"
  subtitle="Everything you need to start playing any board game in under a minute."
/>
```

**USP.tsx Changes (lines 53-56):**
```tsx
// FROM:
<SectionHeader
  title="What Makes Rulebook Different"
  subtitle="Built by board game lovers who were tired of the same problems."
/>

// TO:
<SectionHeader
  title="What Makes Meeple Different"
  subtitle="Built by board game lovers who were tired of the same problems."
/>
```

**Additional Check - USP Description (lines 13-14):**
```tsx
// Current text mentions "Rulebook":
description: "Other apps assume you already know your game. Rulebook is the only solution..."

// Change to:
description: "Other apps assume you already know your game. Meeple is the only solution..."
```

### Architecture Compliance

- **Component Type:** Client Components (`'use client'` directive present)
- **Styling:** Tailwind CSS via SectionHeader component
- **Locations:**
  - `src/components/sections/Features.tsx`
  - `src/components/sections/USP.tsx`
- **Pattern:** Functional components with static data

### Library & Framework Requirements

- **React:** 18.x
- **Next.js:** 14.2.18 (App Router)
- **Tailwind CSS:** 3.4.1
- **UI Components:** SectionHeader from `@/components/ui`
- No additional dependencies required

### File Structure Requirements

| File | Action | Purpose |
|------|--------|---------|
| `src/components/sections/Features.tsx` | Modify | Update section title |
| `src/components/sections/USP.tsx` | Modify | Update section title and description |

### Testing Requirements

- Visual verification in browser (development mode)
- Scroll through page to verify both section titles updated
- No unit tests required for text changes
- Ensure no TypeScript errors

---

## Dev Notes

- The SectionHeader component abstracts the title/subtitle styling - only the prop values need changing
- Check the USP section's feature descriptions for any other "Rulebook" references (found in Photo-to-Rules Pipeline description on line 13-14)
- Subtitles do not contain brand names and don't need modification

### USP Feature Description Update

The first USP card (Photo-to-Rules Pipeline) contains a description mentioning "Rulebook":
```
"Other apps assume you already know your game. Rulebook is the only solution covering the complete journey—from \"what is this?\" to \"let's play.\""
```

This should be updated to:
```
"Other apps assume you already know your game. Meeple is the only solution covering the complete journey—from \"what is this?\" to \"let's play.\""
```

### Scope Boundary Note

This story intentionally addresses ONLY the Features and USP section titles. Other "Rulebook" instances remain in the codebase and are handled by:
- **Story 1.1:** Header branding (`Header.tsx`)
- **Story 1.2:** Footer branding (`Footer.tsx`)
- **Story 1.4:** Metadata and SEO (`layout.tsx`)

**Note:** After Epic 1 completion, additional "Rulebook" instances may remain in: `pricing/`, `support/`, `terms/`, `privacy/` pages, `Testimonials.tsx`, `FinalCTA.tsx`, `HowItWorks.tsx`, `Hero.tsx`. These are outside Epic 1 scope and may require a follow-up story.

### References

- [Source: _bmad-output/epics.md#Story 1.3: Update Section Titles]
- [Source: _bmad-output/project-planning-artifacts/gap-analysis.md#Branding Updates]

---

## Dependencies

- **Depends On:** None
- **Blocks:** None
- **Can Parallel With:** Story 1.1, Story 1.2, Story 1.4

### Dependency Rationale

No dependencies - this story modifies `Features.tsx` and `USP.tsx` which are independent of other Epic 1 stories.

---

## Dev Agent Record

### Agent Model Used

claude-opus-4-5-20251101

### Completion Notes List

- Updated Features.tsx section title from "Why Rulebook?" to "Why Meeple?"
- Updated USP.tsx section title from "What Makes Rulebook Different" to "What Makes Meeple Different"
- Updated USP.tsx Photo-to-Rules Pipeline description from "Rulebook" to "Meeple"
- Build verified successful with no TypeScript errors
- Visual verification completed via dev server (localhost:3000) - all three text changes render correctly

### File List

- `src/components/sections/Features.tsx` - Modified line 73
- `src/components/sections/USP.tsx` - Modified lines 14 and 54

### Code Review Record

**Reviewed:** 2025-12-31
**Reviewer:** claude-opus-4-5-20251101 (Adversarial Code Review)

**Findings Summary:**
- ✅ All Acceptance Criteria verified implemented
- ✅ All tasks marked [x] confirmed complete
- ✅ Git changes match File List
- ✅ Build passes with no TypeScript errors
- ✅ Visual verification confirmed via dev server

**Issues Found & Fixed:**
- [Fixed] Added visual verification evidence to Completion Notes
- [Fixed] Added Scope Boundary Note documenting intentional exclusions
- [Informational] Epic 1 scope gap noted - some "Rulebook" instances remain outside Epic 1 coverage

**Review Result:** APPROVED - Story meets all acceptance criteria
