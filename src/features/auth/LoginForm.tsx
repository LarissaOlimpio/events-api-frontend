import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";

export function LoginForm() {
  return (
    <div className="w-full max-w-lg">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">Login</h2>

        <p className="mt-10 text-muted-foreground">Informe suas credenciais</p>
      </div>

      <form className="mt-10 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="email@empresa.com" />
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Esqueceu sua senha?
          </Link>
        </div>
        <Button className="w-full" type="submit">
          Entrar
        </Button>
        <div className="text-center text-sm">
          Não tem uma conta?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
}
