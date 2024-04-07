"use server";

import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { authService } from "../services/auth-service";

const prisma = new PrismaClient();

export const createAccount = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await prisma.users.create({
    data: {
      name,
      email,
      password: await hash(password, 10),
    },
  });

  redirect("/login");
};

export const loginAccount = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await prisma.users.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    console.log("Usuario não existe");

    redirect("/login");
  }

  const isValidPassword = await compare(password, user?.password);

  if (!isValidPassword) {
    console.log("Senha incorreta");

    redirect("/login");
  }

  // se o usuario existe e a senha estiver correta
  // TODO: criar a sessao jwt

  await authService.createSessionToken({
    sub: user?.id,
    name: user?.name,
    email: user?.email,
  });

  redirect("/painel");
};
