import { AuthFormData } from "@/lib/validations/authSchema";
import Button from "./ui/button";
import InputOrTextarea from "./ui/input-or-textarea";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { useCallback, useEffect, useState } from "react";
import { AUTH_ENDPOINTS } from "@/lib/constants/endpoints";

type SignUpFormProps = {
  register: UseFormRegister<AuthFormData>;
  errors: FieldErrors<AuthFormData>;
  isSubmitting: boolean;
  watch: UseFormWatch<AuthFormData>;
};

type Availability =
  | { available: true }
  | { available: false; reason: "taken" }
  | { available: null; reason: "invalid" | "error" };

function isAvailabilityResponse(d: unknown): d is Availability {
  if (typeof d !== "object" || d === null) return false;
  const o = d as { available?: unknown; reason?: unknown };
  if (o.available === true) return true;
  if (o.available === false) return o.reason === "taken";
  if (o.available === null)
    return o.reason === "invalid" || o.reason === "error";
  return false;
}

export default function SignUpForm({
  register,
  errors,
  isSubmitting,
  watch,
}: SignUpFormProps) {
  const username = watch("username")?.trim() ?? "";
  const debouncedUsername = useDebounce(username, 400);

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
    if (!debouncedUsername || errors.username) {
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
  }, [debouncedUsername, errors.username, checkUsername]);

  const statusClass = checking
    ? "text-foreground/60"
    : availability?.available === true
    ? "text-green-600"
    : availability?.available === false
    ? "text-red-600"
    : "";

  const canShowMessage = !!debouncedUsername && !errors.username;

  return (
    <>
      <InputOrTextarea
        name="username"
        register={register}
        inputProps={{ autoComplete: "username" }}
        error={errors.username?.message}
      />

      {canShowMessage && (
        <p className={`text-sm mt-1 ${statusClass}`}>
          {checking
            ? "Checking availability..."
            : availability?.available === true
            ? `${debouncedUsername} is available!`
            : availability?.available === false
            ? `${debouncedUsername} is already taken.`
            : null}
        </p>
      )}

      <Button type="submit" className="mt-4">
        {isSubmitting ? "Confirming..." : "Confirm"}
      </Button>
    </>
  );
}
