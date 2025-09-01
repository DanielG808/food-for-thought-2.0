import { Recipe } from "@/lib/validations/recipeSchema";
import RecipeCard from "./recipe-card";

type RecipeCardContainerProps = {
  recipes: Recipe[];
};

export default function RecipeCardContainer({
  recipes,
}: RecipeCardContainerProps) {
  return recipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
}
