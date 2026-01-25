# Epic 3: Complete Visual Experience

All screenshots and images display correctly, showcasing the actual app.

## Story 3.1: Fix Hero Screenshot

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

## Story 3.2: Fix HowItWorks Screenshots

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
