// web/src/lib/auth/fieldMaps.ts

import type { FieldMap } from "../utils/mapClerkErrors";

// Maps Clerk sign-in fields → your RHF field names
export const signInFieldMap: FieldMap<"username" | "password"> = {
  identifier: ["username"],
  username: ["username"],
  password: ["password"],
};

// Maps Clerk sign-up fields → your RHF field names
export const signUpFieldMap: FieldMap<
  "username" | "password" | "email" | "confirmPassword"
> = {
  username: ["username"],
  // Cover common Clerk keys for email
  email: ["email"],
  email_address: ["email"],
  emailAddress: ["email"],
  password: ["password"],
  // If your mapper can route confirmPassword, keep this; else it’s harmless.
  confirmPassword: ["confirmPassword"],
};

// ✅ FIX: DO NOT use `as const` here; it makes arrays readonly and breaks the FieldMap type.
// Minimal map for the email verification step
export const signUpFieldMapLocal: FieldMap<
  "username" | "password" | "email" | "confirmPassword"
> = {
  email: ["email"], // mutable array, not readonly
};
