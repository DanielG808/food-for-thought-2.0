"use client";

import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: ButtonProps) {
  const baseStyles =
    "bg-foreground text-white py-1 rounded-sm cursor-pointer hover:bg-foreground-dark duration-100";

  return <button className={cn(baseStyles, className)}>{children}</button>;
}
