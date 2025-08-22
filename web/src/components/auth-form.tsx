import Form from "./ui/form";
import InputOrTextarea from "./ui/input-or-textarea";

export default function AuthForm() {
  return (
    <div className="flex justify-center items-center">
      <Form className="border border-foreground-dark/15 w-80 bg-background-dark/85 p-4 space-y-2 rounded-md">
        <InputOrTextarea name="username" />
      </Form>
    </div>
  );
}
