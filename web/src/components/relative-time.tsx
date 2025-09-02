"use client";

import { useRelativeTime } from "../lib/hooks/useRelativeTime";

type RelativeTimeProps = {
  iso: string;
  initialText: string;
  updateEveryMs?: number;
  titleText?: string;
};

export default function RelativeTime({
  iso,
  initialText,
  updateEveryMs = 60_000,
  titleText,
}: RelativeTimeProps) {
  const label = useRelativeTime(iso, { initialText, updateEveryMs });

  return (
    <time dateTime={iso} title={titleText ?? initialText}>
      {label}
    </time>
  );
}
