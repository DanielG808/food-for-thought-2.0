"use client";

import InputOrTextarea from "./ui/input-or-textarea";

export default function SearchBar() {
  return (
    <div className="mb-10 border p-4 w-1/2 border border-foreground-dark/15 bg-background-dark/45 rounded-md">
      <InputOrTextarea label="Search all recipes" />
    </div>
  );
}
