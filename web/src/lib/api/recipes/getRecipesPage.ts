import { prisma } from "../../../../../packages/db/src/index";
import { PER_PAGE } from "../../constants/recipesPerPageLimit";
import { recipeSchema } from "../../validations/recipeSchema";

type GetRecipesPageArgs = {
  page?: number;
  perPage?: number;
  q?: string;
};

type FindManyArgs = Parameters<typeof prisma.recipe.findMany>[0];
type WhereInput = NonNullable<FindManyArgs>["where"];

export async function getRecipesPage({
  page = 1,
  perPage = PER_PAGE,
  q,
}: GetRecipesPageArgs) {
  const where: WhereInput | undefined =
    q && q.trim()
      ? {
          OR: [
            { title: { contains: q, mode: "insensitive" as const } },
            { description: { contains: q, mode: "insensitive" as const } },
          ],
        }
      : undefined;

  const totalItems = await prisma.recipe.count({ where });

  const randomSkip =
    totalItems > perPage
      ? Math.floor(Math.random() * (totalItems - perPage))
      : 0;

  const rows = await prisma.recipe.findMany({
    where,
    skip: randomSkip,
    take: perPage,
    include: { user: { select: { id: true, username: true } } },
  });

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
