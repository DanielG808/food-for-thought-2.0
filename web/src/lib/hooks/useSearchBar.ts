import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "./useDebounce";

export function useSearchBar(defaultValue: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialQ = searchParams.get("q") ?? defaultValue;
  const [value, setValue] = useState(initialQ);

  const debounced = useDebounce(value, 300);

  const didMount = useRef(false);
  const prevQRef = useRef(initialQ);

  useEffect(() => {
    const urlQ = searchParams.get("q") ?? "";
    if (urlQ !== value) setValue(urlQ);
    // eslint-disable-next-line
  }, [searchParams]);

  useEffect(() => {
    const prevQ = prevQRef.current;
    const nextQ = debounced.trim();

    if (!didMount.current) {
      didMount.current = true;
      prevQRef.current = nextQ;
      return;
    }

    if (nextQ === prevQ) return;

    const next = new URLSearchParams(searchParams.toString());

    if (nextQ) next.set("q", nextQ);
    else next.delete("q");

    next.delete("page");

    const qs = next.toString();
    const url = qs ? `${pathname}?${qs}` : pathname;

    const current = searchParams.toString();
    if (qs !== current) {
      router.replace(url, { scroll: false });
    }

    prevQRef.current = nextQ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced, pathname, router, searchParams]);

  return { value, setValue };
}
