"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import InputOrTextarea from "./ui/input-or-textarea";
import { useEffect, useState, useTransition } from "react";
import { useDebounce } from "../lib/hooks/useDebounce";
import { cn } from "../lib/utils/cn";
import { useSearchBar } from "../lib/hooks/useSearchBar";

type SearchBarProps = {
  defaultValue?: string;
  className?: string;
};

export default function SearchBar({
  defaultValue = "",
  className,
}: SearchBarProps) {
  const { value, setValue } = useSearchBar(defaultValue);

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
