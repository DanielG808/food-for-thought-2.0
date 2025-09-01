import { Recipe } from "@/lib/validations/recipeSchema";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return <div>{recipe.title}</div>;
}
