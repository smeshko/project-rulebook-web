# Environment Configuration

**Date:** 2026-03-22
**Related Files:** `src/lib/config.ts`, `.env.example`, `src/lib/api.ts`, `src/app/sitemap.ts`, `src/app/layout.tsx`

## Overview

Centralized environment configuration for API and site URLs. All environment-dependent URLs are resolved through a single config module (`src/lib/config.ts`) with validation and hardcoded fallbacks, replacing previously scattered hardcoded values across the codebase.

## What Was Built

- **Config module** (`src/lib/config.ts`): Single source of truth for `API_URL` and `SITE_URL` with URL validation and trailing-slash normalization
- **Environment variable support**: `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_SITE_URL` via `.env` files
- **Consistent consumption**: All files that need URLs import from `@/lib/config` instead of hardcoding

## Technical Implementation

### Key Files

- `src/lib/config.ts`: Exports `API_URL` and `SITE_URL` constants, reads from env vars with validated fallbacks
- `.env.example`: Documents required environment variables with example values
- `src/lib/api.ts`: Consumes `API_URL` to construct the waitlist endpoint
- `src/app/sitemap.ts`: Consumes `SITE_URL` for sitemap generation
- `src/app/layout.tsx`: Consumes `SITE_URL` for `metadataBase`, Open Graph URL, and canonical URL

### Key Patterns

- **Import from config, never hardcode**: Any file needing `API_URL` or `SITE_URL` must import from `@/lib/config`. Do not use `process.env.NEXT_PUBLIC_*` directly elsewhere.
- **Validated fallbacks**: The `resolveUrl()` helper enforces HTTP(S) protocol and strips trailing slashes. Invalid env values silently fall back to defaults.

### Code Examples

```typescript
// Correct: import from config
import { API_URL, SITE_URL } from "@/lib/config";

const endpoint = `${API_URL}/api/some-resource`;
const canonical = SITE_URL;

// Incorrect: do NOT do this
const url = process.env.NEXT_PUBLIC_API_URL || "https://...";
```

## How to Use

1. Copy `.env.example` to `.env` for local development
2. Set `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_SITE_URL` as needed
3. Import `API_URL` or `SITE_URL` from `@/lib/config` in any consuming file
4. When adding new environment-dependent URLs, add them to `config.ts` following the same `resolveUrl()` pattern

## Configuration

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | string | `https://project-rulebook-staging.up.railway.app` | Backend API base URL |
| `NEXT_PUBLIC_SITE_URL` | string | `https://meeple.app` | Public site URL for SEO/sitemap |

## Notes

- Plausible Analytics `data-domain` in `layout.tsx` is intentionally **not** sourced from config — it is an analytics identifier, not a navigational URL
- Both variables use `NEXT_PUBLIC_` prefix so they are available in both server and client components
- URL validation enforces `http:` or `https:` protocol; other protocols fall back to the default
