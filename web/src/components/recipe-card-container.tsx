import { Recipe } from "@/lib/validations/recipeSchema";
import RecipeCard from "./recipe-card";

type RecipeCardContainerProps = {
  recipes: Recipe[];
};

export default function RecipeCardContainer({
  recipes,
}: RecipeCardContainerProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
}
