import React from "react";
import Button from "./ui/button";
import { cn } from "@/lib/utils/cn";

type EmailVerificationFormProps = {
  pendingVerification: { email?: string } | null;
  code: string;
  onCodeChange: (value: string) => void;
  onVerify: () => void | Promise<void>;
  onResend: () => void | Promise<void>;
  onChangeEmail: () => void;
  className?: string;
  isVerifying?: boolean;
  isResending?: boolean;
};

export default function EmailVerificationForm({
  pendingVerification,
  code,
  onCodeChange,
  onVerify,
  onResend,
  onChangeEmail,
  isVerifying,
  isResending,
  className,
}: EmailVerificationFormProps) {
  if (!pendingVerification) return null;

  return (
    <div
      className={cn(
        "border border-foreground-dark/15 w-96 bg-background-dark/85 p-4 space-y-3 rounded-md",
        className
      )}
    >
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
          onCodeChange(e.target.value.replace(/\D/g, "").slice(0, 6))
        }
      />

      <Button
        type="button"
        onClick={onVerify}
        disabled={code.length !== 6 || isVerifying}
        className="w-full px-3 py-2"
      >
        {isVerifying ? "Verifying..." : "Verify & Create Account"}
      </Button>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onResend}
          disabled={!!isResending}
          className="text-xs underline opacity-80"
        >
          Resend code
        </button>

        <button
          type="button"
          onClick={onChangeEmail}
          className="text-xs underline opacity-80"
        >
          Change email
        </button>
      </div>
    </div>
  );
}
