"use client";

import { Shuffle } from "lucide-react";
import Button from "./ui/button";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.refresh()} className="gap-x-1">
      <Shuffle className="size-5" />
      <span>Shuffle recipes</span>
    </Button>
  );
}
