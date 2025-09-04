// web/src/lib/auth/authService.ts
import type { SignInResource, SignUpResource } from "@clerk/types";

export async function doSignIn(
  signIn: SignInResource,
  username: string,
  password: string
) {
  return signIn.create({ identifier: username.trim(), password });
}

export async function doSignUpCreate(
  signUp: SignUpResource,
  username: string,
  email: string,
  password: string
) {
  await signUp.create({
    username: username.trim(),
    emailAddress: email.trim(),
    password,
  });
  await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
}

export async function verifyEmail(signUp: SignUpResource, code: string) {
  return signUp.attemptEmailAddressVerification({ code });
}
