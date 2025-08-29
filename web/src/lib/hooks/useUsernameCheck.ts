import { useState, useCallback, useEffect } from "react";
import { AUTH_ENDPOINTS } from "../constants/endpoints";
import { FieldError } from "react-hook-form";

export type Availability =
  | { available: true }
  | { available: false; reason: "taken" }
  | { available: null; reason: "invalid" | "error" };

export function useUsernameCheck(
  debouncedUsername?: string,
  error?: FieldError
) {
  const [checking, setChecking] = useState(false);
  const [availability, setAvailability] = useState<Availability | null>(null);

  const checkUsername = useCallback(
    async (u: string): Promise<Availability> => {
      try {
        const res = await fetch(
          `${AUTH_ENDPOINTS.USERNAME_CHECK}?username=${encodeURIComponent(u)}`,
          { cache: "no-store" }
        );

        const data: unknown = await res.json();

        if (isAvailabilityResponse(data)) return data;
        if (typeof data === "boolean") {
          return data
            ? { available: true }
            : { available: false, reason: "taken" };
        }

        if (res.status === 422) return { available: null, reason: "invalid" };
        if (!res.ok) return { available: null, reason: "error" };
        return { available: null, reason: "error" };
      } catch (e) {
        if (e instanceof Error)
          console.error("username check error:", e.message);
        return { available: null, reason: "error" };
      }
    },
    []
  );

  useEffect(() => {
    if (!debouncedUsername || error) {
      setAvailability(null);
      setChecking(false);
      return;
    }

    let cancelled = false;

    (async () => {
      setChecking(true);
      try {
        const res = await checkUsername(debouncedUsername);
        if (!cancelled) setAvailability(res);
      } finally {
        if (!cancelled) setChecking(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [debouncedUsername, error, checkUsername]);

  return { checking, availability };
}

function isAvailabilityResponse(d: unknown): d is Availability {
  if (typeof d !== "object" || d === null) return false;
  const o = d as { available?: unknown; reason?: unknown };
  if (o.available === true) return true;
  if (o.available === false) return o.reason === "taken";
  if (o.available === null)
    return o.reason === "invalid" || o.reason === "error";
  return false;
}
