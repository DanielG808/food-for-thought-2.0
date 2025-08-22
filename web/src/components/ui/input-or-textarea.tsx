import { cn } from "@/lib/utils/cn";

type InputOrTextareaProps = {
  type?: "input" | "textarea";
  name: string;
  className?: string;
};

export default function InputOrTextarea({
  type = "input",
  name,
  className,
}: InputOrTextareaProps) {
  const baseStyles =
    "w-full bg-background text-black/75 p-1 focus:ring-1 focus:ring-foreground-dark/15 focus:outline-0 rounded-md";
  const label = name.charAt(0).toUpperCase() + name.slice(1);

  return type === "input" ? (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name}>{`${label}:`}</label>
      <input id={name} type="text" className={cn(baseStyles, className)} />
    </div>
  ) : (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name}>{`${label}:`}</label>
      <textarea name="" id="" className={cn(baseStyles, className)} />
    </div>
  );
}
