import { prisma } from "@fft/db";
import { NextResponse } from "next/server";
import { recipeSchema } from "../../validations/recipeSchema";

export async function getRecipeById(id: string) {
  const recipe = await prisma.recipe.findUnique({
    where: { id },
    include: { user: { select: { id: true, username: true } } },
  });

  if (!recipe) throw new NextResponse("Recipe not found.", { status: 404 });

  return recipeSchema.parse({
    ...recipe,
    description: recipe.description ?? undefined,
    ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients : [],
    body: recipe.body ?? { steps: [] },
  });
}
