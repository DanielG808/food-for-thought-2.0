import Button from "./ui/button";
import InputOrTextarea from "./ui/input-or-textarea";

export default function SignUpForm() {
  return (
    <>
      <InputOrTextarea name="username" />

      <Button className="mt-4">Confirm</Button>
    </>
  );
}
