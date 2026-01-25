---
date: '2025-12-26'
project_name: 'meeple-landing-page'
user_name: 'Ivo'
type: 'gap-analysis'
---

# Gap Analysis - Meeple Landing Page

**Date:** 2025-12-26
**Status:** Pre-implementation review
**Updated:** Corrected launch status

---

## Executive Summary

The landing page has a solid foundation with good brutalist styling and section structure. The **waitlist approach is correct** for the current pre-launch state.

**Current Status:**
- iOS app: **Not yet live** (in development)
- Android app: **In development**
- Landing page: **Not deployed**
- Branding: Needs update from "Rulebook" → "Meeple"

This document catalogs all gaps between current state and the PRD/UX specifications.

---

## Critical Gaps (Blocking)

### 1. Branding: "Rulebook" → "Meeple"

| Location | Current | Required |
|----------|---------|----------|
| `layout.tsx` metadata | "Rulebook" throughout | "Meeple" |
| `layout.tsx` metadataBase | `rulebook.app` | `meeple.app` (or correct domain) |
| `Header.tsx` logo text | "Rulebook" | "Meeple" |
| `Footer.tsx` logo text | "Rulebook" | "Meeple" |
| `Footer.tsx` description | "Rulebook" | "Meeple" |
| `globals.css` (if any) | - | Verify no hardcoded brand |
| OG images | `/og-image.png` | Needs Meeple branding |
| Twitter handle | `@rulebookapp` | Update to Meeple handle |
| Email | `hello@rulebook.app` | Update to Meeple email |
| Features section | "Why Rulebook?" | "Why Meeple?" |
| USP section | "What Makes Rulebook Different" | "What Makes Meeple Different" |

### 2. Waitlist Form: Needs Backend Integration

**Current:** Waitlist form simulates API call with `setTimeout`
**Required:** Connect to actual backend waitlist endpoint

| Location | Current | Required |
|----------|---------|----------|
| `Hero.tsx` handleSubmit | Simulated delay | Real API call to backend |
| `FinalCTA.tsx` handleSubmit | Simulated delay | Real API call to backend |

**Backend API (Ready):**

```
POST /api/waitlist

Request:
{
  "email": "user@example.com"
}

Response (200):
{
  "message": "Successfully subscribed to waitlist",
  "email": "user@example.com"
}

Errors:
- 400: Invalid email format
- 429: Rate limited
```

**Backend URLs:**
- Staging: `https://project-rulebook-staging.up.railway.app`
- Production: `https://api.rulebook.app` (needs update for Meeple)

### 3. Future: StoreBadges Component (Post-Launch)

**Not needed for pre-launch waitlist phase.** When apps launch, will need:

```
Props needed:
- showIOS: boolean
- showAndroid: boolean
- size: 'sm' | 'md' | 'lg'
- layout: 'horizontal' | 'vertical' | 'stacked'
```

**Usage locations (post-launch):**
- Hero section (replace waitlist form)
- Final CTA section (replace waitlist form)
- Footer
- Header (optional "Download" button)

---

## High Priority Gaps

### 4. Screenshot Path Mismatches

| Component | References | Actual Available |
|-----------|------------|------------------|
| `Hero.tsx` | `/screenshots/rules-display.png` | Does not exist |
| `HowItWorks.tsx` | `/screenshots/camera.png` | Does not exist |
| `HowItWorks.tsx` | `/screenshots/generating.png` | Does not exist |
| `HowItWorks.tsx` | `/screenshots/rules.png` | Does not exist |

**Available screenshots in `/public/screenshots/`:**
- `01_onboarding_a.PNG` - Onboarding screen 1
- `02_onboarding_b.PNG` - Onboarding screen 2
- `03_library_empty_state.PNG` - Empty library
- `04_settings_a.PNG` - Settings top
- `05_settings_b.PNG` - Settings middle
- `06_settings_c.PNG` - Settings bottom
- `07_paywall.PNG` - Paywall/pricing
- `08_purchase_successful.PNG` - Purchase success
- `09_preparing_camera.PNG` - Camera loading
- `10_rules_generation_a.PNG` - Generation progress 1
- `11_rules_generation_b.PNG` - Generation progress 2
- `12_rules_a.PNG` - Rules overview
- `13_rules_b.PNG` - Rules section
- `14_rules_c.PNG` - Rules section
- `15_rules_d.PNG` - Rules section
- `16_rules_e.PNG` - Rules section
- `17_rules_f.PNG` - Rules section

**Recommended mapping:**
| Component | Should Use |
|-----------|------------|
| Hero | `12_rules_a.PNG` (rules overview - most impressive) |
| HowItWorks Step 1 | `09_preparing_camera.PNG` or a camera screenshot |
| HowItWorks Step 2 | `10_rules_generation_a.PNG` (generation in progress) |
| HowItWorks Step 3 | `12_rules_a.PNG` (rules result) |

### 5. Missing Static Assets

| Asset | Status | Required For |
|-------|--------|--------------|
| `/favicon.ico` | Missing | Browser tab |
| `/icon.svg` | Missing | Modern browsers |
| `/apple-touch-icon.png` | Missing | iOS home screen |
| `/og-image.png` | Missing | Social sharing |
| `/twitter-card.png` | Missing | Twitter sharing |
| App Store badge SVG | Missing | Download buttons |
| Play Store badge SVG | Missing | Download buttons |
| Meeple logo/wordmark | Missing | Header, Footer |

### 6. SEO & Metadata Gaps

| Item | Current | Required |
|------|---------|----------|
| Canonical URL | `rulebook.app` | Correct Meeple domain |
| OG URL | `rulebook.app` | Correct Meeple domain |
| siteName | "Rulebook" | "Meeple" |
| Twitter site | `@rulebookapp` | Meeple Twitter handle |
| Twitter creator | `@rulebookapp` | Meeple Twitter handle |
| Keywords | Good, but says "Rulebook" | Update to "Meeple" |

---

## Medium Priority Gaps

### 7. Content Updates per PRD

| Section | Gap |
|---------|-----|
| Hero headline | Could be stronger: "From Box to Playing in 60 Seconds" is good |
| Hero subhead | Mentions "30-minute rulebook sessions" - fine |
| Features | "Why Rulebook?" → "Why Meeple?" |
| HowItWorks | "Three Taps to Playing" - good |
| Testimonials | "Sound Familiar?" - works as pain points |
| USP | "What Makes Rulebook Different" → "What Makes Meeple Different" |
| Pricing | Title fine, copy needs launch language removed |

### 8. Navigation Updates

| Item | Current | Required |
|------|---------|----------|
| Header nav | Features, How It Works, Pricing | Add "Download" link to stores |
| Footer nav | Product links | Add direct store links |
| Mobile menu | Same as desktop | Include download CTA |

### 9. Accessibility Gaps

| Item | Status | Required |
|------|--------|----------|
| Skip link | Missing | Add "Skip to main content" |
| Focus indicators | Present (`:focus-visible`) | Good |
| Alt text | Some missing on icons | Add to all images |
| Heading hierarchy | Good | Verify H1 → H2 → H3 |
| ARIA labels | Missing on some buttons | Add where needed |

---

## Low Priority Gaps

### 10. Performance Optimizations

| Item | Current | Recommended |
|------|---------|-------------|
| Image optimization | PNG screenshots (large) | Convert to WebP, add blur placeholders |
| Font loading | Google Fonts (Inter) | Consider system fonts or subset |
| Animations | CSS animations | Add `prefers-reduced-motion` support |

### 11. Dark Mode

| Item | Status |
|------|--------|
| CSS variables | Defined in `globals.css` |
| Toggle mechanism | Not implemented |
| Automatic detection | Not implemented |

**Recommendation:** For MVP, rely on system preference via `prefers-color-scheme` media query. No manual toggle needed.

### 12. Analytics

| Item | Current | Status |
|------|---------|--------|
| Plausible script | Present in layout | Domain set to `rulebook.app` - needs update |

---

## Missing Pages per PRD

| Page | Status | Priority |
|------|--------|----------|
| `/privacy` | Exists | Verify content |
| `/terms` | Exists | Verify content |
| `/support` | Exists | Verify content |
| `/pricing` | Exists | Verify content, check branding |

---

## Component Inventory

### Existing Components (Good)

| Component | Status | Notes |
|-----------|--------|-------|
| `Button` | Complete | Primary, secondary, ghost variants |
| `Card` | Complete | Default, feature, persona, screenshot variants |
| `FeatureCard` | Complete | Icon, title, description |
| `Badge` | Complete | Color variants |
| `SectionHeader` | Complete | Title, subtitle, alignment |
| `PhoneMockup` | Complete | iPhone-style frame |
| `Input` | Exists | For forms |

### Missing Components

| Component | Priority | Purpose |
|-----------|----------|---------|
| `StoreBadges` | Future (post-launch) | App Store / Play Store download links |
| `Logo` | High | Reusable Meeple logo component |
| `Container` | Low | Already using `container-landing` class |

---

## Environment & Configuration

### Required Environment Variables

| Variable | Current | Needed |
|----------|---------|--------|
| `NEXT_PUBLIC_SITE_URL` | Not set | `https://meeple.app` (or correct domain) |
| `NEXT_PUBLIC_IOS_APP_URL` | Not set | App Store link |
| `NEXT_PUBLIC_ANDROID_APP_URL` | Not set | Play Store link (when available) |

### Domain Configuration

**Question for Ivo:** What is the production domain?
- `meeple.app`?
- `getmeeple.com`?
- Other?

This affects all metadata URLs.

---

## Recommended Implementation Order

### Phase 1: Critical (Branding)
1. Get correct domain/URLs from Ivo
2. Update `layout.tsx` metadata with Meeple branding
3. Update `Header.tsx` with Meeple logo/name
4. Update `Footer.tsx` with Meeple branding
5. Update section titles ("Rulebook" → "Meeple")

### Phase 2: High Priority (Functionality)
6. Connect waitlist forms to backend API (`/api/waitlist`)
7. Fix screenshot paths in `Hero.tsx` and `HowItWorks.tsx`
8. Add missing static assets (favicon, OG images)

### Phase 3: Medium Priority (Polish)
9. Accessibility improvements (skip link, ARIA labels)
10. Verify/update legal pages content (privacy, terms)

### Phase 4: Low Priority (Optimization)
11. Image optimization (WebP, blur placeholders)
12. Dark mode via system preference
13. Analytics domain update

### Future Phase (Post-App-Launch)
14. Create `StoreBadges` component
15. Replace waitlist forms with App Store download buttons
16. Update "coming soon" messaging to "available now"

---

## Answers from Ivo (2025-12-26)

| Question | Answer | Impact |
|----------|--------|--------|
| Domain | Not decided yet | Use placeholder, update later |
| Logo | None yet | Use text-based "Meeple" for now |
| Social handles | None yet | Remove social links or use placeholder |
| Contact email | None yet | Remove or use placeholder |
| Backend waitlist | **Ready** | Can integrate now |
| Deployment | TBD | Doesn't block development |

---

## What Can Be Done Now

### Actionable (No Blockers)
1. Rename "Rulebook" → "Meeple" in all text
2. Connect waitlist forms to backend API
3. Fix screenshot paths
4. Use text-based logo ("Meeple")
5. Remove or placeholder social/contact links

### Blocked (Needs Decisions)
1. Final domain in metadata (use placeholder like `meeple.app`)
2. Social media links (remove for now)
3. Contact email (remove or placeholder)
4. Analytics domain (use placeholder)
5. OG images with final branding

---

*Gap Analysis - Meeple Landing Page*
*Generated: 2025-12-26*
