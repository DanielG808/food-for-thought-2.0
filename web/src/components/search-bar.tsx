"use client";

import InputOrTextarea from "./ui/input-or-textarea";

import { cn } from "../lib/utils/cn";
import { useSearchBar } from "../lib/hooks/useSearchBar";
import RefreshButton from "./refresh-button";

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
        "flex mb-10 p-4 space-x-2 border border-foreground-dark/15 bg-background-dark/45 rounded-md",
        className
      )}
    >
      <InputOrTextarea
        label="Search all recipes"
        layout="horizontal"
        value={value}
        onValueChange={setValue}
        className="w-96"
      />
      <RefreshButton />
    </div>
  );
}
