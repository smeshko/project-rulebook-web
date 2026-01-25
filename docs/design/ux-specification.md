---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
workflowComplete: true
inputDocuments:
  - path: '../project-rulebook-ios/_bmad-output/project-planning-artifacts/ux-design-specification.md'
    type: 'ios-ux'
    description: 'iOS UX specification with Gaming Brutalist design system'
  - path: '../project-rulebook-android/_bmad-output/project-planning-artifacts/ux-design-specification.md'
    type: 'android-ux'
    description: 'Android UX specification with platform adaptations'
  - path: 'tailwind.config.ts'
    type: 'design-tokens'
    description: 'Existing Tailwind configuration with brutalist tokens'
workflowType: 'ux-design'
workflowContext: 'landing-page-web'
project_name: 'meeple-landing-page'
user_name: 'Ivo'
date: '2025-12-26'
---

# UX Design Specification - Meeple Landing Page

**Author:** Ivo
**Date:** 2025-12-26
**Status:** Planning

---

## Executive Summary

### Project Vision

**"From box to playing in 60 seconds"** - The Meeple landing page communicates this promise to potential users, converting curious visitors into confident app downloaders.

### Design Mission Statement

> Extend the bold, game-like brutalist aesthetic from the mobile apps to the web, creating an immersive brand experience that builds excitement and trust from first impression to download click.

---

## Target Users

### Primary: Board Game Collectors & Hosts
- Own 10+ games, many unplayed
- Host game nights and want instant rule access
- Tech-comfortable, comparison shoppers
- Looking for "the app that actually works"

### Secondary: Game Night Guests
- Don't own games but attend game nights
- Frustrated by rule learning experiences
- Want quick reference during play
- Word-of-mouth discovery likely

### Tertiary: Club Organizers
- Run meetups with rotating selections
- Need efficiency tools for groups
- Value newcomer accessibility
- Often work offline (libraries, cafes)

---

## Core User Experience

### Defining Experience

The landing page experience is **Discover → Understand → Trust → Download** - a linear journey from curiosity to action.

**Primary User Action:** Click App Store or Play Store download button

**Core Loop:** Land → Scan → Convince → Convert

### Experience Principles

1. **Clarity Over Cleverness**
   - Every section answers "what's in it for me?"
   - No jargon, no tech specs, just benefits
   - Clear next action at every scroll point

2. **Visual Proof**
   - Show the app in action, don't just describe it
   - Screenshots and mockups build credibility
   - "Seeing is believing" philosophy

3. **Brand Consistency**
   - Brutalist design matches the app experience
   - Users know what they're downloading
   - Strong visual memory creates recognition

4. **Frictionless Path**
   - Multiple CTAs throughout the page
   - No required interactions before download
   - Mobile-optimized for on-the-go discovery

5. **Trust Building**
   - Testimonials provide social proof
   - Transparent pricing removes surprises
   - Professional polish signals legitimacy

---

## Desired Emotional Response

### Primary Emotional Goals

| Emotion | Trigger | Description |
|---------|---------|-------------|
| **Recognition** | Hero section | "This is exactly my problem!" |
| **Curiosity** | Features | "I want to try this" |
| **Confidence** | How It Works | "This looks simple enough" |
| **Trust** | Testimonials | "Other people love it" |
| **Eagerness** | Final CTA | "I need to download this now" |

### Emotional Journey

| Stage | Starting Emotion | Target Emotion | Design Response |
|-------|------------------|----------------|-----------------|
| **Hero** | Curious | Recognized | Bold headline that names the pain |
| **Features** | Interested | Excited | Compelling capability showcase |
| **How It Works** | Skeptical | Convinced | Simple 3-step visualization |
| **Testimonials** | Cautious | Trusting | Relatable user stories |
| **Pricing** | Uncertain | Informed | Transparent, fair pricing |
| **Final CTA** | Ready | Eager | Strong closing prompt |

---

## Design System: Web Brutalist

### Core Principles

The Meeple web design system extends the mobile "Gaming Brutalist" aesthetic:

1. **Bold Color Palette**: Vibrant board game colors
2. **Hard Shadows**: 4-12px offset black shadows with no blur
3. **Zero Corner Radius**: Pure rectangular forms
4. **High Contrast Typography**: Black/white on colored backgrounds
5. **Chunky Borders**: 3-4px solid black borders

### Color Palette

#### Surface Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `surface-primary` | #FFFFFF | #1C1C1E | Cards, modals |
| `surface-secondary` | #FFF9F0 | #2C2C2E | Page background |
| `surface-tertiary` | #F5E6D3 | #3A3A3C | Nested elements |

#### Content Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `content-primary` | #000000 | #FFFFFF | Headlines, body |
| `content-secondary` | rgba(0,0,0,0.7) | rgba(255,255,255,0.7) | Secondary text |
| `content-tertiary` | rgba(0,0,0,0.4) | rgba(255,255,255,0.4) | Captions, hints |

#### Brutalist Accent Palette

| Color | Light | Dark | Usage |
|-------|-------|------|-------|
| `brutalist-orange` | #FF6B35 | #FF8C5F | Primary CTA, hero accents |
| `brutalist-pink` | #E91E63 | #F06292 | Secondary actions, highlights |
| `brutalist-blue` | #3498DB | #5DADE2 | Info, links |
| `brutalist-yellow` | #FFD23F | #FFE066 | Warnings, highlights |
| `brutalist-purple` | #7209B7 | #9D4EDD | Premium, advanced |
| `brutalist-green` | #2ECC71 | #58D68D | Success, positive |
| `brutalist-red` | #E74C3C | #EC7063 | Errors, destructive |
| `brutalist-teal` | #1ABC9C | #48C9B0 | Alternative accent |

### Typography

#### Font Stack

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

#### Type Scale

| Style | Size | Weight | Letter Spacing | Usage |
|-------|------|--------|----------------|-------|
| `display-lg` | 3rem (48px) | 900 | tight | Hero headline |
| `display-md` | 2.25rem (36px) | 900 | tight | Section titles |
| `display-sm` | 1.75rem (28px) | 700 | normal | Subsection titles |
| `brutalist-title` | 1.5rem (24px) | 900 | 0.02em | Card titles |
| `brutalist-section` | 1rem (16px) | 900 | 0.05em | Section headers |
| `brutalist-button` | 0.875rem (14px) | 900 | 0.05em | Button text |
| `body` | 1.125rem (18px) | 400 | normal | Body copy |
| `caption` | 0.875rem (14px) | 400 | normal | Captions, meta |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Micro gaps |
| `sm` | 8px | Tight spacing |
| `md` | 16px | Standard padding |
| `lg` | 24px | Section gaps |
| `xl` | 32px | Large sections |
| `2xl` | 48px | Major divisions |
| `3xl` | 64px | Section spacing |
| `4xl` | 96px | Hero spacing |

### Brutalist Elements

| Element | Value |
|---------|-------|
| Border Width | 3px (standard), 4px (thick) |
| Shadow Offset SM | 4px |
| Shadow Offset MD | 6px |
| Shadow Offset LG | 8px |
| Shadow Offset XL | 12px |
| Corner Radius | 0px (always) |

### Shadow System

```css
/* Black shadows for dark borders */
.shadow-brutalist-sm { box-shadow: 4px 4px 0 0 #000000; }
.shadow-brutalist-md { box-shadow: 6px 6px 0 0 #000000; }
.shadow-brutalist-lg { box-shadow: 8px 8px 0 0 #000000; }
.shadow-brutalist-xl { box-shadow: 12px 12px 0 0 #000000; }

/* Colored shadows for accent cards */
.shadow-brutalist-orange { box-shadow: 8px 8px 0 0 #FF6B35; }
.shadow-brutalist-pink { box-shadow: 6px 6px 0 0 #E91E63; }
.shadow-brutalist-blue { box-shadow: 6px 6px 0 0 #3498DB; }
```

---

## Component Library

### Buttons

#### Primary Button
- Background: `brutalist-orange` (or `brutalist-pink`)
- Text: White, uppercase, 900 weight
- Border: 3px solid black
- Shadow: 4px offset black
- Hover: Shadow reduces to 2px, button shifts down/right
- Active: Shadow 0px, full offset translation

#### Secondary Button
- Background: Transparent
- Text: Black (dark: white), uppercase, 900 weight
- Border: 3px solid black (dark: white)
- Shadow: None
- Hover: Background fills slightly

#### Store Badges
- Standard Apple/Google badges
- Wrapped in brutalist border treatment
- Shadow offset for brutalist feel

### Cards

#### Feature Card
- Background: `surface-primary`
- Border: 3px solid black
- Shadow: 6px offset black
- Padding: 24px
- Icon: 48px, colored accent
- Title: `brutalist-title` weight
- Description: `body` regular

#### Testimonial Card
- Background: Colored accent (varies)
- Border: 3px solid black
- Shadow: 8px offset black
- Quote mark decorative element
- User attribution at bottom

#### Pricing Card
- Background: `surface-primary`
- Border: 3px solid black
- Shadow: 6px offset (accent color for popular)
- Price prominent in `display-md`
- Feature list with checkmarks
- CTA button at bottom

### Navigation

#### Header
- Sticky positioning
- Logo left, nav center, CTA right
- Border bottom: 3px solid black
- Mobile: Hamburger menu with slide-out panel

#### Footer
- Full-width dark background
- 3-column layout (desktop)
- Logo, links, store badges
- Border top: 3px solid accent

### Section Containers

#### Standard Section
- Padding: 96px vertical (desktop), 48px (mobile)
- Max width: 1280px centered
- Alternating background colors for rhythm

#### Hero Section
- Full viewport height (min)
- Split layout: Content left, mockup right
- Store buttons prominent

---

## Page Layout Specification

### Header

```
┌────────────────────────────────────────────────────────────┐
│ [Logo]        Features  How It Works  Pricing    [Download]│
│────────────────────────────────────────────────────────────│
└────────────────────────────────────────────────────────────┘
```

- Height: 72px
- Logo: Meeple wordmark
- Nav: Text links, brutalist hover states
- CTA: Primary button style

### Hero Section

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ┌──────────────────────┐      ┌──────────────────────┐   │
│  │ From box to playing  │      │                      │   │
│  │ in 60 seconds        │      │    [App Mockup]      │   │
│  │                      │      │                      │   │
│  │ Never read a rulebook│      │                      │   │
│  │ again. Just point,   │      │                      │   │
│  │ snap, and play.      │      │                      │   │
│  │                      │      │                      │   │
│  │ [App Store] [Play]   │      │                      │   │
│  └──────────────────────┘      └──────────────────────┘   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- Background: `surface-secondary`
- Headline: `display-lg` with accent color highlight
- Mockup: iPhone or Android phone with app screenshot
- Store buttons: Inline, equal sizing

### Features Section

```
┌────────────────────────────────────────────────────────────┐
│                   WHY MEEPLE?                              │
│                                                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │ [Icon]      │  │ [Icon]      │  │ [Icon]      │        │
│  │ AI-Powered  │  │ 60-Second   │  │ Offline     │        │
│  │ Recognition │  │ Rules       │  │ Access      │        │
│  │             │  │             │  │             │        │
│  │ Description │  │ Description │  │ Description │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │ [Icon]      │  │ [Icon]      │  │ [Icon]      │        │
│  │ Progressive │  │ Game        │  │ Share       │        │
│  │ Learning    │  │ Library     │  │ with Group  │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- 2x3 grid desktop, single column mobile
- Each card: Brutalist styling with colored icon
- Staggered animation on scroll

### How It Works Section

```
┌────────────────────────────────────────────────────────────┐
│                  HOW IT WORKS                              │
│                                                            │
│    ┌─────────┐       ┌─────────┐       ┌─────────┐        │
│    │   1     │ ───▶  │   2     │ ───▶  │   3     │        │
│    │ [Photo] │       │  [AI]   │       │ [Play]  │        │
│    │         │       │         │       │         │        │
│    │ Snap a  │       │ AI      │       │ Start   │        │
│    │ photo   │       │ generates│       │ playing │        │
│    └─────────┘       └─────────┘       └─────────┘        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- 3 steps in horizontal flow
- Connecting arrows (brutalist style)
- Each step: Number, illustration, label, description
- Colored backgrounds per step (orange, blue, green)

### Testimonials Section

```
┌────────────────────────────────────────────────────────────┐
│               WHAT PLAYERS SAY                             │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ "Finally got our shrink-wrapped games               │  │
│  │  off the shelf!"                                    │  │
│  │                                     - Marcus C.     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌────────────────────┐  ┌────────────────────┐          │
│  │ "Game night went   │  │ "My meetup group  │          │
│  │  from chaos to     │  │  plays 3x more    │          │
│  │  playing fast"     │  │  games now"       │          │
│  │     - Priya S.     │  │     - Jordan W.   │          │
│  └────────────────────┘  └────────────────────┘          │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- Featured testimonial larger
- Grid of smaller testimonials
- Colored card backgrounds (varied)
- Quote marks as decorative elements

### USP Section

```
┌────────────────────────────────────────────────────────────┐
│            NOT JUST ANOTHER RULES APP                      │
│                                                            │
│  ┌──────────────────────┐      ┌──────────────────────┐   │
│  │ Others ask:          │      │ Meeple solves:       │   │
│  │ "What game is this?" │      │ "I don't know        │   │
│  │                      │  VS  │  where to start"     │   │
│  │ Requires you to      │      │                      │   │
│  │ know the game        │      │ Photo any box,       │   │
│  │ already              │      │ learn any game       │   │
│  └──────────────────────┘      └──────────────────────┘   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- Comparison layout (vs. competitors)
- Clear differentiation messaging
- Bold, confident copy

### Pricing Section

```
┌────────────────────────────────────────────────────────────┐
│                 SIMPLE PRICING                             │
│           3 free credits to get started                    │
│                                                            │
│  ┌──────────┐  ┌──────────────┐  ┌──────────┐             │
│  │  Single  │  │  ★ Popular  │  │   Power   │             │
│  │          │  │              │  │   Pack    │             │
│  │    $1    │  │     $2      │  │    $5     │             │
│  │ 1 credit │  │  3 credits  │  │ 10 credits│             │
│  │          │  │  Save 33%   │  │  Save 50% │             │
│  │ [Button] │  │  [Button]   │  │  [Button] │             │
│  └──────────┘  └──────────────┘  └──────────┘             │
│                                                            │
│         Purchases made securely in the app                 │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- 3 pricing tiers in cards
- Middle tier highlighted (popular)
- Savings callouts for bundles
- Note about in-app purchase

### Final CTA Section

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│          READY TO PLAY MORE GAMES?                         │
│                                                            │
│     Download Meeple free and get 3 credits to start       │
│                                                            │
│            [App Store]    [Play Store]                     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- Full-width accent background
- Large headline
- Prominent store buttons
- Minimal distraction

### Footer

```
┌────────────────────────────────────────────────────────────┐
│  [Logo]           Links              Download              │
│  Meeple           Privacy            [App Store]           │
│                   Terms              [Play Store]          │
│  Board games,     Support                                  │
│  made simple      Contact                                  │
│                                                            │
│  © 2025 Meeple. All rights reserved.                      │
└────────────────────────────────────────────────────────────┘
```

- Dark background (inverted colors)
- 3-column layout desktop
- Legal links required
- Store badges repeated

---

## Responsive Design

### Breakpoints

| Name | Width | Description |
|------|-------|-------------|
| `mobile` | < 640px | Single column, stacked |
| `tablet` | 640-1024px | Two columns where appropriate |
| `desktop` | > 1024px | Full layout |

### Mobile Adaptations

| Element | Mobile Treatment |
|---------|------------------|
| Header | Hamburger menu, logo + CTA only visible |
| Hero | Stacked: Content above mockup |
| Features | Single column, scrollable |
| How It Works | Vertical steps with connecting line |
| Testimonials | Single column or carousel |
| Pricing | Stacked cards |
| Footer | Single column, accordion for links |

### Touch Targets

- All interactive elements: 44x44px minimum
- Buttons: Full-width on mobile
- Generous spacing between tap targets

---

## Animation & Motion

### Scroll Animations

| Element | Animation | Trigger |
|---------|-----------|---------|
| Section headings | Fade up | On enter viewport |
| Feature cards | Stagger fade up | On enter viewport |
| How It Works steps | Sequential reveal | On enter viewport |
| Testimonials | Fade in | On enter viewport |

### Interaction Animations

| Interaction | Animation |
|-------------|-----------|
| Button hover | Shadow shrinks, button shifts |
| Button active | Shadow disappears, full shift |
| Card hover | Subtle lift (shadow increase) |
| Nav link hover | Underline slide in |

### Animation Tokens

| Token | Value |
|-------|-------|
| Duration (fast) | 150ms |
| Duration (normal) | 300ms |
| Duration (slow) | 500ms |
| Easing (default) | ease-out |
| Easing (bounce) | cubic-bezier(0.34, 1.56, 0.64, 1) |

---

## Accessibility

### Requirements

| Requirement | Implementation |
|-------------|----------------|
| Color contrast | All text 4.5:1 minimum |
| Focus states | Visible focus rings on all interactive |
| Alt text | All images have descriptive alt |
| Heading hierarchy | H1 → H2 → H3 logical order |
| Skip links | Skip to main content link |
| Reduced motion | Respect `prefers-reduced-motion` |
| Keyboard nav | Full keyboard navigation support |

### Color Contrast Verification

All brutalist accent colors verified against white/black text for AA compliance.

---

## Dark Mode

### Implementation

- Detect `prefers-color-scheme: dark`
- Toggle class on `<html>` element
- All design tokens have dark variants
- No manual toggle for MVP (system preference only)

### Dark Mode Palette

All surface and content colors inverted per token definitions above. Accent colors use `-dark` variants for better visibility on dark backgrounds.

---

## Implementation Notes

### Tailwind Configuration

The existing `tailwind.config.ts` already includes:
- All brutalist color tokens
- Shadow utilities
- Typography scale
- Animation keyframes

### Component Structure

Recommended component organization:
```
src/components/
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── USP.tsx
│   ├── Pricing.tsx
│   └── FinalCTA.tsx
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    ├── Badge.tsx
    └── Container.tsx
```

### Image Assets Required

| Asset | Dimensions | Format |
|-------|------------|--------|
| App mockup (iPhone) | 400x800px | PNG with transparency |
| App mockup (Android) | 400x800px | PNG with transparency |
| Feature icons (6) | 48x48px | SVG |
| Step illustrations (3) | 200x200px | SVG or PNG |
| Logo wordmark | Variable | SVG |
| Favicon | 32x32, 180x180 | PNG/ICO |
| OG Image | 1200x630px | PNG/JPG |

---

*UX Design Specification - Meeple Landing Page*
*Generated: 2025-12-26*
