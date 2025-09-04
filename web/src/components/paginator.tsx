import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "../lib/utils/cn";
import {
  buildPages,
  makePageHrefFactory,
  navTargets,
  pagerButton,
} from "../lib/utils/pagination";
import Link from "next/link";
import LeftArrowButtons from "./left-arrow-buttons";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  perPage?: number;
  basePath?: string;
  query?: Record<string, string | number | undefined>;
  className?: string;
};

export default function Paginator({
  currentPage,
  totalPages,
  perPage,
  basePath = "/",
  query = {},
  className,
}: PaginatorProps) {
  const pages = buildPages(currentPage, totalPages);
  const href = makePageHrefFactory({ basePath, query, perPage });
  const { first, prev, next, last, isFirst, isLast } = navTargets(
    currentPage,
    totalPages
  );

  return (
    <nav className={cn("flex justify-center mt-10", className)}>
      <div className="flex items-center gap-2 rounded-2xl bg-background px-2 py-2 shadow-sm">
        <LeftArrowButtons
          href={href}
          isFirst={isFirst}
          first={first}
          prev={prev}
        />

        {pages.map((p, i) =>
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
        )}

        {isLast ? (
          <span className={pagerButton({ state: "disabled" })}>
            <ChevronRight className="size-4" />
          </span>
        ) : (
          <Link href={href(next)} className={pagerButton()}>
            <ChevronRight className="size-4" />
          </Link>
        )}

        {isLast ? (
          <span className={pagerButton({ state: "disabled" })}>
            <ChevronsRight className="size-4" />
          </span>
        ) : (
          <Link href={href(last)} className={pagerButton()}>
            <ChevronsRight className="size-4" />
          </Link>
        )}
      </div>
    </nav>
  );
}
