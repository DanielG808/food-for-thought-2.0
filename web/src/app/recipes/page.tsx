import PageContentWrapper from "web/src/components/page-content-wrapper";
import RecipePageContainer from "web/src/components/recipe-page-container";
import UserRecipesContainer from "web/src/components/user-recipes-container";

type MyRecipesPageProps = {
  searchParams: { userId?: string; recipeId?: string };
};

export default function RecipesPage({ searchParams }: MyRecipesPageProps) {
  const userId = searchParams.userId;
  const recipeId = searchParams.recipeId;

  return (
    <PageContentWrapper>
      <UserRecipesContainer userId={userId} />
      <RecipePageContainer recipeId={recipeId} />
    </PageContentWrapper>
  );
}
