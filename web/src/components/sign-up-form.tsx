// components
import Button from "./ui/button";
import InputOrTextarea from "./ui/input-or-textarea";
import UsernameChecker from "./username-checker";

// hooks
import { useState } from "react";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { useUsernameCheck } from "@/lib/hooks/useUsernameCheck";

// types
import { AuthFormData } from "@/lib/validations/authSchema";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

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

  const [usernameConfirmed, setUsernameConfirmed] = useState(false);

  function handleConfirmClick(e: React.FormEvent) {
    e.preventDefault();
    if (availability?.available) {
      setUsernameConfirmed(true);
    }
  }

  return (
    <>
      <InputOrTextarea
        name="username"
        register={register}
        inputProps={{ autoComplete: "username", disabled: usernameConfirmed }}
        error={errors.username?.message}
      />
      <UsernameChecker
        debouncedUsername={debouncedUsername}
        checking={checking}
        availability={availability}
        error={errors.username}
      />

      {usernameConfirmed && (
        <InputOrTextarea
          name="email"
          register={register}
          inputProps={{ autoComplete: "email" }}
          error={errors.email?.message}
        />
        <InputOrTextarea
          name="password"
          register={register}
          inputProps={{ autoComplete: "password" }}
          error={errors.password?.message}
        />
        <InputOrTextarea
          name="confirmPassword"
          register={register}
          inputProps={{ autoComplete: "confirmPassword" }}
          error={errors.confirmPassword?.message}
        />
      )}

      <Button
        type="submit"
        onClick={!usernameConfirmed ? handleConfirmClick : undefined}
        className="mt-4"
      >
        {isSubmitting
          ? usernameConfirmed
            ? "Submitting..."
            : "Confirming..."
          : usernameConfirmed
          ? "Submit"
          : "Confirm"}
      </Button>
    </>
  );
}
