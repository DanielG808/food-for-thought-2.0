import { prisma } from "@fft/db";
import { recipeSchema } from "../../validations/recipeSchema";

export async function getAllRecipes() {
  const recipes = await prisma.recipe.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: {
          id: true,
          username: true,
        },
      },
    },
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

export async function getRecipeById(id: string) {
  return prisma.recipe.findUnique({
    where: { id },
    include: { user: { select: { id: true, username: true } } },
  });
}
