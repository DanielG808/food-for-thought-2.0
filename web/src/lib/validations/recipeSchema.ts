import z from "zod";

export const ingredientSchema = z.object({
  name: z.string().min(1, "Ingredient name is required."),
  amount: z.string().min(1, "Ingredient amount is required."),
  unit: z.string().min(1, "Measurement unit is required."),
  notes: z.string().optional(),
});

export const recipeSchema = z.object({
  id: z.cuid(),
  title: z.string().min(1, "Title is required."),
  description: z.string().optional().nullable(),
  ingredients: z
    .array(ingredientSchema)
    .min(1, "At least one ingredient is required."),
  body: z.object({
    steps: z.array(z.string().min(1, "Step cannot be empty.")),
  }),
  prepTime: z.number().int().nonnegative(),
  cookTime: z.number().int().nonnegative(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.object({
    id: z.string(),
    username: z.string(),
  }),
});

export const recipeCreateSchema = recipeSchema.omit({
  id: true,
  userId: true,
  createdAt: true,
  updatedAt: true,
});

export const recipeWithAuthorSchema = recipeSchema.extend({
  user: z.object({
    id: z.string(),
    username: z.string(),
  }),
});

export type Recipe = z.infer<typeof recipeSchema>;
export type RecipeFormData = z.infer<typeof recipeCreateSchema>;
