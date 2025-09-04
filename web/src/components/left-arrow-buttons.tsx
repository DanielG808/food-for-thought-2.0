import { ChevronsLeft, ChevronLeft } from "lucide-react";
import { pagerButton } from "../lib/utils/pagination";
import Link, { type LinkProps } from "next/link";

type LeftArrowButtonsProps = {
  href: (page: number) => LinkProps["href"];
  isFirst: boolean;
  first: number;
  prev: number;
};

export default function LeftArrowButtons({
  href,
  isFirst,
  first,
  prev,
}: LeftArrowButtonsProps) {
  return (
    <>
      {isFirst ? (
        <span className={pagerButton({ state: "disabled" })}>
          <ChevronsLeft className="size-4" />
        </span>
      ) : (
        <Link href={href(first)} className={pagerButton()}>
          <ChevronsLeft className="size-4" />
        </Link>
      )}

      {isFirst ? (
        <span className={pagerButton({ state: "disabled" })}>
          <ChevronLeft className="size-4" />
        </span>
      ) : (
        <Link href={href(prev)} className={pagerButton()}>
          <ChevronLeft className="size-4" />
        </Link>
      )}
    </>
  );
}
