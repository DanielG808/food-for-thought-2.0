"use client";

import { cn } from "@/lib/utils/cn";

type FormProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Form({ children, className }: FormProps) {
  return <form className={cn("flex flex-col", className)}>{children}</form>;
}
