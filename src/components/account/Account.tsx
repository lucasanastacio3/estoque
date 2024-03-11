import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

interface Props {
  username: string;
  email: string;
  password: string;
}

export default function Component() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Props>();

  const [savedData, setSavedData] = useState<Props[]>([]);

  const password = watch("password");

  const onSubmit: SubmitHandler<Props> = (data) => {
    setSavedData([...savedData, data]);
    console.log("Dados salvos:", data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle>Configurações</CardTitle>
            <CardDescription>Atualize seu perfil</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="profile-picture">Foto de perfil</Label>
                <div className="flex items-center space-x-4">
                  <Image
                    alt="Profile picture"
                    className="rounded-full"
                    height="96"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "96/96",
                      objectFit: "cover",
                    }}
                    width="96"
                  />
                  <div className="space-y-2">
                    <Button variant="outline">Upload de imagem</Button>
                    <div>
                      Dimensões recomendadas: 400x400. Max file size: 10MB.
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Usuário</Label>
                <Input
                  id="username"
                  placeholder="Edit seu nome de usuário"
                  {...register("username")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Edite seu email"
                  {...register("email", {
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <span>Por favor, insira um email válido.</span>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Edite sua senha"
                  {...register("password")}
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
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-black text-white">Salvar</Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
