# Epic 1: Meeple Brand Identity

Visitors see consistent "Meeple" branding throughout the site, building trust and recognition.

## Story 1.1: Update Header Branding

As a **visitor**,
I want to see "Meeple" branding in the header,
So that I know I'm on the correct website for the Meeple app.

**Acceptance Criteria:**

**Given** I visit the landing page
**When** the page loads
**Then** the header displays "Meeple" as the logo text
**And** the logo icon remains (orange box with document icon)

**Files to modify:** `src/components/layout/Header.tsx`

---

## Story 1.2: Update Footer Branding

As a **visitor**,
I want to see consistent "Meeple" branding in the footer,
So that the brand identity is reinforced throughout my experience.

**Acceptance Criteria:**

**Given** I scroll to the footer
**When** I view the footer content
**Then** the footer displays "Meeple" as the logo text
**And** the tagline reads "Learn any board game in 60 seconds"
**And** the copyright shows "© 2025 Meeple. All rights reserved."
**And** social/contact links are removed (Twitter link removed, email link removed)

**Files to modify:** `src/components/layout/Footer.tsx`

---

## Story 1.3: Update Section Titles

As a **visitor**,
I want section titles to reference "Meeple" consistently,
So that the brand name is clear throughout the page.

**Acceptance Criteria:**

**Given** I scroll through the landing page
**When** I view the Features section
**Then** the title reads "Why Meeple?" (not "Why Rulebook?")

**Given** I scroll to the USP section
**When** I view the section title
**Then** the title reads "What Makes Meeple Different" (not "What Makes Rulebook Different")

**Files to modify:** `src/components/sections/Features.tsx`, `src/components/sections/USP.tsx`

---

## Story 1.4: Update Metadata and SEO

As a **search engine** or **social media platform**,
I want correct Meeple branding in metadata,
So that the site displays correctly in search results and social shares.

**Acceptance Criteria:**

**Given** search engines crawl the site
**When** they read the metadata
**Then** the title contains "Meeple" (not "Rulebook")
**And** the description references "Meeple"
**And** OpenGraph title/description use "Meeple"
**And** the metadataBase uses placeholder domain `https://meeple.app`
**And** Twitter handle references are removed
**And** Plausible analytics domain is updated to `meeple.app`

**Files to modify:** `src/app/layout.tsx`

---
