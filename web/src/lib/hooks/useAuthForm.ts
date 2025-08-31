import { useRouter } from "next/navigation";
import { useAuthFormToggle } from "./useAuthFormToggle";
import { useAuth, useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import { Path, SubmitHandler, useForm } from "react-hook-form";
import {
  AuthFormData,
  signInSchema,
  SignUpFormData,
  signUpSchema,
} from "../validations/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  applyClerkErrorsToForm,
  ClerkAPIError,
  extractClerkErrors,
  mapClerkErrors,
  signUpFieldMap,
} from "../utils/mapClerkErrors";
import { ensureUserInDb } from "../api/users";

export function useAuthForm() {
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

  return {
    formType,
    toggleForm,
    register,
    watch,
    handleSubmit,
    onSubmit,
    isSubmitting,
    errors,
    code,
    setCode,
    pendingVerification,
    setPendingVerification,
    verifyEmailCode,
    signUp,
  };
}
