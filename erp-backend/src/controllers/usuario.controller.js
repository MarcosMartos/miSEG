import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsuarios = async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
};

export const createUsuario = async (req, res) => {
  const { nombre, email, password, rol } = req.body;
  const usuario = await prisma.usuario.create({
    data: { nombre, email, password, rol },
  });
  res.json(usuario);
};
