import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCompras = async (req, res) => {
  const compras = await prisma.compra.findMany();
  res.json(compras);
};

export const createCompra = async (req, res) => {
  const { fecha, total, proveedorId, usuarioId } = req.body;

  const fechaCompra = new Date(fecha);

  const compra = await prisma.compra.create({
    data: { fecha: fechaCompra, total, proveedorId, usuarioId },
  });
  res.json(compra);
};
