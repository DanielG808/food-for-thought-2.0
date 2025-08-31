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
      <p className="text-sm">
        We sent a 6-digit code to{" "}
        <span className="font-semibold">{pendingVerification.email}</span>.
      </p>

      <input
        aria-label="Verification code"
        inputMode="numeric"
        maxLength={6}
        className="text-black/85 w-full rounded-md border border-foreground px-3 py-2 bg-background focus:ring-1 focus:ring-foreground focus:outline-0"
        value={code}
        onChange={(e) =>
          onCodeChange(e.target.value.replace(/\D/g, "").slice(0, 6))
        }
      />

      <Button
        disabled={code.length !== 6 || isVerifying}
        onClick={onVerify}
        className="w-full px-3 py-2"
      >
        {isVerifying ? "Verifying..." : "Verify & Create Account"}
      </Button>
      <div className="flex justify-between">
        <Button
          variant="text"
          disabled={!!isResending}
          onClick={onResend}
          className="text-sm"
        >
          Resend code
        </Button>

        <Button variant="text" onClick={onChangeEmail} className="text-sm">
          Change email
        </Button>
      </div>
    </div>
  );
}
