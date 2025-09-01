import { prisma } from "@fft/db";

export async function getAllRecipes() {
  return prisma.recipe.findMany({
    orderBy: { createdAt: "desc" },
  });
}
