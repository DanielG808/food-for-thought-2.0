import { FieldValues, Path, UseFormSetError } from "react-hook-form";

export type ClerkAPIError = {
  code?: string;
  message: string;
  longMessage?: string;
  meta?: Record<string, unknown>;
};

export type ClerkErrorPayload = { errors?: ClerkAPIError[] };

export type FieldMap<TFields extends string> = {
  [clerkCodeFragment: string]: TFields[];
};

export function mapClerkErrors<TFields extends string>(
  errors: ClerkAPIError[] | undefined,
  fieldMap: FieldMap<TFields>,
  fallbackField: TFields
): Partial<Record<TFields, string>> {
  const out: Partial<Record<TFields, string>> = {};
  for (const e of errors ?? []) {
    const code = (e.code ?? "").toLowerCase();

    let matched = false;
    if (code && fieldMap[code]) {
      for (const f of fieldMap[code]) out[f] = e.message;
      matched = true;
    }

    if (!matched && code) {
      for (const fragment in fieldMap) {
        if (!fragment) continue;
        if (code.includes(fragment.toLowerCase())) {
          for (const f of fieldMap[fragment]) out[f] = e.message;
          matched = true;
        }
      }
    }

    if (!matched) out[fallbackField] = e.message;
  }
  return out;
}

function isClerkPayload(e: unknown): e is ClerkErrorPayload {
  if (typeof e !== "object" || e === null) return false;
  if (!("errors" in e)) return false;

  const { errors } = e as { errors: unknown };
  return Array.isArray(errors);
}

export function extractClerkErrors(e: unknown): ClerkAPIError[] {
  if (isClerkPayload(e) && Array.isArray(e.errors)) return e.errors;
  if (e instanceof Error) {
    return [{ message: e.message }];
  }
  return [];
}

export function applyClerkErrorsToForm<
  TForm extends FieldValues,
  K extends Path<TForm>
>(setError: UseFormSetError<TForm>, mapped: Partial<Record<K, string>>) {
  (Object.entries(mapped) as [K, string | undefined][]).forEach(
    ([field, message]) => {
      if (!message) return;
      setError(field, { type: "manual", message });
    }
  );
}

export const signInFieldMap = {
  identifier: ["username", "email"],
  username: ["username"],
  email: ["username", "email"],
  password: ["password"],
} as const satisfies FieldMap<"username" | "email" | "password">;

export const signUpFieldMap = {
  identifier: ["username", "email"],
  username: ["username"],
  email: ["email"],
  password: ["password"],
} as const satisfies FieldMap<
  "username" | "email" | "password" | "confirmPassword"
>;
