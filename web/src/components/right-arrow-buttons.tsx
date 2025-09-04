import { ChevronRight, ChevronsRight } from "lucide-react";
import { pagerButton } from "../lib/utils/pagination";
import Link, { type LinkProps } from "next/link";

type RightArrowButtonsProps = {
  href: (page: number) => LinkProps["href"];
  isLast: boolean;
  last: number;
  next: number;
};

export default function RightArrowButtons({
  href,
  isLast,
  last,
  next,
}: RightArrowButtonsProps) {
  return (
    <>
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
    </>
  );
}
