import { MoreHorizontal } from "lucide-react";
import { pagerButton, PageToken } from "../lib/utils/pagination";
import Link, { LinkProps } from "next/link";

type PagesButtonsProps = {
  href: (page: number) => LinkProps["href"];
  pages: ReadonlyArray<PageToken>;
  currentPage: number;
};

export default function PagesButtons({
  href,
  pages,
  currentPage,
}: PagesButtonsProps) {
  return pages.map((p, i) =>
    p === "..." ? (
      <span
        key={`dots-${i}`}
        className="inline-flex items-center justify-center h-9 min-w-9 text-foreground/50"
      >
        <MoreHorizontal className="size-4" />
      </span>
    ) : (
      <Link
        key={`page-${p}-${i}`}
        href={href(p)}
        className={pagerButton({
          state: p === currentPage ? "active" : "default",
        })}
      >
        {p}
      </Link>
    )
  );
}
