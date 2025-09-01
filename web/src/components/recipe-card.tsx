import { Recipe } from "@/lib/validations/recipeSchema";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="flex flex-col border border-foreground-dark/15 py-2 px-3 rounded-md w-full h-44">
      <div>
        <h1 className="text-xl font-medium cursor-pointer hover:text-foreground-dark hover:underline duration-100">
          {recipe.title}
        </h1>
        <p className="text-sm">{recipe.description}</p>
      </div>

      {/* sticky footer */}
      <div className="mt-auto flex justify-end text-sm pt-3">
        <p>Created by</p>
      </div>
    </article>
  );
}
