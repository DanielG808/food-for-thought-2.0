import { Recipe } from "@/lib/validations/recipeSchema";
import RecipeHeader from "./recipe-header";
import RecipeCardFooter from "./recipe-card-footer";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="group flex flex-col border border-foreground-dark/15 py-2 px-3 rounded-md w-full h-44 cursor-pointer hover:bg-background-dark/45 hover:shadow-sm duration-150">
      <RecipeHeader title={recipe.title} description={recipe.description} />

      <RecipeCardFooter
        author={recipe.user.username}
        createdAt={recipe.createdAt}
      />
    </article>
  );
}
