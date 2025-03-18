import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getVentas = async (req, res) => {
  const ventas = await prisma.venta.findMany();
  res.json(ventas);
};

export const createVenta = async (req, res) => {
  const { fecha, total, clienteId, usuarioId } = req.body;

  const fechaVenta = new Date(fecha);

  const venta = await prisma.venta.create({
    data: { fecha: fechaVenta, total, clienteId, usuarioId },
  });
  res.json(venta);
};
