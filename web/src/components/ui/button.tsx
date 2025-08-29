"use client";

import { cn } from "@/lib/utils/cn";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  type = "button",
  onClick,
  children,
  className,
}: ButtonProps) {
  const baseStyles =
    "bg-foreground text-white py-1 rounded-sm cursor-pointer hover:bg-foreground-dark duration-100";

  return (
    <button type={type} onClick={onClick} className={cn(baseStyles, className)}>
      {children}
    </button>
  );
}
