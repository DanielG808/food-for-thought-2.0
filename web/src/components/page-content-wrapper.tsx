import { cn } from "@/lib/utils/cn";

type PageContentWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContentWrapper({
  children,
  className,
}: PageContentWrapperProps) {
  return <main className={cn("flex-1 h-full", className)}>{children}</main>;
}
