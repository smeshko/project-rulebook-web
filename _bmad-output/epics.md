---
stepsCompleted: [1, 2, 3, 4]
workflowComplete: true
step1Status: 'requirements-extracted-and-confirmed'
step2Status: 'epics-designed-and-approved'
step3Status: 'stories-generated'
step4Status: 'validated-and-complete'
inputDocuments:
  - path: '_bmad-output/project-planning-artifacts/prd.md'
    type: 'prd'
    description: 'Product Requirements Document for Meeple Landing Page'
  - path: '_bmad-output/project-planning-artifacts/architecture.md'
    type: 'architecture'
    description: 'Technical architecture for Next.js landing page'
  - path: '_bmad-output/project-planning-artifacts/ux-design-specification.md'
    type: 'ux-design'
    description: 'UX specification with brutalist design system'
  - path: '_bmad-output/project-planning-artifacts/gap-analysis.md'
    type: 'gap-analysis'
    description: 'Current state analysis and implementation gaps'
project_name: 'meeple-landing-page'
user_name: 'Ivo'
date: '2025-12-26'
---

# Meeple Landing Page - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for the Meeple Landing Page, decomposing the requirements from the PRD, UX Design, Architecture, and Gap Analysis into implementable stories.

**Context:** This is a brownfield project - the landing page already exists with "Rulebook" branding and simulated waitlist functionality. The work involves updating branding, connecting to real backend, and fixing content issues.

## Requirements Inventory

### Functional Requirements

| ID | Requirement | Section |
|----|-------------|---------|
| FR1 | Display Meeple logo/wordmark | Header |
| FR2 | Show navigation links (Features, How It Works, Pricing) | Header |
| FR3 | Include "Download" CTA button in header | Header |
| FR4 | Sticky header on scroll (optional for MVP) | Header |
| FR5 | Mobile hamburger menu for small screens | Header |
| FR6 | Display primary headline conveying value proposition | Hero |
| FR7 | Show supporting subheadline with benefit | Hero |
| FR8 | Include hero image/mockup of app in use | Hero |
| FR9 | Display App Store and Play Store download buttons | Hero |
| FR10 | Responsive layout (image position shifts on mobile) | Hero |
| FR11 | Display 4-6 key features in card/grid format | Features |
| FR12 | Each feature has icon, title, and description | Features |
| FR13 | Features highlight: AI recognition, 60-second rules, offline access, progressive learning | Features |
| FR14 | Responsive grid (2x2 desktop, 1 column mobile) | Features |
| FR15 | Show 3-step visual process | How It Works |
| FR16 | Steps: 1. Photo the box, 2. AI generates rules, 3. Start playing | How It Works |
| FR17 | Include illustrations or screenshots for each step | How It Works |
| FR18 | Visual flow connects steps (arrows/lines) | How It Works |
| FR19 | Display 3-4 user testimonials | Testimonials |
| FR20 | Each testimonial has quote, name, and context | Testimonials |
| FR21 | Brutalist card styling for consistency | Testimonials |
| FR22 | Responsive layout (carousel optional for mobile) | Testimonials |
| FR23 | Clearly differentiate from competitors | USP |
| FR24 | Highlight unique value (photo-to-rules, unknown game solving) | USP |
| FR25 | May include comparison table or benefit list | USP |
| FR26 | Display credit pack options (1, 3, 10 credits) | Pricing |
| FR27 | Show prices (match in-app pricing) | Pricing |
| FR28 | Mention free trial/starter credits | Pricing |
| FR29 | Brutalist card styling for pricing tiers | Pricing |
| FR30 | Note that purchases happen in-app | Pricing |
| FR31 | Strong closing headline | Final CTA |
| FR32 | App Store and Play Store buttons prominently displayed | Final CTA |
| FR33 | Reinforce value proposition briefly | Final CTA |
| FR34 | Display copyright and legal links | Footer |
| FR35 | Links to Privacy Policy and Terms of Service | Footer |
| FR36 | Support/Contact link | Footer |
| FR37 | Social media links (if applicable) | Footer |
| FR38 | App Store and Play Store badges | Footer |
| FR39 | Dark mode support (system preference detection) | Global |
| FR40 | Responsive design (mobile, tablet, desktop) | Global |
| FR41 | SEO meta tags (title, description, OpenGraph) | Global |
| FR42 | Favicon and app icons | Global |
| FR43 | Brutalist design system consistency | Global |

### Non-Functional Requirements

| ID | Requirement | Category | Target |
|----|-------------|----------|--------|
| NFR9 | HTTPS only | Security | Required |
| NFR10 | No user data collection (static site) | Security | Required |
| NFR11 | Content Security Policy headers | Security | Required |
| NFR17 | Semantic HTML structure | SEO | Required |
| NFR18 | Meta tags (title, description, keywords) | SEO | Required |
| NFR19 | OpenGraph and Twitter cards | SEO | Required |
| NFR20 | Sitemap.xml | SEO | Required |
| NFR21 | robots.txt | SEO | Required |
| NFR22 | Structured data (Organization, App) | SEO | Required |
| NFR23 | Chrome, Safari, Firefox, Edge (latest 2 versions) | Compatibility | Required |
| NFR24 | iOS Safari, Android Chrome | Compatibility | Required |
| NFR25 | Responsive: 320px to 2560px | Compatibility | Required |

### Additional Requirements (from Gap Analysis)

**Branding Updates:**
- Rename all instances of "Rulebook" to "Meeple"
- Update metadata domain from `rulebook.app` to placeholder
- Update Twitter handle from `@rulebookapp`
- Update email from `hello@rulebook.app`
- Update section titles: "Why Rulebook?" → "Why Meeple?", "What Makes Rulebook Different" → "What Makes Meeple Different"

**Waitlist Integration:**
- Connect Hero waitlist form to backend API (`POST /api/waitlist`)
- Connect FinalCTA waitlist form to backend API
- Handle success/error states from real API
- Backend URL: `https://project-rulebook-staging.up.railway.app`

**Content/Asset Fixes:**
- Fix Hero screenshot path (currently references non-existent file)
- Fix HowItWorks screenshot paths (3 broken references)
- Map to actual screenshots in `/public/screenshots/`

**Future (Post-App-Launch):**
- Create StoreBadges component for App Store/Play Store links
- Replace waitlist forms with download buttons
- Update "coming soon" messaging

### FR Coverage Map

| FR | Epic | Description |
|----|------|-------------|
| FR1 | Epic 1 | Meeple logo/wordmark |
| FR2-5 | N/A | Already implemented (Header nav) |
| FR6-7 | Epic 2 | Hero headline/subhead (with waitlist) |
| FR8 | Epic 3 | Hero screenshot |
| FR9-10 | Deferred | App Store buttons (post-launch) |
| FR11-14 | N/A | Already implemented (Features) |
| FR15-16 | N/A | Already implemented (HowItWorks steps) |
| FR17 | Epic 3 | HowItWorks screenshots |
| FR18 | N/A | Already implemented (visual flow) |
| FR19-22 | N/A | Already implemented (Testimonials) |
| FR23-25 | N/A | Already implemented (USP) |
| FR26-30 | N/A | Already implemented (Pricing) |
| FR31-33 | Epic 2 | FinalCTA (with waitlist) |
| FR34-38 | Epic 1 | Footer (branding update) |
| FR39 | Deferred | Dark mode (low priority) |
| FR40 | N/A | Already implemented (responsive) |
| FR41 | Epic 1 & 4 | SEO meta tags |
| FR42 | Epic 4 | Favicon/icons |
| FR43 | Epic 1 | Design system consistency |

## Epic List

### Epic 1: Meeple Brand Identity
Visitors see consistent "Meeple" branding throughout the site, building trust and recognition.

**FRs covered:** FR1, FR34-38, FR41, FR43
**Additional:** All branding updates from gap analysis

**Scope:**
- Update Header logo/name to "Meeple"
- Update Footer branding to "Meeple"
- Update section titles ("Why Meeple?", "What Makes Meeple Different")
- Update metadata (title, description, OpenGraph) with Meeple branding
- Remove/placeholder social links and contact email until decided

---

### Epic 2: Functional Waitlist
Visitors can successfully join the waitlist and receive confirmation that they're signed up.

**FRs covered:** FR6, FR7, FR31, FR33
**Additional:** Waitlist integration from gap analysis

**Scope:**
- Connect Hero waitlist form to backend API (`POST /api/waitlist`)
- Connect FinalCTA waitlist form to backend API
- Handle success state (show confirmation message)
- Handle error states (validation, rate limiting, network errors)
- Use staging backend URL

---

### Epic 3: Complete Visual Experience
All screenshots and images display correctly, showcasing the actual app.

**FRs covered:** FR8, FR17

**Scope:**
- Fix Hero screenshot path (map to actual screenshot)
- Fix HowItWorks screenshot paths (3 broken references)
- Map to actual screenshots in `/public/screenshots/`
- Verify all images load correctly

---

### Epic 4: SEO Foundation
The site is properly indexed by search engines with correct metadata.

**NFRs covered:** NFR17, NFR18, NFR19, NFR20, NFR21, NFR22
**FRs covered:** FR41, FR42

**Scope:**
- Update sitemap with correct domain (placeholder)
- Verify robots.txt configuration
- Update OpenGraph images (placeholder until final branding)
- Verify semantic HTML structure
- Add missing favicon/app icons if needed

---

## Epic 1: Meeple Brand Identity

Visitors see consistent "Meeple" branding throughout the site, building trust and recognition.

### Story 1.1: Update Header Branding

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

### Story 1.2: Update Footer Branding

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

### Story 1.3: Update Section Titles

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

### Story 1.4: Update Metadata and SEO

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

## Epic 2: Functional Waitlist

Visitors can successfully join the waitlist and receive confirmation that they're signed up.

### Story 2.1: Create Waitlist API Service

As a **developer**,
I want a reusable waitlist API service,
So that both Hero and FinalCTA forms can use the same integration logic.

**Acceptance Criteria:**

**Given** the waitlist service is implemented
**When** it is called with a valid email
**Then** it makes a POST request to `https://project-rulebook-staging.up.railway.app/api/waitlist`
**And** the request body contains `{ "email": "<user-email>" }`
**And** it returns success with the response message
**And** it handles 400 errors (invalid email) gracefully
**And** it handles 429 errors (rate limited) gracefully
**And** it handles network errors gracefully

**Files to create:** `src/lib/api.ts`

---

### Story 2.2: Connect Hero Waitlist Form

As a **visitor**,
I want to join the waitlist from the hero section,
So that I can be notified when the app launches.

**Acceptance Criteria:**

**Given** I am on the landing page hero section
**When** I enter a valid email and click "Join Waitlist"
**Then** the button shows "Joining..." loading state
**And** on success, I see "You're on the list! We'll notify you at launch."
**And** the form is replaced with the success message

**Given** I enter an invalid email
**When** I submit the form
**Then** I see an error message about invalid email format

**Given** the API returns a rate limit error
**When** I submit the form
**Then** I see a message asking me to try again later

**Given** there is a network error
**When** I submit the form
**Then** I see a generic error message with retry option

**Files to modify:** `src/components/sections/Hero.tsx`

---

### Story 2.3: Connect FinalCTA Waitlist Form

As a **visitor**,
I want to join the waitlist from the final CTA section,
So that I have another opportunity to sign up before leaving the page.

**Acceptance Criteria:**

**Given** I scroll to the final CTA section
**When** I enter a valid email and click "Join Waitlist"
**Then** the button shows "Joining..." loading state
**And** on success, I see "You're on the list! We'll notify you at launch."
**And** the form is replaced with the success message

**Given** I enter an invalid email
**When** I submit the form
**Then** I see an error message about invalid email format

**Given** the API returns an error
**When** I submit the form
**Then** I see an appropriate error message

**Files to modify:** `src/components/sections/FinalCTA.tsx`

---

## Epic 3: Complete Visual Experience

All screenshots and images display correctly, showcasing the actual app.

### Story 3.1: Fix Hero Screenshot

As a **visitor**,
I want to see an actual app screenshot in the hero section,
So that I can visualize what the app looks like.

**Acceptance Criteria:**

**Given** I visit the landing page
**When** the hero section loads
**Then** I see an actual app screenshot in the phone mockup
**And** the screenshot shows the rules display screen (`12_rules_a.PNG`)
**And** the image loads without errors

**Files to modify:** `src/components/sections/Hero.tsx`
**Screenshot to use:** `/screenshots/12_rules_a.PNG`

---

### Story 3.2: Fix HowItWorks Screenshots

As a **visitor**,
I want to see actual app screenshots for each step in "How It Works",
So that I can understand the app flow visually.

**Acceptance Criteria:**

**Given** I scroll to the "How It Works" section
**When** the section loads
**Then** Step 1 (Scan) shows the camera/preparation screen (`09_preparing_camera.PNG`)
**And** Step 2 (Learn) shows the generation progress screen (`10_rules_generation_a.PNG`)
**And** Step 3 (Play) shows the rules result screen (`12_rules_a.PNG`)
**And** all images load without errors

**Files to modify:** `src/components/sections/HowItWorks.tsx`
**Screenshots to use:**
- Step 1: `/screenshots/09_preparing_camera.PNG`
- Step 2: `/screenshots/10_rules_generation_a.PNG`
- Step 3: `/screenshots/12_rules_a.PNG`

---

## Epic 4: SEO Foundation

The site is properly indexed by search engines with correct metadata.

### Story 4.1: Update Sitemap Configuration

As a **search engine**,
I want a valid sitemap with correct URLs,
So that I can properly index all pages.

**Acceptance Criteria:**

**Given** a search engine requests the sitemap
**When** it fetches `/sitemap.xml`
**Then** the sitemap contains the correct base URL (placeholder `https://meeple.app`)
**And** it includes the main landing page
**And** it includes `/privacy`, `/terms`, `/support` pages

**Files to modify:** `src/app/sitemap.ts`

---

### Story 4.2: Verify Static Assets

As a **browser** or **social platform**,
I want valid favicon and social images,
So that the site displays correctly in tabs and shares.

**Acceptance Criteria:**

**Given** a user visits the site
**When** the page loads
**Then** a favicon is displayed in the browser tab

**Given** a user shares the site on social media
**When** the platform fetches OpenGraph data
**Then** it finds valid OG image references (even if placeholder)

**Given** the robots.txt is requested
**When** it is fetched
**Then** it returns valid configuration allowing crawling

**Files to verify:** `public/robots.txt`, `public/favicon.ico`, `src/app/layout.tsx`
**Note:** Create placeholder assets if missing, or document as known gap for final branding

---

### Story 4.3: Add Environment Configuration

As a **developer**,
I want centralized environment configuration,
So that URLs can be easily updated when the domain is finalized.

**Acceptance Criteria:**

**Given** the environment is configured
**When** the app builds
**Then** `NEXT_PUBLIC_API_URL` points to the backend staging URL
**And** `NEXT_PUBLIC_SITE_URL` contains the placeholder domain
**And** these values are used consistently throughout the app

**Files to modify:** `.env`, `src/lib/api.ts`, `src/app/sitemap.ts`

---

## Summary

| Epic | Stories | Status |
|------|---------|--------|
| Epic 1: Meeple Brand Identity | 4 stories (1.1-1.4) | Ready |
| Epic 2: Functional Waitlist | 3 stories (2.1-2.3) | Ready |
| Epic 3: Complete Visual Experience | 2 stories (3.1-3.2) | Ready |
| Epic 4: SEO Foundation | 3 stories (4.1-4.3) | Ready |
| **Total** | **12 stories** | **Ready for development** |
