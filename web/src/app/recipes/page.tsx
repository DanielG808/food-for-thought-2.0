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
    <PageContentWrapper className="flex flex-col justify-center w-3/5 border-l border-r border-black/5 mx-auto shadow-[inset_8px_0_8px_-8px_rgba(0,0,0,0.3),inset_-8px_0_8px_-8px_rgba(0,0,0,0.3)]">
      <UserRecipesContainer userId={userId} />
      <RecipePageContainer recipeId={recipeId} />
    </PageContentWrapper>
  );
}
