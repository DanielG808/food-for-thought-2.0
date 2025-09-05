type RecipePageContainerProps = {
  recipeId: string | undefined;
};

export default function RecipePageContainer({
  recipeId,
}: RecipePageContainerProps) {
  return recipeId && <h1>Recipes number {recipeId ?? "Unknown recipe"}</h1>;
}
