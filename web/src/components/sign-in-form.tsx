import React from "react";
import Button from "./ui/button";
import InputOrTextarea from "./ui/input-or-textarea";

export default function SignInForm() {
  return (
    <>
      <InputOrTextarea name="username" />
      <InputOrTextarea name="password" />
      <Button className="mt-4">Sign In</Button>
    </>
  );
}
