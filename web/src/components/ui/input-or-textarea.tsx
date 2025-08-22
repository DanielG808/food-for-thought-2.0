// components/ui/input-or-textarea.tsx
import * as React from "react";
import { cn } from "@/lib/utils/cn";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type BaseProps<TFieldValues extends FieldValues> = {
  register: UseFormRegister<TFieldValues>;
  name: Path<TFieldValues>;
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  className?: string;
  error?: string;
};

type InputVariantProps = {
  type?: "input";
  inputType?: React.HTMLInputTypeAttribute;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

type TextareaVariantProps = {
  type: "textarea";
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

type InputOrTextareaProps<TFieldValues extends FieldValues> =
  BaseProps<TFieldValues> & (InputVariantProps | TextareaVariantProps);

export default function InputOrTextarea<TFieldValues extends FieldValues>({
  register,
  name,
  rules,
  className,
  error,
  ...variant
}: InputOrTextareaProps<TFieldValues>) {
  const base =
    "w-auto bg-background text-black/75 p-1 ring-1 ring-foreground-dark/15 focus:ring-2 focus:ring-foreground-dark/25 focus:outline-0 rounded-md";
  const errorRing = error ? "ring-red-500 focus:ring-red-500" : "";
  const id = String(name);
  const computedLabel = id.charAt(0).toUpperCase() + id.slice(1);
  const describedBy = error ? `${id}-error` : undefined;

  if (variant.type === "textarea") {
    const { textareaProps } = variant;
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={id}>{computedLabel}:</label>
        <textarea
          id={id}
          className={cn(base, errorRing, className)}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...register(name, rules)}
          {...textareaProps}
        />
        {error && (
          <span id={describedBy} className="text-sm text-red-600">
            {error}
          </span>
        )}
      </div>
    );
  }

  const { inputType = "text", inputProps } = variant;
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id}>{computedLabel}:</label>
      <input
        id={id}
        type={inputType}
        className={cn(base, errorRing, className)}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...register(name, rules)}
        {...inputProps}
      />
      {error && (
        <span id={describedBy} className="text-sm text-red-600">
          {error}
        </span>
      )}
    </div>
  );
}
