"use client";

import { useAuth, useClerk } from "@clerk/nextjs";
import Button from "./ui/button";
export default function LogoutButton() {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();

  if (!isSignedIn) return null;

  return (
    <Button onClick={() => signOut({ redirectUrl: "/" })} variant="text">
      Logout
    </Button>
  );
}
