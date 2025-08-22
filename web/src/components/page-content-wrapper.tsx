type PageContentWrapperProps = {
  children: React.ReactNode;
};

export default function PageContentWrapper({
  children,
}: PageContentWrapperProps) {
  return <main className="flex-1 h-full">{children}</main>;
}
