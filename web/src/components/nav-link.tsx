import Link from "next/link";

type NavLinkProps = {
  name: string;
  path: string;
};

export default function NavLink({ name, path }: NavLinkProps) {
  return <Link href={path}>{name}</Link>;
}
