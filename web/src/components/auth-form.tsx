"use client";

// components
import Form from "./ui/form";
import FormHeader from "./ui/form-header";
import SignUpForm from "./sign-up-form";
import SignInForm from "./sign-in-form";
import AuthFormToggle from "./auth-form-toggle";

// hooks
import { useAuthFormToggle } from "@/lib/hooks/useAuthFormToggle";
import {
  FieldErrors,
  Path,
  SubmitHandler,
  useForm,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// types
import {
  AuthFormData,
  SignInFormData,
  signInSchema,
  SignUpFormData,
  signUpSchema,
} from "@/lib/validations/authSchema";
import { useAuth, useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  applyClerkErrorsToForm,
  ClerkAPIError,
  extractClerkErrors,
  mapClerkErrors,
  signUpFieldMap,
} from "@/lib/utils/mapClerkErrors";
import { ensureUserInDb } from "@/lib/api/users";
import Button from "./ui/button";
import EmailVerificationForm from "./email-verification-form";
import SignInSignUpForm from "./sign-in-sign-up-form";

export default function AuthForm() {
  const { formType, toggleForm } = useAuthFormToggle();
  const router = useRouter();

  const { isLoaded: authLoaded } = useAuth();
  const {
    isLoaded: signUpLoaded,
    signUp,
    setActive: setActiveSignUp,
  } = useSignUp();

  const [pendingVerification, setPendingVerification] = useState<{
    email?: string;
  } | null>(null);
  const [code, setCode] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    resetField,
    setError,
  } = useForm<AuthFormData>({
    resolver: zodResolver(formType === "sign-in" ? signInSchema : signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<AuthFormData> = async (
    values: AuthFormData
  ) => {
    if (formType === "sign-in") {
      console.log("sign-in: ", {
        username: values.username,
        password: "password" in values ? values.password : undefined,
      });
      return;
    }

    if (!authLoaded || !signUpLoaded) return;

    try {
      await signUp.create({
        username: values.username.trim(),
        emailAddress: (values as SignUpFormData).email.trim(),
        password: (values as SignUpFormData).password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification({
        email: (values as SignUpFormData).email.trim(),
      });
      resetField("confirmPassword");
    } catch (error: unknown) {
      const clerkErrors: ClerkAPIError[] = extractClerkErrors(error);
      const mapped = mapClerkErrors(clerkErrors, signUpFieldMap, "username");
      applyClerkErrorsToForm<SignUpFormData, Path<SignUpFormData>>(
        setError,
        mapped as Partial<Record<Path<SignUpFormData>, string>>
      );
    }
  };

  async function verifyEmailCode() {
    if (!signUpLoaded) return;
    try {
      const attempt = await signUp.attemptEmailAddressVerification({ code });
      if (attempt.status === "complete") {
        await setActiveSignUp?.({ session: attempt.createdSessionId });

        await ensureUserInDb();

        router.push("/");
        return;
      }
      setError("email", {
        type: "manual",
        message: "Verification not complete. Try again.",
      });
    } catch (error: unknown) {
      const clerkErrors: ClerkAPIError[] = extractClerkErrors(error);
      const mapped = mapClerkErrors(clerkErrors, { email: ["email"] }, "email");
      applyClerkErrorsToForm<SignUpFormData, Path<SignUpFormData>>(
        setError,
        mapped as Partial<Record<Path<SignUpFormData>, string>>
      );
    }
  }

  return (
    <div className="flex flex-col justify-center space-y-2">
      <FormHeader
        text={
          pendingVerification
            ? "Verify your email:"
            : formType === "sign-in"
            ? "Sign In:"
            : "Sign Up:"
        }
      />
      <EmailVerificationForm
        pendingVerification={pendingVerification}
        code={code}
        onCodeChange={setCode}
        onVerify={verifyEmailCode}
        onResend={async () => {
          try {
            await signUp?.prepareEmailAddressVerification({
              strategy: "email_code",
            });
          } catch {}
        }}
        onChangeEmail={() => {
          setPendingVerification(null);
          setCode("");
        }}
      />
      <SignInSignUpForm
        register={register}
        watch={watch}
        pendingVerification={pendingVerification}
        formType={formType}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        errors={errors}
        setCode={setCode}
        setPendingVerification={setPendingVerification}
        toggleForm={toggleForm}
      />
    </div>
  );
}
