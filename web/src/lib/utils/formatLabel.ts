export function formatLabel(name: string): string {
  const labelKey = name
    .split(".")
    .pop()!
    .replace(/\[\d+\]/g, "");

  const spaced = labelKey
    .replace(/[_-]+/g, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .trim();

  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}
