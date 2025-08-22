import { useState } from "react";

export function useAuthFormToggle() {
  const [formType, setFormType] = useState<"sign-in" | "sign-up">("sign-in");

  function toggleForm() {
    setFormType((prev) => (prev === "sign-in" ? "sign-up" : "sign-in"));
  }

  return { formType, toggleForm };
}
