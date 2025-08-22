"use client";

import { useState } from "react";
import AuthFormToggle from "./auth-form-toggle";
import SignInForm from "./sign-in-form";
import Form from "./ui/form";
import SignUpForm from "./sign-up-form";

export default function AuthForm() {
  const [formType, setFormType] = useState<"sign-in" | "sign-up">("sign-in");

  function toggleForm() {
    setFormType((prev) => (prev === "sign-in" ? "sign-up" : "sign-in"));
  }

  return (
    <div className="flex flex-col justify-center space-y-2">
      <h1 className="text-lg text-foreground/45 font-medium">
        {formType === "sign-in" ? "Sign In:" : "Sign Up:"}
      </h1>
      <Form className="border border-foreground-dark/15 w-96 bg-background-dark/85 p-4 space-y-1 rounded-md">
        {formType === "sign-in" ? <SignInForm /> : <SignUpForm />}
      </Form>
      <AuthFormToggle formType={formType} toggleForm={toggleForm} />
    </div>
  );
}
