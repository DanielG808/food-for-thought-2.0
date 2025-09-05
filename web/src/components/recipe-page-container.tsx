import { getRecipeById } from "../lib/api/recipes/getRecipeById";
import Button from "./ui/button";

type RecipePageContainerProps = {
  recipeId: string | undefined;
};

export default async function RecipePageContainer({
  recipeId,
}: RecipePageContainerProps) {
  if (!recipeId) return null;

  const recipe = await getRecipeById(recipeId);

  return (
    recipe && (
      <section className="p-10">
        <header className="flex justify-between">
          <div className="flex flex-col w-[600px] space-y-4">
            <h1 className="text-3xl">{recipe.title}</h1>
            <h2 className="text-xl text-foreground/50">{recipe.description}</h2>
          </div>
          <div className="flex items-end">
            <Button className="h-10">Share</Button>
          </div>
        </header>
      </section>
    )
  );
}
