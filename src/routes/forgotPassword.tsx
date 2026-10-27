import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "../features/auth/AuthLayout";
import { ForgotPasswordForm } from "../features/auth/ForgotPasswordForm";
export const Route = createFileRoute("/forgotPassword")({
  component: () => (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  ),
});
