type MyRecipesPageProps = {
  searchParams: { user?: string };
};

export default function MyRecipesPage({ searchParams }: MyRecipesPageProps) {
  const userId = searchParams.user;

  return (
    <div>
      <h1>Recipes for {userId ?? "Unknown User"}</h1>
    </div>
  );
}
