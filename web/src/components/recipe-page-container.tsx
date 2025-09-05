import { getRecipeById } from "../lib/api/recipes/getRecipeById";
import RecipePageHeader from "./recipe-page-header";
import RecipePageIngredients from "./recipe-page-ingredients";

type RecipePageContainerProps = {
  recipeId: string | undefined;
};

export default async function RecipePageContainer({
  recipeId,
}: RecipePageContainerProps) {
  if (!recipeId) return null;

  const recipe = await getRecipeById(recipeId);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    recipe && (
      <section className="p-10">
        <RecipePageHeader
          title={recipe.title}
          description={recipe.description ?? ""}
        />
        <RecipePageIngredients ingredients={recipe.ingredients} />
      </section>
    )
  );
}
