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
import PagesButtons from "./pages-buttons";

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

        <PagesButtons href={href} pages={pages} currentPage={currentPage} />

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
