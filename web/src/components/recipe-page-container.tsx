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
      <section className="mt-5 p-10">
        <RecipePageHeader
          title={recipe.title}
          description={recipe.description ?? ""}
        />
        <RecipePageIngredients ingredients={recipe.ingredients} />
        <div className="my-10">
          <h3 className="text-lg">Cooking steps:</h3>
          <ul className="m-4 list-decimal text-foreground/85">
            {recipe.body.steps.map((step, i) => (
              <li key={`${step}-${i}`}>{step}</li>
            ))}
          </ul>
        </div>
      </section>
    )
  );
}
