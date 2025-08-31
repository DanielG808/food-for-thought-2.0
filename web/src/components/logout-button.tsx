"use client";

import { useAuth, useClerk } from "@clerk/nextjs";
import Button from "./ui/button";
export default function LogoutButton() {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();

  if (!isSignedIn) return null;

  return (
    <Button
      variant="text"
      onClick={() => signOut({ redirectUrl: "/" })}
      className="pr-4"
    >
      Logout
    </Button>
  );
}
