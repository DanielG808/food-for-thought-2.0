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

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    recipe && (
      <section className="p-10">
        <RecipePageHeader
          title={recipe.title}
          description={recipe.description ?? ""}
        />
        <div className="mt-10">
          <h3>Ingredients:</h3>
          {recipe.ingredients.length ? (
            <ul className="mt-1 text-foreground/85 list-disc pl-6 columns-1 sm:columns-2 gap-8">
              {recipe.ingredients.map((ing, i) => (
                <li key={`${ing.name}-${i}`}>
                  {[ing.amount, ing.unit, ing.name].filter(Boolean).join(" ")}
                  {ing.notes ? ` (${ing.notes})` : ""}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-foreground/60">No ingredients.</p>
          )}
        </div>
      </section>
    )
  );
}
