"use client";

import { cn } from "../../lib/utils/cn";

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function Form({ children, className, ...props }: FormProps) {
  return (
    <form className={cn("flex flex-col", className)} {...props}>
      {children}
    </form>
  );
}
