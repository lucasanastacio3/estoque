"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createAccount } from "@/auth/actions/auth-actions";

export default function Register() {
  const { register, watch } = useForm();

  const password = watch("password");

  return (
    <form action={createAccount}>
      <div className="flex h-screen w-full items-center justify-center bg-[#f4f4f7]">
        <div className="mx-auto w-full max-w-sm rounded-lg bg-white p-8 shadow-lg">
          <h1 className="mb-6 text-center text-3xl font-bold text-[#1c1c1e]">
            Registrar
          </h1>
          <div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-[#1c1c1e]"
                htmlFor="name"
              >
                Nome
              </label>
              <Input
                {...register("name")}
                className="mt-1"
                id="name"
                placeholder="Nome"
                type="text"
              />
            </div>
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
            <div className="mb-4">
              <Input
                {...register("confirmEmail", {
                  validate: (value) =>
                    value === watch("email") || "Emails diferentes",
                })}
                className="mt-1"
                id="confirmEmail"
                placeholder="Confirmar Email"
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
              <span className="text-sm text-red-500">
                {password && password.length < 8 && (
                  <span className="block">* Mais de 8 caracteres.</span>
                )}

                {password && !/[A-Z]/.test(password) && (
                  <span className="block">
                    * Deve conter pelo menos uma letra maiúscula
                  </span>
                )}

                {password && !/\d/.test(password) && (
                  <span className="block">* Um número</span>
                )}

                {password && !/[!@#$%^&*()_+]/.test(password) && (
                  <span className="block">* Um caractere especial</span>
                )}
              </span>
              <Input
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") || "Senhas diferentes",
                })}
                className="mt-4"
                id="confirmPassword"
                placeholder="Confirmar Senha"
                type="password"
              />
            </div>
            <Button
              className="w-full bg-black text-white mt-4 hover:bg-[#2c2c2e]"
              type="submit"
            >
              Registrar
            </Button>
            {/* Remaining form inputs */}
            <div className="mt-6 text-center">
              <p className="text-sm text-[#1c1c1e]">
                Ja possui conta?{" "}
                <Link
                  className="font-medium text-[#007aff] hover:underline"
                  href="#"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
