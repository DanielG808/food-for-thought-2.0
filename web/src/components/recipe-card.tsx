import { Recipe } from "@/lib/validations/recipeSchema";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="group flex flex-col border border-foreground-dark/15 py-2 px-3 rounded-md w-full h-44 cursor-pointer hover:bg-background-dark/45">
      <div>
        <h1 className="text-xl font-medium group-hover:text-foreground-dark group-hover:underline duration-100">
          {recipe.title}
        </h1>
        <p className="pt-2 text-sm group-hover:text-foreground-dark/75">
          {recipe.description}
        </p>
      </div>

      <div className="mt-auto flex justify-between text-sm text-foreground/45 pt-3 group-hover:text-foreground-dark/55">
        <p>
          Created by{" "}
          <span className="text-foreground/75 group-hover:text-foreground-dark/75">
            {recipe.user.username}
          </span>
        </p>
        <p>just now</p>
      </div>
    </article>
  );
}
