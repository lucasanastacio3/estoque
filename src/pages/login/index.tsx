import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Form, useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-screen w-full items-center justify-center bg-[#f4f4f7]">
        <div className="mx-auto w-full max-w-sm rounded-lg bg-white p-8 shadow-lg">
          <h1 className="mb-6 text-center text-3xl font-bold text-[#1c1c1e]">
            Iniciar Sessão
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-[#1c1c1e]"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                {...register("email")}
                className="mt-1"
                id="email"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-[#1c1c1e]"
                htmlFor="password"
              >
                Senha
              </label>
              <Input
                {...register("password")}
                className="mt-1"
                id="password"
                placeholder="Senha"
                type="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember" />
                <label
                  className="ml-2 block text-sm text-[#1c1c1e]"
                  htmlFor="remember"
                >
                  Lembrar
                </label>
              </div>
              <Link className="text-sm text-[#007aff] hover:underline" href="#">
                Esqueceu sua senha?
              </Link>
            </div>
            <Button
              className="w-full bg-black text-white mt-4 hover:bg-[#2c2c2e]"
              onClick={handleSubmit(onSubmit)}
            >
              Entrar
            </Button>
            {/* Remaining form inputs */}
            <div className="mt-6 text-center">
              <p className="text-sm text-[#1c1c1e]">
                Não possuis uma conta?{" "}
                <Link
                  className="font-medium text-[#007aff] hover:underline"
                  href="#"
                >
                  Registrar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </form>
  );
}
