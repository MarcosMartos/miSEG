import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProveedores = async (req, res) => {
  const proveedores = await prisma.proveedor.findMany();
  res.json(proveedores);
};

export const createProveedor = async (req, res) => {
  const { nombre, email, telefono } = req.body;
  const proveedor = await prisma.proveedor.create({
    data: { nombre, email, telefono },
  });
  res.json(proveedor);
};
