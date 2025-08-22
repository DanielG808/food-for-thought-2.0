"use client";

// components
import Form from "./ui/form";
import FormHeader from "./ui/form-header";
import SignUpForm from "./sign-up-form";
import SignInForm from "./sign-in-form";
import AuthFormToggle from "./auth-form-toggle";

// hooks
import { useAuthFormToggle } from "@/lib/hooks/useAuthFormToggle";
import { useForm } from "react-hook-form";

// types
import { SignInFormData, signInSchema } from "@/lib/validations/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AuthForm() {
  const { formType, toggleForm } = useAuthFormToggle();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: { username: "", password: "" },
    mode: "onSubmit",
  });

  async function onSubmit(values: SignInFormData) {
    console.log("sign-in: ", values);
  }

  return (
    <div className="flex flex-col justify-center space-y-2">
      <FormHeader text={formType === "sign-in" ? "Sign In:" : "Sign Up:"} />
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-foreground-dark/15 w-96 bg-background-dark/85 p-4 space-y-1 rounded-md"
      >
        {formType === "sign-in" ? (
          <SignInForm
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />
        ) : (
          <SignUpForm />
        )}
      </Form>
      <AuthFormToggle formType={formType} toggleForm={toggleForm} />
    </div>
  );
}
