# UI Components Inventory

**Project:** project-rulebook-web (Meeple Landing Page)
**Generated:** 2026-01-22
**Component Count:** 15

## Component Categories

### Layout Components (2)
Located in: `src/components/layout/`

| Component | File | Description |
|-----------|------|-------------|
| Header | Header.tsx | Navigation header with mobile menu, scroll detection |
| Footer | Footer.tsx | Site footer with links and branding |

### Section Components (7)
Located in: `src/components/sections/`

| Component | File | Description |
|-----------|------|-------------|
| Hero | Hero.tsx | Main hero section with headline and CTA |
| Features | Features.tsx | Product features showcase |
| HowItWorks | HowItWorks.tsx | Step-by-step process explanation |
| USP | USP.tsx | Unique selling proposition section |
| Testimonials | Testimonials.tsx | Customer testimonials |
| Pricing | Pricing.tsx | Pricing plans section |
| FinalCTA | FinalCTA.tsx | Final call-to-action section |

### UI Components (6)
Located in: `src/components/ui/`

| Component | File | Type | Description |
|-----------|------|------|-------------|
| Button | Button.tsx | Interactive | Reusable button with variants |
| Card | Card.tsx | Display | Card container component |
| Badge | Badge.tsx | Display | Status/label badge |
| Input | Input.tsx | Form | Text input field |
| PhoneMockup | PhoneMockup.tsx | Display | Phone device mockup for screenshots |
| SectionHeader | SectionHeader.tsx | Layout | Section title/header component |

## State Management

- **Pattern:** Component-level React Hooks
- **Libraries Used:** None (vanilla React)
- **State Types:**
  - `useState` - Local component state
  - `useEffect` - Side effects (scroll detection)

### Components with State:
1. **Header.tsx** - `isScrolled`, `isMobileMenuOpen`
2. **Hero.tsx** - Local UI state
3. **FinalCTA.tsx** - Form/interaction state

## Design System

### Color Palette (from tailwind.config.ts)
- **Surface Colors:** White/Dark variants with cream accents (#FFF9F0)
- **Brutalist Accent Palette:**
  - Orange: #FF6B35
  - Blue: #3498DB
  - Yellow: #FFD23F
  - Purple: #7209B7
  - Pink: #E91E63
  - Green: #2ECC71
  - Red: #E74C3C
  - Teal: #1ABC9C

### Typography
- Font: Inter (Google Fonts)
- Display sizes: 3rem, 2.25rem, 1.75rem
- Brutalist typography with heavy weights (900, 700)

### Animations
- fadeIn, slideUp, slideInLeft, slideInRight
- bounceSubtle, pulse-slow

### Shadow System
- brutalist-sm through brutalist-xl (hard shadow offsets)
- Color-specific shadows (orange, pink, blue, green, purple, yellow)
