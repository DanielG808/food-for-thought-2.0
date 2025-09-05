"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import InputOrTextarea from "./ui/input-or-textarea";
import { useEffect, useState, useTransition } from "react";
import { useDebounce } from "../lib/hooks/useDebounce";
import { cn } from "../lib/utils/cn";

type SearchBarProps = {
  defaultValue?: string;
  className?: string;
};

export default function SearchBar({
  defaultValue = "",
  className,
}: SearchBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const qInUrl = searchParams.get("q") ?? "";
    if (qInUrl !== value) setValue(qInUrl);
    // eslint-disable-next-line
  }, [searchParams]);

  const debounced = useDebounce(value, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debounced.trim()) params.set("q", debounced);
    else params.delete("q");

    params.delete("page");

    const nextUrl = params.size ? `${pathname}?${params}` : pathname;
    const currentUrl = searchParams.size
      ? `${pathname}?${searchParams}`
      : pathname;

    if (nextUrl === currentUrl) return;

    startTransition(() => {
      router.replace(nextUrl, { scroll: false });
    });
  }, [debounced, pathname, router, searchParams, startTransition]);

  return (
    <div
      className={cn(
        "mb-10 p-4 w-3/5  border border-foreground-dark/15 bg-background-dark/45 rounded-md",
        className
      )}
    >
      <InputOrTextarea
        label="Search all recipes"
        layout="horizontal"
        value={value}
        onValueChange={setValue}
        className="w-full"
      />
    </div>
  );
}
