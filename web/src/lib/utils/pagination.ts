import { cva, type VariantProps } from "class-variance-authority";
import { type UrlObject } from "url";

export type PageToken = number | "...";

export function buildPages(
  currentPage: number,
  totalPages: number,
  { edgeCount = 1, aroundCount = 1 } = {}
): PageToken[] {
  const clamp = (n: number, min: number, max: number) =>
    Math.min(Math.max(n, min), max);
  const page = clamp(currentPage, 1, Math.max(1, totalPages));

  if (totalPages <= edgeCount * 2 + aroundCount * 2 + 3)
    return Array.from({ length: totalPages }, (_, i) => i + 1);

  const tokens: PageToken[] = [];
  const leftEdge = Array.from({ length: edgeCount }, (_, i) => i + 1);
  const rightEdge = Array.from(
    { length: edgeCount },
    (_, i) => totalPages - edgeCount + 1 + i
  );

  const midStart = Math.max(edgeCount + 1, page - aroundCount);
  const midEnd = Math.min(totalPages - edgeCount, page + aroundCount);

  tokens.push(...leftEdge);
  if (midStart > leftEdge[leftEdge.length - 1] + 1) tokens.push("...");
  for (let p = midStart; p <= midEnd; p++) tokens.push(p);
  if (midEnd < rightEdge[0] - 1) tokens.push("...");
  tokens.push(...rightEdge);

  return tokens;
}

export function navTargets(currentPage: number, totalPages: number) {
  return {
    first: 1,
    prev: Math.max(1, currentPage - 1),
    next: Math.min(totalPages, currentPage + 1),
    last: totalPages,
    isFirst: currentPage === 1,
    isLast: currentPage === totalPages,
  };
}

export function makePageHrefFactory(opts: {
  basePath?: string;
  query?: Record<string, string | number | undefined>;
  perPage?: number;
}): (page: number) => UrlObject {
  const { basePath = "/", query = {}, perPage } = opts;
  return (page: number): UrlObject => {
    const q: Record<string, string | number | undefined> = {};
    for (const [k, v] of Object.entries({ ...query, page, perPage })) {
      if (v !== undefined) q[k] = v as any;
    }
    return { pathname: basePath, query: q };
  };
}

export const pagerButton = cva(
  "inline-flex items-center justify-center h-9 min-w-9 px-3 rounded-full border shadow-sm border-foreground-dark/15 bg-background/60 text-foreground/70 transition-colors hover:bg-background-dark/45 hover:text-foreground-dark/90",
  {
    variants: {
      state: {
        default: "",
        active:
          "border-foreground/30 bg-foreground/10 text-foreground-dark font-medium hover:bg-foreground/15",
        disabled:
          "opacity-40 cursor-not-allowed pointer-events-none hover:bg-inherit hover:text-inherit",
      },
    },
    defaultVariants: { state: "default" },
  }
);
export type PagerButtonVariants = VariantProps<typeof pagerButton>;
