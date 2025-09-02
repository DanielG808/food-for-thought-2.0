// components
import AuthFormToggle from "./auth-form-toggle";
import Form from "./ui/form";
import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";

// types
import {
  AuthFormData,
  SignInFormData,
  SignUpFormData,
} from "../lib/validations/authSchema";
import {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
  UseFormHandleSubmit,
  SubmitHandler,
} from "react-hook-form";

type SignInSignUpFormProps = {
  register: UseFormRegister<AuthFormData>;
  watch: UseFormWatch<AuthFormData>;
  pendingVerification: { email?: string } | null;
  formType: "sign-in" | "sign-up";
  handleSubmit: UseFormHandleSubmit<AuthFormData>;
  onSubmit: SubmitHandler<AuthFormData>;
  isSubmitting: boolean;
  errors: FieldErrors<AuthFormData>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setPendingVerification: React.Dispatch<
    React.SetStateAction<{ email?: string } | null>
  >;
  toggleForm: () => void;
};

export default function SignInSignUpForm({
  register,
  watch,
  pendingVerification,
  formType,
  handleSubmit,
  onSubmit,
  isSubmitting,
  errors,
  setCode,
  setPendingVerification,
  toggleForm,
}: SignInSignUpFormProps) {
  return (
    !pendingVerification && (
      <>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-foreground-dark/15 w-96 bg-background-dark/85 p-4 space-y-1 rounded-md"
        >
          {formType === "sign-in" ? (
            <SignInForm
              register={register as unknown as UseFormRegister<SignInFormData>}
              errors={errors as FieldErrors<SignInFormData>}
              isSubmitting={isSubmitting}
            />
          ) : (
            <SignUpForm
              register={register as unknown as UseFormRegister<SignUpFormData>}
              errors={errors as FieldErrors<SignUpFormData>}
              isSubmitting={isSubmitting}
              watch={watch as UseFormWatch<SignUpFormData>}
            />
          )}
        </Form>

        <AuthFormToggle
          formType={formType}
          toggleForm={() => {
            setPendingVerification(null);
            setCode("");
            toggleForm();
          }}
        />
      </>
    )
  );
}
