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
import { zodResolver } from "@hookform/resolvers/zod";

// types
import {
  AuthFormData,
  signInSchema,
  usernameCheckSchema,
} from "@/lib/validations/authSchema";

export default function AuthForm() {
  const { formType, toggleForm } = useAuthFormToggle();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormData>({
    resolver: zodResolver(
      formType === "sign-in" ? signInSchema : usernameCheckSchema
    ),
    defaultValues: { username: "", password: "" },
    mode: "onSubmit",
  });

  async function onSubmit(values: AuthFormData) {
    if (formType === "sign-in") {
      console.log("sign-in: ", {
        username: values.username,
        password: "password" in values ? values.password : undefined,
      });
    } else {
      console.log("sign-up username:", values.username);
    }
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
          <SignUpForm
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
          />
        )}
      </Form>
      <AuthFormToggle formType={formType} toggleForm={toggleForm} />
    </div>
  );
}
