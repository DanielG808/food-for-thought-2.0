"use client";

// components
import FormHeader from "./ui/form-header";
import EmailVerificationForm from "./email-verification-form";
import SignInSignUpForm from "./sign-in-sign-up-form";

// hooks
import { useAuthForm } from "../lib/hooks/useAuthForm";

export default function AuthForm() {
  const {
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
  } = useAuthForm();

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
