"use client";

import { useAuth } from "@clerk/nextjs";
import NavLink from "./nav-link";

const navLinks = [
  {
    path: "/me/recipes",
    name: "My Recipes",
  },
  {
    path: "/me/account",
    name: "My Account",
  },
];

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
