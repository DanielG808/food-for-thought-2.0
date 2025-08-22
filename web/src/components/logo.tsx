import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="font-pacifico text-5xl cursor-pointer hover:text-foreground-dark hover:underline duration-100">
        Food For Thought 2.0
      </h1>
    </Link>
  );
}
