const DEFAULT_API_URL = "https://project-rulebook-staging.up.railway.app";
const DEFAULT_SITE_URL = "https://meeple.app";

function stripTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

function resolveUrl(envValue: string | undefined, fallback: string): string {
  const raw = envValue || fallback;
  try {
    const parsed = new URL(raw);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return stripTrailingSlash(fallback);
    }
    return stripTrailingSlash(raw);
  } catch {
    return stripTrailingSlash(fallback);
  }
}

export const API_URL = resolveUrl(
  process.env.NEXT_PUBLIC_API_URL,
  DEFAULT_API_URL
);

export const SITE_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
  DEFAULT_SITE_URL
);
