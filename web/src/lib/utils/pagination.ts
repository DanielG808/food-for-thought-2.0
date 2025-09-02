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
