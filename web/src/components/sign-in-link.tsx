"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SignInLink() {
  const pathname = usePathname();

  if (pathname === "/sign-in") return null;

  return (
    <Link href="/sign-in" className="pr-2 hover:underline duration-200">
      Sign In
    </Link>
  );
}
