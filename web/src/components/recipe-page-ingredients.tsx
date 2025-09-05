import { Ingredient } from "../lib/validations/recipeSchema";

type RecipePageIngredientsProps = {
  ingredients: Ingredient[];
};

export default function RecipePageIngredients({
  ingredients,
}: RecipePageIngredientsProps) {
  return (
    <div className="mt-12">
      <h3 className="text-lg">Ingredients:</h3>
      {ingredients.length ? (
        <ul className="mt-3 text-foreground/85 list-disc pl-6 columns-1 sm:columns-2 gap-8">
          {ingredients.map((ing, i) => (
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
  );
}
