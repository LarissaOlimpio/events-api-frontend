import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupForm() {
  return (
    <div className="w-full max-w-lg">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">Cadastro</h2>

        <p className="mt-10 text-muted-foreground">Informe suas credenciais</p>
      </div>

      <form className="mt-10 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" placeholder="Seu nome completo" />
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="email@empresa.com" />
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <Button className="w-full" type="submit">
          Criar conta
        </Button>
      </form>
    </div>
  );
}
