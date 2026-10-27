import { createFileRoute } from "@tanstack/react-router";
import { AuthLayout } from "../features/auth/AuthLayout";
import { LoginForm } from "../features/auth/LoginForm";
export const Route = createFileRoute("/login")({
  component: () => (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  ),
});
