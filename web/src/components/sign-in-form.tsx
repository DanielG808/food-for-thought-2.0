import React from "react";
import Button from "./ui/button";
import InputOrTextarea from "./ui/input-or-textarea";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { AuthFormData, SignInFormData } from "@/lib/validations/authSchema";

type SignInFormProps = {
  register: UseFormRegister<AuthFormData>;
  errors: FieldErrors<AuthFormData>;
  isSubmitting: boolean;
};

export default function SignInForm({
  register,
  errors,
  isSubmitting,
}: SignInFormProps) {
  const passwordError = (errors as FieldErrors<SignInFormData>).password
    ?.message;

  return (
    <>
      <InputOrTextarea
        name="username"
        register={register}
        inputProps={{ autoComplete: "username" }}
        error={errors.username?.message}
      />
      <InputOrTextarea
        name="password"
        register={register}
        inputType="password"
        inputProps={{ autoComplete: "current-password" }}
        error={passwordError}
      />
      <Button type="submit" className="mt-4">
        {isSubmitting ? "Signing in..." : "Sign In"}
      </Button>
    </>
  );
}
