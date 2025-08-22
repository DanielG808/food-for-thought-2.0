import CopyrightStatement from "./copyright-statement";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center text-center text-black/20 bg-footer mt-auto h-14">
      <CopyrightStatement />
    </footer>
  );
}
