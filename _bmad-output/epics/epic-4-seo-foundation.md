# Epic 4: SEO Foundation

The site is properly indexed by search engines with correct metadata.

## Story 4.1: Update Sitemap Configuration

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

## Story 4.2: Verify Static Assets

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

## Story 4.3: Add Environment Configuration

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
