import AuthFormToggle from "./auth-form-toggle";
import Button from "./ui/button";
import Form from "./ui/form";
import InputOrTextarea from "./ui/input-or-textarea";

export default function AuthForm() {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <h1 className="text-lg text-foreground/45 font-medium">Sign In:</h1>
      <Form className="border border-foreground-dark/15 w-96 bg-background-dark/85 p-4 space-y-1 rounded-md">
        <InputOrTextarea name="username" />
        <InputOrTextarea name="password" />
        <Button className="mt-4">Sign In</Button>
      </Form>
      <AuthFormToggle />
    </div>
  );
}
