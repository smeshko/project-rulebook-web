# Waitlist API Service

**Date:** 2026-01-26
**Related Files:** `src/lib/api.ts`

## Overview

A reusable API service for subscribing emails to the Project Rulebook waitlist. This service provides type-safe error handling using TypeScript discriminated unions, allowing consuming components to handle different error scenarios (validation, rate limiting, network issues) with compile-time safety.

## What Was Built

- Async `subscribeToWaitlist` function for POST requests to the waitlist API
- `WaitlistResult` discriminated union type for type-safe success/error handling
- Categorized error handling for validation (400), rate limiting (429), network, and unknown errors
- Centralized error messages for consistent user feedback

## Technical Implementation

### Key Files

- `src/lib/api.ts`: The complete waitlist API service with types and implementation

### Key Patterns

- **Discriminated Union Result Pattern**: The `WaitlistResult` type uses a `success` boolean discriminant to provide type-safe access to either `data` (on success) or `error` (on failure). This pattern eliminates null checks and ensures exhaustive error handling.

- **Error Categorization Pattern**: Errors are categorized by type (`validation`, `rate_limit`, `network`, `unknown`) allowing UI components to display contextually appropriate messages and take different actions based on error type.

- **Centralized Error Messages**: All user-facing error messages are defined in a single `ERROR_MESSAGES` constant, making them easy to update and ensuring consistency across the application.

### Code Examples

**Using the service in a form component:**

```typescript
import { subscribeToWaitlist, WaitlistResult } from '@/lib/api';

async function handleSubmit(email: string) {
  const result = await subscribeToWaitlist(email);

  if (result.success) {
    // TypeScript knows result.data exists here
    console.log('Subscribed:', result.data.email);
    showSuccessMessage(result.data.message);
  } else {
    // TypeScript knows result.error exists here
    switch (result.error.type) {
      case 'validation':
        showFieldError(result.error.message);
        break;
      case 'rate_limit':
        showToast(result.error.message);
        disableSubmitTemporarily();
        break;
      case 'network':
        showRetryOption(result.error.message);
        break;
      case 'unknown':
        showGenericError(result.error.message);
        break;
    }
  }
}
```

## How to Use

1. Import the `subscribeToWaitlist` function from `@/lib/api`
2. Call the function with a valid email string
3. Check the `success` property of the result
4. If `success` is `true`, access the response via `result.data`
5. If `success` is `false`, handle the error via `result.error` (check `error.type` for specific handling)

## Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| WAITLIST_API_URL | constant | `https://project-rulebook-staging.up.railway.app/api/waitlist` | Backend API endpoint (hardcoded) |

## Notes

- The email is trimmed before sending to normalize input
- JSON parse errors from the API response are handled gracefully as 'unknown' errors
- The service uses the native `fetch` API with no external dependencies
- No testing framework is currently configured in the project; manual testing is recommended
