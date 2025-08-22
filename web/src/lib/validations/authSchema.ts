import z from "zod";

export const signInSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .max(100, "Username must be under 100 characters."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must be at least 8 characters."),
});

export type SignInFormData = z.infer<typeof signInSchema>;
