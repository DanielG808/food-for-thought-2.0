import { getRecipeById } from "../lib/api/recipes/getRecipeById";

type RecipePageContainerProps = {
  recipeId: string | undefined;
};

export default async function RecipePageContainer({
  recipeId,
}: RecipePageContainerProps) {
  if (!recipeId) return null;

  const recipe = await getRecipeById(recipeId);

  return recipe && <h1>{recipe.title}</h1>;
}
