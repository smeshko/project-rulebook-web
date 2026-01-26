/**
 * Waitlist API Service
 * Provides reusable integration logic for waitlist subscription forms.
 */

// API Configuration
const WAITLIST_API_URL =
  "https://project-rulebook-staging.up.railway.app/api/waitlist";

// Error Messages
const ERROR_MESSAGES = {
  validation: "Please enter a valid email address",
  rate_limit: "Too many requests. Please try again later.",
  network: "Unable to connect. Please check your internet connection.",
  unknown: "Something went wrong. Please try again.",
} as const;

// Types
export interface WaitlistResponse {
  message: string;
  email: string;
}

export interface WaitlistError {
  type: "validation" | "rate_limit" | "network" | "unknown";
  message: string;
}

export type WaitlistResult =
  | { success: true; data: WaitlistResponse }
  | { success: false; error: WaitlistError };

/**
 * Subscribe an email to the waitlist.
 *
 * @param email - The email address to subscribe
 * @returns A discriminated union result indicating success or failure
 */
export async function subscribeToWaitlist(
  email: string
): Promise<WaitlistResult> {
  try {
    const response = await fetch(WAITLIST_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    // Handle error responses
    if (!response.ok) {
      if (response.status === 400) {
        return {
          success: false,
          error: { type: "validation", message: ERROR_MESSAGES.validation },
        };
      }

      if (response.status === 429) {
        return {
          success: false,
          error: { type: "rate_limit", message: ERROR_MESSAGES.rate_limit },
        };
      }

      return {
        success: false,
        error: { type: "unknown", message: ERROR_MESSAGES.unknown },
      };
    }

    // Handle success
    const data: WaitlistResponse = await response.json();
    return { success: true, data };
  } catch {
    // Handle network errors
    return {
      success: false,
      error: { type: "network", message: ERROR_MESSAGES.network },
    };
  }
}
