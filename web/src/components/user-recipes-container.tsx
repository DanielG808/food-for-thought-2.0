type UserRecipesContainerProps = {
  userId: string | undefined;
};

export default function UserRecipesContainer({
  userId,
}: UserRecipesContainerProps) {
  return (
    userId && <h1>Recipes for {userId ? `User ${userId}` : "Unknown User"}</h1>
  );
}
