import { Availability } from "@/lib/hooks/useUsernameCheck";
import { FieldError } from "react-hook-form";

type UsernameCheckerProps = {
  debouncedUsername: string;
  checking: boolean;
  availability: Availability | null;
  error: FieldError | undefined;
};

export default function UsernameChecker({
  debouncedUsername,
  checking,
  availability,
  error,
}: UsernameCheckerProps) {
  const statusClass = checking
    ? "text-foreground/60"
    : availability?.available === true
    ? "text-green-600"
    : availability?.available === false
    ? "text-red-600"
    : "";

  const canShowMessage = !!debouncedUsername && !error;

  return (
    canShowMessage && (
      <p className={`pb-2 text-sm mt-1 ${statusClass}`}>
        {checking
          ? "Checking availability..."
          : availability?.available === true
          ? `${debouncedUsername} is available!`
          : availability?.available === false
          ? `${debouncedUsername} is already taken.`
          : null}
      </p>
    )
  );
}
