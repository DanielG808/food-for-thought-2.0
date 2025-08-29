// components
import Button from "./ui/button";
import InputOrTextarea from "./ui/input-or-textarea";

// hooks
import { useDebounce } from "@/lib/hooks/useDebounce";
import { useUsernameCheck } from "@/lib/hooks/useUsernameCheck";

// types
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { AuthFormData } from "@/lib/validations/authSchema";

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

  const { checking, availability } = useUsernameCheck(
    debouncedUsername,
    errors.username
  );

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
