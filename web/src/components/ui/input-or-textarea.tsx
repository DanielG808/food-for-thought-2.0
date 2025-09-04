import * as React from "react";
import { cn } from "../../lib/utils/cn";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { formatLabel } from "../../lib/utils/formatLabel";

type BaseVisualProps = {
  className?: string;
  /** Override the auto label (derived from id/name) */
  label?: string;
  /** Hide label for compact/search use-cases */
  showLabel?: boolean;
  /** Provide a stable id when you want to link your own <label> or aria-describedby */
  id?: string;
  /** Render error text and apply error ring */
  error?: string;
};

/** RHF mode (pass these to opt-in to RHF) */
type RHFProps<TFieldValues extends FieldValues> = {
  register: UseFormRegister<TFieldValues>;
  name: Path<TFieldValues>;
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
};

/** Standalone mode (no RHF required) */
type StandaloneProps = {
  /** Optional name (used for id/label if provided) */
  name?: string;
  /** Controlled/Uncontrolled props */
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Convenience callback for just the string value */
  onValueChange?: (value: string) => void;
};

type InputVariantProps = {
  type?: "input";
  inputType?: React.HTMLInputTypeAttribute;
  inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "name" | "type" | "value" | "defaultValue" | "onChange"
  >;
};

type TextareaVariantProps = {
  type: "textarea";
  textareaProps?: Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "name" | "value" | "defaultValue" | "onChange"
  >;
};

type InputOrTextareaProps<TFieldValues extends FieldValues> = BaseVisualProps &
  (RHFProps<TFieldValues> | StandaloneProps) &
  (InputVariantProps | TextareaVariantProps);

export default function InputOrTextarea<TFieldValues extends FieldValues>(
  props: InputOrTextareaProps<TFieldValues>
) {
  const {
    className,
    label,
    showLabel = true,
    error,
    id: idProp,
    // union rest:
    ...rest
  } = props as InputOrTextareaProps<TFieldValues>;

  const isRHF =
    "register" in rest && "name" in rest && typeof rest.register === "function";

  // Compute id/name for a11y
  const autoId = React.useId();
  const id =
    idProp ??
    (isRHF
      ? String(rest.name)
      : ("name" in rest && rest.name) || `io-${autoId}`);

  const computedLabel = label ?? (id ? formatLabel(id) : undefined);
  const describedBy = error ? `${id}-error` : undefined;

  const base =
    "w-auto bg-background text-black/75 p-1 ring-1 ring-foreground-dark/15 focus:ring-2 focus:ring-foreground-dark/25 focus:outline-0 rounded-md";
  const errorRing = error ? "ring-red-500 focus:ring-red-500" : "";

  // Build common props including RHF vs standalone handlers
  const buildCommon = (
    el: "input" | "textarea"
  ):
    | (React.InputHTMLAttributes<HTMLInputElement> &
        React.TextareaHTMLAttributes<HTMLTextAreaElement>)
    | {} => {
    if (isRHF) {
      const { register, name, rules } = rest as RHFProps<TFieldValues>;
      return {
        id,
        "aria-invalid": !!error,
        "aria-describedby": describedBy,
        spellCheck: false,
        ...register(name, rules),
      };
    } else {
      const { name, value, defaultValue, onChange, onValueChange } =
        rest as StandaloneProps;
      const handleChange: React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
      > = (e) => {
        onChange?.(e);
        onValueChange?.(e.currentTarget.value);
      };
      return {
        id,
        name,
        value,
        defaultValue,
        onChange: handleChange,
        "aria-invalid": !!error,
        "aria-describedby": describedBy,
        spellCheck: false,
      };
    }
  };

  if ("type" in rest && rest.type === "textarea") {
    const { textareaProps } = rest as TextareaVariantProps;
    return (
      <div className="flex flex-col space-y-1">
        {showLabel && computedLabel && (
          <label htmlFor={id}>{computedLabel}:</label>
        )}

        <textarea
          className={cn(base, errorRing, className)}
          {...buildCommon("textarea")}
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

  const { inputType = "text", inputProps } = rest as InputVariantProps;
  return (
    <div className="flex flex-col space-y-1">
      {showLabel && computedLabel && (
        <label htmlFor={id}>{computedLabel}:</label>
      )}

      <input
        type={inputType}
        className={cn(base, errorRing, className)}
        {...buildCommon("input")}
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
