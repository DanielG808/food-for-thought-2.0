import { useRouter } from "next/navigation";
import { useAuth, useSignIn, useSignUp } from "@clerk/nextjs";
import { useEffect, useMemo, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  AuthFormData,
  SignInFormData,
  SignUpFormData,
  signInSchema,
  signUpSchema,
} from "../validations/authSchema";

import { ensureUserInDb } from "../api/users";
import { createDynamicZodResolver } from "../utils/createDynamicZodResolver";
import { doSignIn, doSignUpCreate, verifyEmail } from "../utils/authService";
import { applyClerkErrorBundle } from "../utils/applyErrors";
import {
  signInFieldMap,
  signUpFieldMap,
  signUpFieldMapLocal,
} from "../constants/fieldMaps";
import { resetModeSpecificFields } from "../utils/toggleAuthForm";

export function useAuthForm() {
  const [formType, setFormType] = useState<"sign-in" | "sign-up">("sign-in");
  const router = useRouter();

  const { isLoaded: authLoaded } = useAuth();

  const {
    isLoaded: signInLoaded,
    signIn,
    setActive: setActiveSignIn,
  } = useSignIn();

  const {
    isLoaded: signUpLoaded,
    signUp,
    setActive: setActiveSignUp,
  } = useSignUp();

  const [pendingVerification, setPendingVerification] = useState<{
    email?: string;
  } | null>(null);
  const [code, setCode] = useState("");

  const formTypeRef = useRef(formType);
  useEffect(() => {
    formTypeRef.current = formType;
  }, [formType]);

  const resolver = useMemo(
    () =>
      createDynamicZodResolver<AuthFormData>(() =>
        formTypeRef.current === "sign-in" ? signInSchema : signUpSchema
      ),
    []
  );

  const form = useForm<AuthFormData>({
    resolver,
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
    shouldUnregister: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    resetField,
    setError,
  } = form;

  const onSubmit: SubmitHandler<AuthFormData> = async (values) => {
    if (formType === "sign-in") {
      if (!authLoaded || !signInLoaded || !signIn) return;

      try {
        const attempt = await doSignIn(
          signIn,
          values.username,
          (values as SignInFormData).password
        );

        if (attempt.status === "complete") {
          await setActiveSignIn?.({ session: attempt.createdSessionId });
          await ensureUserInDb();
          router.push("/");
          return;
        }

        setError("username", {
          type: "manual",
          message:
            "Additional verification required. Please continue the sign-in flow.",
        });
        return;
      } catch (error: unknown) {
        applyClerkErrorBundle<SignInFormData>(
          setError,
          signInFieldMap,
          "username"
        )(error);
        return;
      }
    }

    if (!authLoaded || !signUpLoaded || !signUp) return;

    try {
      await doSignUpCreate(
        signUp,
        values.username,
        (values as SignUpFormData).email,
        (values as SignUpFormData).password
      );

      setPendingVerification({
        email: (values as SignUpFormData).email.trim(),
      });
      resetField("confirmPassword");
    } catch (error: unknown) {
      applyClerkErrorBundle<SignUpFormData>(
        setError,
        signUpFieldMap,
        "username"
      )(error);
    }
  };

  async function verifyEmailCode() {
    if (!signUpLoaded || !signUp) return;
    try {
      const attempt = await verifyEmail(signUp, code);
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
      applyClerkErrorBundle<SignUpFormData>(
        setError,
        signUpFieldMapLocal,
        "email"
      )(error);
    }
  }

  function toggleForm() {
    setFormType((prev) => (prev === "sign-in" ? "sign-up" : "sign-in"));
    resetModeSpecificFields(form);
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
