import { prisma } from "@fft/db";
import { recipeSchema } from "../validations/recipeSchema";

export async function getAllRecipes() {
  const recipes = await prisma.recipe.findMany({
    orderBy: { createdAt: "desc" },
  });

  return recipes.map((r) =>
    recipeSchema.parse({
      ...r,
      description: r.description ?? undefined,
      ingredients: r.ingredients ?? [],
      body: r.body ?? { steps: [] },
    })
  );
}
