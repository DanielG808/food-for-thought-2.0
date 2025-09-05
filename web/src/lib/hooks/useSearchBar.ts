import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useTransition, useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export function useSearchBar(defaultValue: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const qInUrl = searchParams.get("q") ?? "";
    if (qInUrl !== value) setValue(qInUrl);
    // eslint-disable-next-line
  }, [searchParams]);

  const debounced = useDebounce(value, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debounced.trim()) params.set("q", debounced);
    else params.delete("q");

    params.delete("page");

    const nextUrl = params.size ? `${pathname}?${params}` : pathname;
    const currentUrl = searchParams.size
      ? `${pathname}?${searchParams}`
      : pathname;

    if (nextUrl === currentUrl) return;

    startTransition(() => {
      router.replace(nextUrl, { scroll: false });
    });
  }, [debounced, pathname, router, searchParams, startTransition]);

  return { value, setValue };
}
