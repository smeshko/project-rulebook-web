# Story 1.4: Update Metadata and SEO

Status: Ready for Review
Linear Issue: not-configured
Epic: 1 - Meeple Brand Identity
Created: 2025-12-31

---

## Story

As a **search engine** or **social media platform**,
I want correct Meeple branding in metadata,
so that the site displays correctly in search results and social shares.

## Acceptance Criteria

**Given** search engines crawl the site
**When** they read the metadata
**Then** the title contains "Meeple" (not "Rulebook")
**And** the description references "Meeple"
**And** OpenGraph title/description use "Meeple"
**And** the metadataBase uses placeholder domain `https://meeple.app`
**And** Twitter handle references are removed
**And** Plausible analytics domain is updated to `meeple.app`

## Tasks / Subtasks

- [x] Open `src/app/layout.tsx`
- [x] Update `metadataBase` URL from `https://rulebook.app` to `https://meeple.app`
- [x] Update page title to use "Meeple" instead of "Rulebook"
- [x] Update meta description to reference "Meeple"
- [x] Update `authors`, `creator`, `publisher` from "Rulebook" to "Meeple"
- [x] Update OpenGraph metadata:
  - [x] Change `url` to `https://meeple.app`
  - [x] Change `siteName` to "Meeple"
  - [x] Update `title` and `description` with Meeple branding
  - [x] Update image alt text
- [x] Update Twitter card metadata:
  - [x] Update `title` and `description` with Meeple branding
  - [x] Remove `creator` and `site` Twitter handles (or set to placeholder)
- [x] Update `alternates.canonical` to `https://meeple.app`
- [x] Update Plausible analytics `data-domain` attribute from `rulebook.app` to `meeple.app`
- [x] Verify no TypeScript errors
- [x] Test metadata appears correctly in browser dev tools

---

## Developer Context

### Technical Requirements

This involves comprehensive metadata updates in the Next.js root layout file. All "Rulebook" references must be replaced with "Meeple", and domain references updated to `meeple.app`.

**Complete Updated Metadata Object:**

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://meeple.app"),
  title: "Meeple — Learn Any Board Game in 60 Seconds | AI-Powered Rules",
  description:
    "Stop reading rulebooks. Scan any board game box with your phone and get instant, easy-to-follow rules. Start playing in under 60 seconds. Free to try.",
  keywords: [
    "board game rules app",
    "learn board games fast",
    "board game rule scanner",
    "instant game rules",
    "AI board game helper",
    "game night app",
    "board game tutorial app",
    "scan board game box",
    "quick game rules",
    "board game companion app",
  ],
  authors: [{ name: "Meeple" }],
  creator: "Meeple",
  publisher: "Meeple",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://meeple.app",
    siteName: "Meeple",
    title: "Meeple — Learn Any Board Game in 60 Seconds",
    description:
      "AI-powered app that turns any game box photo into instant, digestible rules. From box to playing in 60 seconds.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meeple - Learn Any Board Game in 60 Seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meeple — Learn Any Board Game in 60 Seconds",
    description:
      "AI-powered app that turns any game box photo into instant, digestible rules.",
    images: ["/twitter-card.png"],
    // Removed: creator and site handles
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://meeple.app",
  },
};
```

**Plausible Analytics Update (in JSX):**

```tsx
// FROM:
<script
  defer
  data-domain="rulebook.app"
  src="https://plausible.io/js/script.js"
/>

// TO:
<script
  defer
  data-domain="meeple.app"
  src="https://plausible.io/js/script.js"
/>
```

### Architecture Compliance

- **File Type:** Next.js Root Layout (Server Component)
- **Metadata Pattern:** Next.js App Router Metadata API
- **Location:** `src/app/layout.tsx`
- **SEO Pattern:** Static metadata export

### Library & Framework Requirements

- **Next.js:** 14.2.18 (Metadata API)
- **TypeScript:** Metadata type from `next`
- No additional dependencies required

### File Structure Requirements

| File | Action | Purpose |
|------|--------|---------|
| `src/app/layout.tsx` | Modify | Update all metadata and analytics |

### Testing Requirements

- Use browser dev tools to inspect `<head>` for correct meta tags
- Check OpenGraph tags in head: `<meta property="og:title">`, `<meta property="og:site_name">`
- Check Twitter card tags: `<meta name="twitter:title">`
- Verify canonical URL in `<link rel="canonical">`
- Use Facebook Sharing Debugger or Twitter Card Validator (optional, requires deployment)
- Verify Plausible script has correct domain (check Network tab)

---

## Dev Notes

### Critical Changes Summary

| Element | From | To |
|---------|------|----|
| metadataBase | `https://rulebook.app` | `https://meeple.app` |
| title | "Rulebook — Learn Any..." | "Meeple — Learn Any..." |
| authors/creator/publisher | "Rulebook" | "Meeple" |
| openGraph.url | `https://rulebook.app` | `https://meeple.app` |
| openGraph.siteName | "Rulebook" | "Meeple" |
| openGraph.title | "Rulebook — Learn Any..." | "Meeple — Learn Any..." |
| openGraph.images.alt | "Rulebook - Learn Any..." | "Meeple - Learn Any..." |
| twitter.title | "Rulebook — Learn Any..." | "Meeple — Learn Any..." |
| twitter.creator | "@rulebookapp" | (remove) |
| twitter.site | "@rulebookapp" | (remove) |
| alternates.canonical | `https://rulebook.app` | `https://meeple.app` |
| Plausible data-domain | "rulebook.app" | "meeple.app" |

### Note on Twitter Handles

The acceptance criteria states to remove Twitter handle references. This means:
- Remove `creator: "@rulebookapp"`
- Remove `site: "@rulebookapp"`

Do NOT add placeholder Twitter handles - just remove them entirely.

### Note on Domain

`meeple.app` is a placeholder domain. When the actual domain is finalized, it will need to be updated again. This is documented as a known future task.

### References

- [Source: _bmad-output/epics.md#Story 1.4: Update Metadata and SEO]
- [Source: _bmad-output/project-planning-artifacts/architecture.md#SEO Implementation]
- [Source: _bmad-output/project-planning-artifacts/gap-analysis.md#Branding Updates]

---

## Dependencies

- **Depends On:** None
- **Blocks:** None
- **Can Parallel With:** Story 1.1, Story 1.2, Story 1.3

### Dependency Rationale

No dependencies - this story modifies only `layout.tsx` which is independent of other Epic 1 stories.

---

## Dev Agent Record

### Agent Model Used

Claude Opus 4.5

### Completion Notes List

- Updated all metadata in `src/app/layout.tsx` from "Rulebook" branding to "Meeple" branding
- Changed `metadataBase` URL from `https://rulebook.app` to `https://meeple.app`
- Updated page title, authors, creator, and publisher to use "Meeple"
- Updated OpenGraph metadata: url, siteName, title, description, and image alt text
- Updated Twitter card metadata: title and description
- Removed Twitter `creator` and `site` handle properties entirely (as per acceptance criteria)
- Updated `alternates.canonical` to `https://meeple.app`
- Updated Plausible analytics `data-domain` from `rulebook.app` to `meeple.app`
- Verified TypeScript compilation with no errors
- Verified build passes successfully

### File List

- `src/app/layout.tsx` - Modified (metadata and analytics updates)
