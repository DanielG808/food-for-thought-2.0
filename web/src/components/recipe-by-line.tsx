type RecipeByLineProps = {
  author: string;
};

export default function RecipeByLine({ author }: RecipeByLineProps) {
  return (
    <p className="text-foreground/65 text-sm">
      Created by{" "}
      <span className="text-foreground/90 hover:text-foreground-dark/85 hover:underline cursor-pointer duration-150">
        {author}
      </span>
    </p>
  );
}
