export function formatUtcDateTime(iso: string, locale = "en-US") {
  const dt = new Date(iso);

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  }).format(dt);
}
