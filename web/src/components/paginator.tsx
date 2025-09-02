import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "../lib/utils/cn";
import Button from "./ui/button";
import { buildPages } from "../lib/utils/pagination";

type PaginatorProps = {
  currentPage: number;
  totalPages: number;
  className?: string;
};

export default function Paginator({
  currentPage,
  totalPages,
  className,
}: PaginatorProps) {
  const pages = buildPages(currentPage, totalPages);

  const baseBtn =
    "inline-flex items-center justify-center h-9 min-w-9 px-3 rounded-full border shadow-sm border-foreground-dark/15 bg-background/60 text-foreground/70 hover:bg-background-dark/45 hover:text-foreground-dark/90 transition-colors";

  const activeBtn =
    "border-foreground/30 bg-foreground/10 text-foreground-dark font-medium hover:bg-foreground/15";

  const disabled =
    "opacity-40 cursor-not-allowed hover:bg-inherit hover:text-inherit";

  return (
    <nav className={cn("flex justify-center mt-10", className)}>
      <div className="flex items-center gap-2 rounded-2xl bg-background px-2 py-2 shadow-sm">
        <Button
          disabled={currentPage === 1}
          className={cn(baseBtn, currentPage === 1 && disabled)}
        >
          <ChevronsLeft className="size-4" />
        </Button>
        <Button
          disabled={currentPage === 1}
          className={cn(baseBtn, currentPage === 1 && disabled)}
        >
          <ChevronLeft className="size-4" />
        </Button>

        {pages.map((p, i) =>
          p === "..." ? (
            <span
              key={`dots-${i}`}
              className="inline-flex items-center justify-center h-9 min-w-9 text-foreground/50"
            >
              <MoreHorizontal className="size-4" />
            </span>
          ) : (
            <Button
              key={`page-${p}-${i}`}
              className={cn(baseBtn, p === currentPage && activeBtn)}
            >
              {p}
            </Button>
          )
        )}

        <Button
          disabled={currentPage === totalPages}
          className={cn(baseBtn, currentPage === totalPages && disabled)}
        >
          <ChevronRight className="size-4" />
        </Button>
        <Button
          disabled={currentPage === totalPages}
          className={cn(baseBtn, currentPage === totalPages && disabled)}
        >
          <ChevronsRight className="size-4" />
        </Button>
      </div>
    </nav>
  );
}
