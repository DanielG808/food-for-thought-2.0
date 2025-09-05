type MyRecipesPageProps = {
  searchParams: { userId?: string; recipeId?: string };
};

export default function RecipesPage({ searchParams }: MyRecipesPageProps) {
  const userId = searchParams.userId;
  const recipeId = searchParams.recipeId;

  return (
    <div>
      {userId && (
        <h1>Recipes for {userId ? `User ${userId}` : "Unknown User"}</h1>
      )}

      {recipeId && <h1>Recipes number {recipeId ?? "Unknown recipe"}</h1>}
    </div>
  );
}
