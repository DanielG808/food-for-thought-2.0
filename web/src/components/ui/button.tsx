"use client";

import { cn } from "@/lib/utils/cn";
import { ButtonHTMLAttributes } from "react";

type ButtonVariants = "default" | "text";

type ButtonProps = {
  variant?: ButtonVariants;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  variant = "default",
  type = "button",
  disabled = false,
  onClick,
  children,
  className,
}: ButtonProps) {
  const baseStyles =
    "py-1 px-3 rounded-sm cursor-pointer duration-100 inline-flex items-center justify-center";

  const variants: Record<ButtonVariants, string> = {
    default: "bg-foreground text-white hover:bg-foreground-dark",
    text: "bg-inherit text-foreground hover:underline hover:bg-inherit px-0",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
