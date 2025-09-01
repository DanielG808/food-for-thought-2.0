import PageContentWrapper from "@/components/page-content-wrapper";
import RecipeCardContainer from "@/components/recipe-card-container";
import { getAllRecipes } from "@/lib/api/recipes/recipes";

export default async function Home() {
  const recipes = await getAllRecipes();

  console.log(recipes);

  return (
    <PageContentWrapper className="w-4/5 mx-auto my-10">
      <RecipeCardContainer recipes={recipes} />
    </PageContentWrapper>
  );
}
