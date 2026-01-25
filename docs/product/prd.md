---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
workflowComplete: true
inputDocuments:
  - path: '../project-rulebook-ios/_bmad-output/project-planning-artifacts/prd.md'
    type: 'ios-prd'
    description: 'iOS PRD (95% implemented) - reference platform'
  - path: '../project-rulebook-android/_bmad-output/project-planning-artifacts/prd.md'
    type: 'android-prd'
    description: 'Android PRD - 1:1 feature port'
  - path: '../project-rulebook-be/docs/product/prd.md'
    type: 'backend-prd'
    description: 'Backend API service PRD'
workflowType: 'prd'
workflowContext: 'landing-page-for-mobile-apps'
project_name: 'meeple-landing-page'
user_name: 'Ivo'
date: '2025-12-26'
---

# Product Requirements Document - Meeple Landing Page

**Author:** Ivo
**Date:** 2025-12-26
**Status:** Planning

---

## Executive Summary

The **Meeple Landing Page** is the marketing website for the Meeple mobile application (formerly Rulebook). Its primary purpose is to communicate the app's core value proposition, build trust with potential users, and drive downloads to the iOS App Store and Google Play Store.

### Vision Statement

**Convert curious visitors into confident downloaders** by demonstrating how Meeple solves the universal pain of learning board game rules.

### What This Website Accomplishes

| Goal | How |
|------|-----|
| **Communicate Value** | Hero section with clear "box to playing in 60 seconds" promise |
| **Build Credibility** | Social proof, testimonials, press mentions |
| **Show the Product** | Screenshots, demo video, feature highlights |
| **Drive Downloads** | Prominent App Store / Play Store buttons |
| **Reduce Friction** | No signup required to learn about the product |
| **Reinforce Brand** | Brutalist design matching the app experience |

### Core Value Proposition

**Meeple solves "I don't know where to start"** - the moment someone opens a new board game and faces a daunting rulebook. While competitors help with forgotten rules mid-game, Meeple takes users from zero knowledge to playing in under 60 seconds.

---

## Project Classification

| Attribute | Value |
|-----------|-------|
| **Technical Type** | Marketing Landing Page |
| **Domain** | Consumer App Marketing |
| **Complexity** | Low (static content, minimal interactivity) |
| **Platform** | Web (Next.js 14, React, Tailwind CSS) |
| **Architecture** | Static Site Generation (SSG) |

### Technical Context

| Metric | Value |
|--------|-------|
| Framework | Next.js 14 |
| Styling | Tailwind CSS with brutalist design tokens |
| Hosting | Vercel (recommended) |
| Analytics | TBD (privacy-focused preferred) |

---

## Success Criteria

### Website Success

| Criteria | Measure | Target |
|----------|---------|--------|
| **Page Load** | Time to First Contentful Paint | <1.5 seconds |
| **Engagement** | Scroll depth to CTA sections | >60% reach pricing |
| **Conversion** | Click-through to App Store | >5% of visitors |
| **Bounce Rate** | Single-page exits | <40% |
| **Mobile Performance** | Lighthouse mobile score | >90 |

### Business Success

| Timeframe | Objective | Key Metric |
|-----------|-----------|------------|
| **Launch** | Drive initial downloads | 500+ clicks to stores |
| **Month 1** | Establish web presence | Rank for "board game rules app" |
| **Month 3** | SEO traction | Organic traffic >1000/month |

### Technical Success

| Criteria | Target |
|----------|--------|
| **Lighthouse Performance** | >90 |
| **Lighthouse Accessibility** | >95 |
| **Core Web Vitals** | All green |
| **Cross-browser** | Chrome, Safari, Firefox, Edge |
| **Responsive** | Mobile, tablet, desktop |

---

## Product Scope

### MVP - Minimum Viable Landing Page

**Core Sections:**

| Section | Purpose | Content |
|---------|---------|---------|
| **Header** | Navigation, brand presence | Logo, nav links, CTA button |
| **Hero** | Hook visitors, state value prop | Headline, subhead, app mockup, store buttons |
| **Features** | Explain key capabilities | 4-6 feature cards with icons |
| **How It Works** | Demonstrate simplicity | 3-step visual flow (Photo → AI → Play) |
| **Testimonials** | Build trust with social proof | 3-4 user quotes |
| **USP** | Differentiate from competitors | Comparison or unique benefits |
| **Pricing** | Set expectations on cost | Credit pack info, free trial mention |
| **Final CTA** | Close with action | Download prompt, store buttons |
| **Footer** | Legal, links, contact | Privacy, Terms, Support, Social |

**Technical Requirements:**
- Static site generation for performance
- Brutalist design system (matching mobile apps)
- Responsive design (mobile-first)
- Dark mode support (matching app)
- App Store / Play Store badges
- SEO optimization (meta tags, OpenGraph)

### Growth Features (Post-MVP)

| Version | Features |
|---------|----------|
| **v1.1** | Blog for SEO content, press kit page |
| **v1.2** | Animated demo video, interactive feature explorer |
| **v2.0** | Waitlist for Android beta, email capture |

### Out of Scope

| Feature | Rationale |
|---------|-----------|
| User accounts | App handles auth, not website |
| Web app functionality | Mobile apps are the product |
| E-commerce | Purchases happen in-app |
| Support ticketing | Link to external support |
| Localization | English-first, internationalize later |

---

## Target Audience

### Primary: Board Game Collectors (Marcus Persona)

**Demographics:**
- 25-45 years old
- Tech-comfortable professionals
- Own 10+ board games
- Host game nights regularly

**Pain Points:**
- Games sit unplayed due to rule complexity
- Dreads being "the one who reads the rules"
- Wants to maximize play time, not prep time

**Website Goal:** Immediately recognize their problem and see the solution

### Secondary: Game Night Guests (Priya Persona)

**Demographics:**
- 20-40 years old
- Attends game nights but doesn't own many games
- Overwhelmed by lengthy rule explanations
- Wants to participate without feeling lost

**Website Goal:** Understand how the app helps them keep up

### Tertiary: Club Organizers (Jordan Persona)

**Demographics:**
- Runs board game meetups
- Needs to maximize group playing time
- Manages diverse skill levels

**Website Goal:** See efficiency gains for group settings

---

## User Journeys

### Journey 1: Organic Search Visitor

```
Google Search: "learn board game rules quickly"
        │
        ▼
Landing Page (Hero)
        │
        ▼
Scroll through Features
        │
        ▼
Watch How It Works
        │
        ▼
Read Testimonials (builds trust)
        │
        ▼
See Pricing (sets expectations)
        │
        ▼
Click App Store Button → Download
```

### Journey 2: Social Media Referral

```
Sees friend's post about Meeple
        │
        ▼
Clicks link → Landing Page Hero
        │
        ▼
Already interested, skims to CTA
        │
        ▼
Click App Store Button → Download
```

### Journey 3: Skeptical Researcher

```
Heard about app, wants to learn more
        │
        ▼
Reads every section thoroughly
        │
        ▼
Focuses on "How It Works" and USP
        │
        ▼
Checks Pricing to understand cost
        │
        ▼
Scrolls to Footer for legitimacy checks
        │
        ▼
Returns to top CTA → Download
```

---

## Functional Requirements

### Header & Navigation

| ID | Requirement |
|----|-------------|
| FR1 | Display Meeple logo/wordmark |
| FR2 | Show navigation links (Features, How It Works, Pricing) |
| FR3 | Include "Download" CTA button in header |
| FR4 | Sticky header on scroll (optional for MVP) |
| FR5 | Mobile hamburger menu for small screens |

### Hero Section

| ID | Requirement |
|----|-------------|
| FR6 | Display primary headline conveying value proposition |
| FR7 | Show supporting subheadline with benefit |
| FR8 | Include hero image/mockup of app in use |
| FR9 | Display App Store and Play Store download buttons |
| FR10 | Responsive layout (image position shifts on mobile) |

### Features Section

| ID | Requirement |
|----|-------------|
| FR11 | Display 4-6 key features in card/grid format |
| FR12 | Each feature has icon, title, and description |
| FR13 | Features highlight: AI recognition, 60-second rules, offline access, progressive learning |
| FR14 | Responsive grid (2x2 desktop, 1 column mobile) |

### How It Works Section

| ID | Requirement |
|----|-------------|
| FR15 | Show 3-step visual process |
| FR16 | Steps: 1. Photo the box, 2. AI generates rules, 3. Start playing |
| FR17 | Include illustrations or screenshots for each step |
| FR18 | Visual flow connects steps (arrows/lines) |

### Testimonials Section

| ID | Requirement |
|----|-------------|
| FR19 | Display 3-4 user testimonials |
| FR20 | Each testimonial has quote, name, and context |
| FR21 | Brutalist card styling for consistency |
| FR22 | Responsive layout (carousel optional for mobile) |

### USP Section

| ID | Requirement |
|----|-------------|
| FR23 | Clearly differentiate from competitors |
| FR24 | Highlight unique value (photo-to-rules, unknown game solving) |
| FR25 | May include comparison table or benefit list |

### Pricing Section

| ID | Requirement |
|----|-------------|
| FR26 | Display credit pack options (1, 3, 10 credits) |
| FR27 | Show prices (match in-app pricing) |
| FR28 | Mention free trial/starter credits |
| FR29 | Brutalist card styling for pricing tiers |
| FR30 | Note that purchases happen in-app |

### Final CTA Section

| ID | Requirement |
|----|-------------|
| FR31 | Strong closing headline |
| FR32 | App Store and Play Store buttons prominently displayed |
| FR33 | Reinforce value proposition briefly |

### Footer

| ID | Requirement |
|----|-------------|
| FR34 | Display copyright and legal links |
| FR35 | Links to Privacy Policy and Terms of Service |
| FR36 | Support/Contact link |
| FR37 | Social media links (if applicable) |
| FR38 | App Store and Play Store badges |

### Global

| ID | Requirement |
|----|-------------|
| FR39 | Dark mode support (system preference detection) |
| FR40 | Responsive design (mobile, tablet, desktop) |
| FR41 | SEO meta tags (title, description, OpenGraph) |
| FR42 | Favicon and app icons |
| FR43 | Brutalist design system consistency |

---

## Non-Functional Requirements

### Performance

| NFR | Requirement | Target |
|-----|-------------|--------|
| NFR1 | First Contentful Paint | <1.5s |
| NFR2 | Largest Contentful Paint | <2.5s |
| NFR3 | Time to Interactive | <3.5s |
| NFR4 | Cumulative Layout Shift | <0.1 |
| NFR5 | Total page size | <2MB |

### Reliability

| NFR | Requirement | Target |
|-----|-------------|--------|
| NFR6 | Uptime | 99.9% |
| NFR7 | CDN availability | Global edge caching |
| NFR8 | Graceful degradation | Works without JS |

### Security

| NFR | Requirement |
|-----|-------------|
| NFR9 | HTTPS only |
| NFR10 | No user data collection (static site) |
| NFR11 | Content Security Policy headers |

### Accessibility

| NFR | Requirement |
|-----|-------------|
| NFR12 | WCAG 2.1 AA compliance |
| NFR13 | Keyboard navigation |
| NFR14 | Screen reader compatible |
| NFR15 | Color contrast ratios met |
| NFR16 | Alt text for all images |

### SEO

| NFR | Requirement |
|-----|-------------|
| NFR17 | Semantic HTML structure |
| NFR18 | Meta tags (title, description, keywords) |
| NFR19 | OpenGraph and Twitter cards |
| NFR20 | Sitemap.xml |
| NFR21 | robots.txt |
| NFR22 | Structured data (Organization, App) |

### Compatibility

| NFR | Requirement |
|-----|-------------|
| NFR23 | Chrome, Safari, Firefox, Edge (latest 2 versions) |
| NFR24 | iOS Safari, Android Chrome |
| NFR25 | Responsive: 320px to 2560px |

---

## Content Requirements

### Copy Tone

- **Confident**: "60 seconds, not 60 minutes"
- **Playful**: Match the board game context
- **Direct**: No jargon, clear benefits
- **Inclusive**: "Everyone can learn" not "for experts"

### Visual Assets Required

| Asset | Purpose |
|-------|---------|
| App mockups (iPhone + Android) | Hero, How It Works |
| Feature icons (6) | Features section |
| Step illustrations (3) | How It Works |
| User photos or avatars | Testimonials |
| App Store badge | CTAs |
| Play Store badge | CTAs |
| Meeple logo/wordmark | Header, Footer |
| Favicon set | Browser tabs |
| OpenGraph image | Social sharing |

---

## Analytics & Tracking

### Key Events to Track

| Event | Trigger |
|-------|---------|
| Page View | Landing page load |
| Scroll Depth | 25%, 50%, 75%, 100% |
| CTA Click - iOS | App Store button click |
| CTA Click - Android | Play Store button click |
| Section View | Each section enters viewport |

### Recommended Tools

- Plausible or Fathom (privacy-focused)
- Vercel Analytics (built-in)
- PostHog (if more detailed funnel analysis needed)

---

## Roadmap Summary

### Now (MVP)
- Single-page landing with all core sections
- Brutalist design system implementation
- App Store / Play Store integration
- Basic SEO optimization
- Responsive design

### Next (v1.1)
- Blog section for content marketing
- Press kit page
- Enhanced animations
- A/B testing setup

### Later (v2.0)
- Waitlist functionality
- Localization (Spanish, German, French)
- Interactive demo embed

---

*Product Requirements Document - Meeple Landing Page*
*Generated: 2025-12-26*
