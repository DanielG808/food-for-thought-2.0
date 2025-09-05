import PageContentWrapper from "../components/page-content-wrapper";
import Paginator from "../components/paginator";
import RecipeCardContainer from "../components/recipe-card-container";
import SearchBar from "../components/search-bar";
import { getRecipesPage } from "../lib/api/recipes/getRecipesPage";
import { PER_PAGE } from "../lib/constants/recipesPerPageLimit";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; perPage?: string; q?: string }>;
}) {
  const sp = await searchParams;

  const page = Math.max(1, Number(sp?.page ?? 1));
  const perPage = Number(sp?.perPage ?? PER_PAGE);
  const q = sp?.q ?? "";

  const { items, totalPages } = await getRecipesPage({ page, perPage, q });

  const showsNoMatches = q.trim() !== "" && items.length === 0;

  return (
    <PageContentWrapper className="flex flex-col items-center w-4/5 mx-auto my-10">
      <SearchBar />
      <RecipeCardContainer recipes={items} showsNoMatches={showsNoMatches} />
      <Paginator currentPage={page} totalPages={totalPages} />
    </PageContentWrapper>
  );
}
