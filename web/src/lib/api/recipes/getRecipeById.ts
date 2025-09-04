import { prisma } from "@fft/db";

export async function getRecipeById(id: string) {
  return prisma.recipe.findUnique({
    where: { id },
    include: { user: { select: { id: true, username: true } } },
  });
}
