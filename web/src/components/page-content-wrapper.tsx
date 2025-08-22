type PageContentWrapperProps = {
  children: React.ReactNode;
};

export default function PageContentWrapper({
  children,
}: PageContentWrapperProps) {
  return <main>{children}</main>;
}
