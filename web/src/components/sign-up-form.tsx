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

export default function SignUpForm({
  register,
  errors,
  isSubmitting,
  watch,
}: SignUpFormProps) {
  const username = watch("username")?.trim() ?? "";
  const debouncedUsername = useDebounce(username, 400);

  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);

  const checkUsername = useCallback(
    async (u: string, signal?: AbortSignal): Promise<boolean | null> => {
      try {
        const res = await fetch(
          `${AUTH_ENDPOINTS.USERNAME_CHECK}?username=${encodeURIComponent(u)}`,
          { signal }
        );
        if (!res.ok) return null;
        const data = await res.json();
        return typeof data === "boolean" ? data : null;
      } catch (e) {
        if (e instanceof Error)
          console.error("username check error:", e.message);
        else console.error("Unexpected error:", e);
        return null;
      }
    },
    []
  );

  useEffect(() => {
    if (!debouncedUsername || errors.username) {
      setAvailable(null);
      setChecking(false);
      return;
    }

    let cancelled = false;

    (async () => {
      setChecking(true);
      try {
        const ok = await checkUsername(debouncedUsername);
        if (!cancelled) setAvailable(ok);
      } finally {
        if (!cancelled) setChecking(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [debouncedUsername, errors.username, checkUsername]);

  return (
    <>
      <InputOrTextarea
        name="username"
        register={register}
        inputProps={{ autoComplete: "username" }}
        error={errors.username?.message}
      />

      {debouncedUsername && !errors.username && (
        <p>
          {checking
            ? "Checking availability..."
            : available
            ? `${debouncedUsername} is available!`
            : `${debouncedUsername} is already taken.`}
        </p>
      )}

      <Button type="submit" className="mt-4">
        {isSubmitting ? "Confirming..." : "Confirm"}
      </Button>
    </>
  );
}
