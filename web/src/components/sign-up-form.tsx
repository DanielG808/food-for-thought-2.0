import { AuthFormData } from "@/lib/validations/authSchema";
import Button from "./ui/button";
import InputOrTextarea from "./ui/input-or-textarea";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type SignUpFormProps = {
  register: UseFormRegister<AuthFormData>;
  errors: FieldErrors<AuthFormData>;
  isSubmitting: boolean;
};

export default function SignUpForm({
  register,
  errors,
  isSubmitting,
}: SignUpFormProps) {
  return (
    <>
      <InputOrTextarea
        name="username"
        register={register}
        inputProps={{ autoComplete: "username" }}
        error={errors.username?.message}
      />
      <Button type="submit" className="mt-4">
        {isSubmitting ? "Checking..." : "Confirm"}
      </Button>
    </>
  );
}
