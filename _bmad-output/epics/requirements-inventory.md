# Requirements Inventory

## Functional Requirements

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

## Non-Functional Requirements

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

## Additional Requirements (from Gap Analysis)

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

## FR Coverage Map

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
