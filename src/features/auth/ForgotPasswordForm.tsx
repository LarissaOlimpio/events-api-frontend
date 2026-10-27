import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
export function ForgotPasswordForm() {
  return (
    <div className="w-full max-w-lg">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Recuperar senha</h2>

        <p className="text-slate-500">
          Informe seu e-mail para receber as instruções.
        </p>
      </div>

      <form className="mt-10 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>

          <Input id="email" type="email" placeholder="email@empresa.com" />
        </div>

        <Button className="w-full" type="submit">
          Enviar recuperação
        </Button>

        <div className="text-center">
          <Link to="/login" className="text-blue-600 hover:underline">
            Voltar para o login
          </Link>
        </div>
      </form>
    </div>
  );
}
