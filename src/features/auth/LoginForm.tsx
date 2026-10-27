import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormData } from "./schemas/loginSchema";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-lg">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">Login</h2>

        <p className="mt-10 text-muted-foreground">Informe suas credenciais</p>
      </div>

      <form
        className="mt-10 space-y-6"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@empresa.com"

            {...register("email")}
          />

          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="flex justify-end">
          <Link
            to="/forgotPassword"
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
