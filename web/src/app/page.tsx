import PageContentWrapper from "../components/page-content-wrapper";
import Paginator from "../components/paginator";
import RecipeCardContainer from "../components/recipe-card-container";
import { getRecipesPage } from "../lib/api/recipes/recipes";
import { PER_PAGE } from "../lib/constants/recipesPerPageLimit";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; perPage?: string };
}) {
  const page = Math.max(1, Number(searchParams?.page ?? 1));
  const perPage = Number(searchParams?.perPage ?? PER_PAGE);

  const { items, totalPages } = await getRecipesPage({ page, perPage });

  return (
    <PageContentWrapper className="flex flex-col items-center w-4/5 mx-auto my-10">
      <RecipeCardContainer recipes={items} />
      <Paginator currentPage={page} totalPages={totalPages} />
    </PageContentWrapper>
  );
}
