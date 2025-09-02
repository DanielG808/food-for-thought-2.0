import PageContentWrapper from "../components/page-content-wrapper";
import Paginator from "../components/paginator";
import RecipeCardContainer from "../components/recipe-card-container";
import { getAllRecipes } from "../lib/api/recipes/recipes";

export default async function Home() {
  const recipes = await getAllRecipes();

  console.log(recipes);

  return (
    <PageContentWrapper className="flex flex-col items-center w-4/5 mx-auto my-10">
      <RecipeCardContainer recipes={recipes} />
      <Paginator currentPage={1} totalPages={12} />
    </PageContentWrapper>
  );
}
