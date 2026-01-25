# Epic 2: Functional Waitlist

Visitors can successfully join the waitlist and receive confirmation that they're signed up.

## Story 2.1: Create Waitlist API Service

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

## Story 2.2: Connect Hero Waitlist Form

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

## Story 2.3: Connect FinalCTA Waitlist Form

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
