import { timeAgo } from "@/lib/utils/timeAgo";

type RecipeCardFooterProps = {
  author: string;
  createdAt: Date;
};

export default function RecipeCardFooter({
  author,
  createdAt,
}: RecipeCardFooterProps) {
  return (
    <footer className="mt-auto flex justify-between text-sm text-foreground/45 pt-3 group-hover:text-foreground-dark/55 duration-150">
      <p>
        Created by{" "}
        <span className="text-foreground/75 group-hover:text-foreground-dark/75 hover:underline duration-150">
          {author}
        </span>
      </p>
      <p>{timeAgo(createdAt)}</p>
    </footer>
  );
}
