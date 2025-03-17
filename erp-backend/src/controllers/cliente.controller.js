import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getClientes = async (req, res) => {
  const clientes = await prisma.cliente.findMany();
  res.json(clientes);
};

export const createCliente = async (req, res) => {
  const { nombre, email, telefono } = req.body;
  const cliente = await prisma.cliente.create({
    data: { nombre, email, telefono },
  });
  res.json(cliente);
};
