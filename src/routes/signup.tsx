import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "../features/auth/AuthLayout";
import { SignupForm } from "../features/auth/SignupForm";

export const Route = createFileRoute("/signup")({
  component: () => (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  ),
});
