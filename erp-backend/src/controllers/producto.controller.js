import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProductos = async (req, res) => {
  const productos = await prisma.producto.findMany();
  res.json(productos);
};

export const createProducto = async (req, res) => {
  const { nombre, precio, stock, categoria } = req.body;
  const producto = await prisma.producto.create({
    data: { nombre, precio, stock, categoria },
  });
  res.json(producto);
};

export const deleteProducto = async (req, res) => {
  const { id } = req.params;
  await prisma.producto.delete({ where: { id: Number(id) } });
  res.json({ message: "Producto eliminado" });
};
