"use client";

import { RefreshCcw } from "lucide-react";
import Button from "./ui/button";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.refresh()} className="flex space-x-1">
      <RefreshCcw className="size-5" />
      <span>Refresh</span>
    </Button>
  );
}
