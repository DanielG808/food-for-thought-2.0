export function timeAgo(input: Date | string) {
  const date = typeof input === "string" ? new Date(input) : input;
  const diffSeconds = Math.round((date.getTime() - Date.now()) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const divisions = [
    { amount: 60, name: "second" as const },
    { amount: 60, name: "minute" as const },
    { amount: 24, name: "hour" as const },
    { amount: 7, name: "day" as const },
    { amount: 4.34524, name: "week" as const },
    { amount: 12, name: "month" as const },
    { amount: Infinity, name: "year" as const },
  ];

  let duration = diffSeconds;
  for (const division of divisions) {
    if (Math.abs(duration) < division.amount) {
      return rtf.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}
