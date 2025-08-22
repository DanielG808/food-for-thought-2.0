type PageContentWrapperProps = {
  children: React.ReactNode;
};

export default function PageContentWrapper({
  children,
}: PageContentWrapperProps) {
  return <main className="p-4">{children}</main>;
}
