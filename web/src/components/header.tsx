import Logo from "./logo";
import SignInLink from "./sign-in-link";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-foreground/15 bg-background-dark h-24 p-4 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <Logo />
      <SignInLink />
    </header>
  );
}
