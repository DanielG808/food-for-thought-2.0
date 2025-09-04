// components

import LeftArrowButtons from "./left-arrow-buttons";
import PagesButtons from "./pages-buttons";
import RightArrowButtons from "./right-arrow-buttons";

// helpers
import { cn } from "../lib/utils/cn";
import {
  buildPages,
  makePageHrefFactory,
  navTargets,
} from "../lib/utils/pagination";

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

        <RightArrowButtons
          href={href}
          isLast={isLast}
          last={last}
          next={next}
        />
      </div>
    </nav>
  );
}
