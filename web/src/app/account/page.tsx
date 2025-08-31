type MyAccountPageProps = {
  searchParams: { user?: string };
};

export default function MyAccountPage({ searchParams }: MyAccountPageProps) {
  const userId = searchParams.user;

  return (
    <div>
      <h1>Account page for {userId ?? "Unknown User"}</h1>
    </div>
  );
}
