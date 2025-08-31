"use client";

import NavLink from "./nav-link";

import { useAuth } from "@clerk/nextjs";
import { navLinks } from "@/lib/constants/navLinks";

export default function NavLinkList() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) return null;

  return (
    <ul className="space-x-24">
      {navLinks.map((link) => (
        <NavLink key={link.path} name={link.name} path={link.path} />
      ))}
    </ul>
  );
}
