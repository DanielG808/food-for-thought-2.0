"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SignInLink() {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  if (isSignedIn) return null;
  if (pathname === "/sign-in") return null;

  return (
    <Link href="/sign-in" className="pr-2 hover:underline duration-200">
      Sign In
    </Link>
  );
}
