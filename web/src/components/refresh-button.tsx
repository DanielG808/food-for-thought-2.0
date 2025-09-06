import { RefreshCcw } from "lucide-react";
import Button from "./ui/button";

export default function RefreshButton() {
  return (
    <Button className="flex space-x-1">
      <RefreshCcw className="size-5" />
      <span>Refresh</span>
    </Button>
  );
}
