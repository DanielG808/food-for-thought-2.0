type AuthFormToggleProps = {
  formType: "sign-in" | "sign-up";
  toggleForm: () => void;
};

export default function AuthFormToggle({
  formType,
  toggleForm,
}: AuthFormToggleProps) {
  const message =
    formType === "sign-in" ? "Don't have an account?" : "Already signed up?";
  const buttonText = formType === "sign-in" ? "Sign Up" : "Sign In";

  return (
    <div className="flex items-center justify-between w-full text-sm pt-1">
      <p>{message}</p>
      <button onClick={toggleForm} className="cursor-pointer hover:underline">
        {buttonText}
      </button>
    </div>
  );
}
