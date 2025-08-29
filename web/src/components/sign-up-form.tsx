// components
import Button from "./ui/button";
import InputOrTextarea from "./ui/input-or-textarea";

// hooks
import { useDebounce } from "@/lib/hooks/useDebounce";
import { useUsernameCheck } from "@/lib/hooks/useUsernameCheck";

// types
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { AuthFormData } from "@/lib/validations/authSchema";
import UsernameChecker from "./username-checker";

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
        <UsernameChecker
          debouncedUsername={debouncedUsername}
          checking={checking}
          availability={availability}
          error={errors.username}
        />
      )}

      <Button type="submit" className="mt-4">
        {isSubmitting ? "Confirming..." : "Confirm"}
      </Button>
    </>
  );
}
