import type { UseFormReturn } from "react-hook-form";
import type { AuthFormData } from "../validations/authSchema";

export function resetModeSpecificFields(form: UseFormReturn<AuthFormData>) {
  form.clearErrors();
  form.resetField("email", { defaultValue: "" });
  form.resetField("confirmPassword", { defaultValue: "" });
}
