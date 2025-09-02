import { useEffect, useRef, useState } from "react";
import { timeAgo } from "../utils/timeAgo";

type Options = {
  initialText: string;
  updateEveryMs?: number;
};

export function useRelativeTime(iso: string, options: Options) {
  const { initialText, updateEveryMs = 60_000 } = options;

  const [label, setLabel] = useState(initialText);
  const timer = useRef<number | null>(null);
  const lastIso = useRef(iso);

  useEffect(() => {
    const update = () => {
      const next = timeAgo(iso);
      if (typeof next === "string" && next !== label) {
        setLabel(next);
      }
    };

    update();

    const start = () => {
      if (timer.current != null) return;
      timer.current = window.setInterval(update, updateEveryMs);
    };
    const stop = () => {
      if (timer.current != null) {
        clearInterval(timer.current);
        timer.current = null;
      }
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else {
        update();
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [iso, updateEveryMs]);

  useEffect(() => {
    if (lastIso.current !== iso) {
      lastIso.current = iso;
      const next = timeAgo(iso);
      if (typeof next === "string") setLabel(next);
      else setLabel(initialText);
    }
  }, [iso, initialText]);

  return label;
}
