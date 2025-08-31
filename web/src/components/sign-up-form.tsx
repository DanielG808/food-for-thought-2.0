// components
import Button from "./ui/button";
import InputOrTextarea from "./ui/input-or-textarea";
import UsernameChecker from "./username-checker";

// hooks
import { useDebounce } from "@/lib/hooks/useDebounce";
import { useUsernameCheck } from "@/lib/hooks/useUsernameCheck";

// types
import { SignUpFormData } from "@/lib/validations/authSchema";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

type SignUpFormProps = {
  register: UseFormRegister<SignUpFormData>;
  errors: FieldErrors<SignUpFormData>;
  isSubmitting: boolean;
  watch: UseFormWatch<SignUpFormData>;
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

  return (
    <>
      <div className="flex flex-col">
        <InputOrTextarea
          name="username"
          register={register}
          inputProps={{ autoComplete: "username" }}
          error={errors.username?.message}
        />
        <UsernameChecker
          debouncedUsername={debouncedUsername}
          checking={checking}
          availability={availability}
          error={errors.username}
        />
      </div>

      <>
        <InputOrTextarea
          name="email"
          register={register}
          inputProps={{ autoComplete: "email" }}
          error={errors.email?.message}
        />
        <InputOrTextarea
          name="password"
          register={register}
          inputType="password"
          inputProps={{ autoComplete: "new-password" }}
          error={errors.password?.message}
        />
        <InputOrTextarea
          name="confirmPassword"
          register={register}
          inputType="password"
          inputProps={{ autoComplete: "new-password" }}
          error={errors.confirmPassword?.message}
        />
      </>

      <div id="clerk-captcha" data-cl-theme="auto" data-cl-size="normal" />

      <Button type="submit" className="mt-4">
        {isSubmitting ? "Creating..." : "Create account"}
      </Button>
    </>
  );
}
