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
      {/* 👇 HEADER TEXT NOW REACTS TO VERIFY STEP — CHANGED */}
      <FormHeader
        text={
          pendingVerification
            ? "Verify your email:"
            : formType === "sign-in"
            ? "Sign In:"
            : "Sign Up:"
        }
      />

      {/* 👇 CONDITIONAL VERIFY UI — ADDED */}
      {pendingVerification ? (
        <div className="border border-foreground-dark/15 w-96 bg-background-dark/85 p-4 space-y-3 rounded-md">
          <p className="text-sm opacity-80">
            We sent a 6-digit code to{" "}
            <span className="font-medium">{pendingVerification.email}</span>.
          </p>

          <input
            aria-label="Verification code"
            inputMode="numeric"
            maxLength={6}
            className="w-full rounded-md border px-3 py-2 bg-background"
            value={code}
            onChange={(e) =>
              setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
          />

          <Button
            type="button"
            onClick={verifyEmailCode}
            className="w-full px-3 py-2"
          >
            Verify & Create Account
          </Button>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={async () => {
                try {
                  await signUp?.prepareEmailAddressVerification({
                    strategy: "email_code",
                  });
                } catch {}
              }}
              className="text-xs underline opacity-80"
            >
              Resend code
            </button>

            <button
              type="button"
              onClick={() => {
                setPendingVerification(null);
                setCode("");
              }}
              className="text-xs underline opacity-80"
            >
              Change email
            </button>
          </div>
        </div>
      ) : (
        <>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-foreground-dark/15 w-96 bg-background-dark/85 p-4 space-y-1 rounded-md"
          >
            {formType === "sign-in" ? (
              <SignInForm
                register={
                  register as unknown as UseFormRegister<SignInFormData>
                }
                errors={errors as FieldErrors<SignInFormData>}
                isSubmitting={isSubmitting}
              />
            ) : (
              <SignUpForm
                register={
                  register as unknown as UseFormRegister<SignUpFormData>
                }
                errors={errors as FieldErrors<SignUpFormData>}
                isSubmitting={isSubmitting}
                watch={watch as UseFormWatch<SignUpFormData>}
              />
            )}
          </Form>

          <AuthFormToggle
            formType={formType}
            toggleForm={() => {
              // ensure verify state is cleared when toggling
              setPendingVerification(null); // 👈 ADDED
              setCode(""); // 👈 ADDED
              toggleForm();
            }}
          />
        </>
      )}
    </div>
  );
}
