import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/AppLayout";

export const Route = createFileRoute("/dashboard")({
  component: () => (
    <AppLayout>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card title="Eventos" value="12" />
        <Card title="Cupons" value="5" />
        <Card title="Ingressos vendidos" value="184" />
        <Card title="Participantes" value="650" />
      </div>
    </AppLayout>
  ),
});
// eslint-disable-next-line react-refresh/only-export-components
function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-gray-500">{title}</h2>

      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
