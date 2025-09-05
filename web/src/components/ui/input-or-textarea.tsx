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
  label?: string;
  showLabel?: boolean;
  id?: string;
  error?: string;

  layout?: "vertical" | "horizontal";
  labelClassName?: string;
  controlClassName?: string;
};

type RHFProps<TFieldValues extends FieldValues> = {
  register: UseFormRegister<TFieldValues>;
  name: Path<TFieldValues>;
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
};

type StandaloneProps = {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
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

function isRHFProps<T extends FieldValues>(val: unknown): val is RHFProps<T> {
  if (!val || typeof val !== "object") return false;
  const maybe = val as Partial<RHFProps<T>>;
  return typeof maybe.register === "function" && typeof maybe.name === "string";
}

export default function InputOrTextarea<TFieldValues extends FieldValues>(
  props: InputOrTextareaProps<TFieldValues>
) {
  const {
    className,
    label,
    showLabel = true,
    error,
    id: idProp,
    layout = "vertical",
    labelClassName,
    controlClassName,
    ...rest
  } = props as InputOrTextareaProps<TFieldValues>;

  const isRHF = isRHFProps<TFieldValues>(rest);

  const autoId = React.useId();
  const id =
    idProp ??
    (isRHF
      ? String((rest as RHFProps<TFieldValues>).name)
      : ("name" in rest && (rest as StandaloneProps).name) || `io-${autoId}`);

  const computedLabel = label ?? (id ? formatLabel(id) : undefined);
  const describedBy = error ? `${id}-error` : undefined;

  const base =
    "w-auto bg-background text-black/75 p-1 ring-1 ring-foreground-dark/15 focus:ring-2 focus:ring-foreground-dark/25 focus:outline-0 rounded-md";
  const errorRing = error ? "ring-red-500 focus:ring-red-500" : "";

  // Overloads so TS knows the return type based on the arg
  function buildCommon(
    _el: "input"
  ): React.InputHTMLAttributes<HTMLInputElement>;
  function buildCommon(
    _el: "textarea"
  ): React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  function buildCommon(_el: "input" | "textarea") {
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
  }

  const rowClasses = cn(
    "flex gap-2",
    layout === "vertical" ? "flex-col" : "flex-row items-center"
  );

  if ("type" in rest && rest.type === "textarea") {
    const { textareaProps } = rest as TextareaVariantProps;
    return (
      <div className="flex flex-col gap-1">
        <div className={rowClasses}>
          {showLabel && computedLabel && (
            <label
              htmlFor={id}
              className={cn(
                layout === "horizontal" ? "min-w-28 shrink-0" : "",
                labelClassName
              )}
            >
              {computedLabel}:
            </label>
          )}

          <textarea
            className={cn(base, errorRing, controlClassName, className)}
            {...buildCommon("textarea")}
            {...textareaProps}
          />
        </div>

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
    <div className="flex flex-col gap-1">
      <div className={rowClasses}>
        {showLabel && computedLabel && (
          <label
            htmlFor={id}
            className={cn(
              layout === "horizontal" ? "min-w-28 shrink-0" : "",
              labelClassName
            )}
          >
            {computedLabel}:
          </label>
        )}

        <input
          type={inputType}
          className={cn(base, errorRing, controlClassName, className)}
          {...buildCommon("input")}
          {...inputProps}
        />
      </div>

      {error && (
        <span id={describedBy} className="text-sm text-red-600">
          {error}
        </span>
      )}
    </div>
  );
}
