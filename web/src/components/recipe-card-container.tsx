import { Recipe } from "@/lib/validations/recipeSchema";

type RecipeCardContainerProps = {
  recipes: Recipe[];
};

export default function RecipeCardContainer({
  recipes,
}: RecipeCardContainerProps) {
  return <div>RecipeCardContainer</div>;
}
