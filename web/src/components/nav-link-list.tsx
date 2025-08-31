import NavLink from "./nav-link";

const navLinks = [
  {
    path: "/me/recipes",
    name: "My Recipes",
  },
  {
    path: "me/account",
    name: "My Account",
  },
];

export default function NavLinkList() {
  return (
    <ul>
      {navLinks.map((link) => (
        <NavLink />
      ))}
    </ul>
  );
}
