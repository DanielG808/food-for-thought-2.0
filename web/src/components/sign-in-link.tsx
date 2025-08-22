import Link from "next/link";

export default function SignInLink() {
  return (
    <Link href="/sign-in" className="pr-2 hover:underline duration-200">
      Sign In
    </Link>
  );
}
