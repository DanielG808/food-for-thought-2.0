import AuthForm from "@/components/auth-form";
import PageContentWrapper from "@/components/page-content-wrapper";

export default function SignInPage() {
  return (
    <PageContentWrapper className="flex items-center justify-center">
      <AuthForm />
    </PageContentWrapper>
  );
}
