import { getRecipeById } from "../lib/api/recipes/getRecipeById";
import RecipePageHeader from "./recipe-page-header";

type RecipePageContainerProps = {
  recipeId: string | undefined;
};

export default async function RecipePageContainer({
  recipeId,
}: RecipePageContainerProps) {
  if (!recipeId) return null;

  const recipe = await getRecipeById(recipeId);

  return (
    recipe && (
      <section className="p-10">
        <RecipePageHeader
          title={recipe.title}
          description={recipe.description ?? ""}
        />
      </section>
    )
  );
}
