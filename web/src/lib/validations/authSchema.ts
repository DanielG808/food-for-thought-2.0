import z from "zod";

const username = z
  .string()
  .min(1, "Username is required.")
  .max(24, "Username must be under 24 characters.");

const usernameCheck = z
  .string()
  .min(3, "Username must be at least 3 characters.")
  .max(24, "Username must be 24 characters or less.")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username must consist of only letters, numbers, and underscores."
  );

const email = z.email("Email is required.");

const password = z
  .string()
  .min(1, "Password is required.")
  .min(8, "Password must be at least 8 characters.");

export const signInSchema = z.object({
  username,
  password,
});

export const usernameCheckSchema = z.object({
  username: usernameCheck,
});

export const signUpSchema = z
  .object({
    username,
    email,
    password,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match.",
  });

export type SignInFormData = z.infer<typeof signInSchema>;
export type UsernameCheckData = z.infer<typeof usernameCheckSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;

export type AuthFormData = SignInFormData | UsernameCheckData | SignUpFormData;
