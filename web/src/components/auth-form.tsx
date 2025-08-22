import Form from "./ui/form";
import InputOrTextarea from "./ui/input-or-textarea";

export default function AuthForm() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Form>
        <InputOrTextarea />
      </Form>
    </div>
  );
}
