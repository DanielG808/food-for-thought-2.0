type RecipeHeaderProps = {
  title: string;
  description?: string | null;
};

export default function RecipeHeader({
  title,
  description,
}: RecipeHeaderProps) {
  return (
    <header>
      <h1 className="text-xl font-medium group-hover:text-foreground-dark group-hover:underline duration-150">
        {title}
      </h1>
      <p className="pt-2 text-sm group-hover:text-foreground-dark/75 duration-150">
        {description}
      </p>
    </header>
  );
}
