# Epic List

## Epic 1: Meeple Brand Identity
Visitors see consistent "Meeple" branding throughout the site, building trust and recognition.

**FRs covered:** FR1, FR34-38, FR41, FR43
**Additional:** All branding updates from gap analysis

**Scope:**
- Update Header logo/name to "Meeple"
- Update Footer branding to "Meeple"
- Update section titles ("Why Meeple?", "What Makes Meeple Different")
- Update metadata (title, description, OpenGraph) with Meeple branding
- Remove/placeholder social links and contact email until decided

### Epic 1: Dependency Flowchart

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║  WAVE 1: Start Immediately (PARALLEL x4)                                      ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  [1-1] Update Header    ║  [1-2] Update Footer    ║  [1-3] Update Section     ║
║        Branding         ║        Branding         ║        Titles             ║
║                         ║                         ║                           ║
║  ════════════════════   ║  ════════════════════   ║  ════════════════════     ║
║                         ║                         ║                           ║
║                         ║  [1-4] Update Metadata  ║                           ║
║                         ║        and SEO          ║                           ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
                                      │
                                      ▼
                              ┌───────────────┐
                              │  Epic 1 Done  │
                              └───────────────┘
```

**Execution Summary:**
- **Wave 1:** All 4 stories can start immediately (fully parallel)
- **No sequential dependencies:** Each story modifies independent files
- **Estimated parallelization:** 4 developers could complete simultaneously

---

## Epic 2: Functional Waitlist
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

## Epic 3: Complete Visual Experience
All screenshots and images display correctly, showcasing the actual app.

**FRs covered:** FR8, FR17

**Scope:**
- Fix Hero screenshot path (map to actual screenshot)
- Fix HowItWorks screenshot paths (3 broken references)
- Map to actual screenshots in `/public/screenshots/`
- Verify all images load correctly

---

## Epic 4: SEO Foundation
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
