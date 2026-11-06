import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";

export const Route = createFileRoute("/dashboard")({
  component: () => (
    <AppLayout>
      <h1 className="text-3xl font-bold">Dashboard</h1>
    </AppLayout>
  ),
});
