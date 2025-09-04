import { prisma } from "@fft/db";
import { recipeSchema } from "../../validations/recipeSchema";
import { PER_PAGE } from "../../constants/recipesPerPageLimit";

type GetRecipesPageArgs = {
  page?: number;
  perPage?: number;
};

export async function getRecipesPage({
  page = 1,
  perPage = PER_PAGE,
}: GetRecipesPageArgs) {
  const skip = (page - 1) * perPage;

  const [rows, totalItems] = await prisma.$transaction([
    prisma.recipe.findMany({
      skip,
      take: perPage,
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      include: {
        user: { select: { id: true, username: true } },
      },
    }),
    prisma.recipe.count(),
  ]);

  const items = rows.map((r) =>
    recipeSchema.parse({
      ...r,
      description: r.description ?? undefined,
      ingredients: r.ingredients ?? [],
      body: r.body ?? { steps: [] },
    })
  );

  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));

  return {
    items,
    page,
    perPage,
    totalItems,
    totalPages,
    hasPrevPage: page > 1,
    hasNextPage: page < totalPages,
  };
}

export async function getRecipeById(id: string) {
  return prisma.recipe.findUnique({
    where: { id },
    include: { user: { select: { id: true, username: true } } },
  });
}
