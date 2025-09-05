// web/src/lib/api/recipes/getRecipesPage.ts
import { prisma } from "../../../../../packages/db/src/index";
import { PER_PAGE } from "../../constants/recipesPerPageLimit";
import { recipeSchema } from "../../validations/recipeSchema";

type GetRecipesPageArgs = {
  page?: number;
  perPage?: number;
  q?: string;
};

// 🔑 Pull the exact arg types off your *actual* client:
type FindManyArgs = Parameters<typeof prisma.recipe.findMany>[0];
type WhereInput = NonNullable<FindManyArgs>["where"];

export async function getRecipesPage({
  page = 1,
  perPage = PER_PAGE,
  q,
}: GetRecipesPageArgs) {
  const skip = (page - 1) * perPage;

  // ✅ Type derives from your client; no cross-package model imports
  const where: WhereInput | undefined =
    q && q.trim()
      ? {
          OR: [
            { title: { contains: q, mode: "insensitive" as const } },
            { description: { contains: q, mode: "insensitive" as const } },
          ],
        }
      : undefined;

  const baseArgs: FindManyArgs = {
    where,
    skip,
    take: perPage,
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    include: { user: { select: { id: true, username: true } } },
  };

  const [rows, totalItems] = await prisma.$transaction([
    prisma.recipe.findMany(baseArgs),
    prisma.recipe.count({ where }),
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
