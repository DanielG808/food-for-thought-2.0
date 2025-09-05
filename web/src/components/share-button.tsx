"use client";

import { Share } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import Button from "./ui/button";

export default function ShareButton() {
  const pathname = usePathname();
  const sp = useSearchParams();

  async function handleClick() {
    const url = `${window.location.origin}${pathname}?${sp}`;
    await navigator.clipboard.writeText(url);
  }
  return (
    <div className="flex items-end">
      <Button onClick={handleClick} className="h-10">
        <Share className="size-5" />
      </Button>
    </div>
  );
}
