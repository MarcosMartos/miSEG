import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener todas las finanzas
export const getFinanzas = async (req, res) => {
  try {
    const finanzas = await prisma.finanzas.findMany({
      include: {
        usuario: true, // Trae la información del usuario asociado
      },
    });
    res.json(finanzas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva transacción financiera
export const createFinanzas = async (req, res) => {
  try {
    const { tipo, monto, fecha, detalle, usuarioId } = req.body;

    const nuevaFinanza = await prisma.finanzas.create({
      data: {
        tipo,
        monto,
        fecha: new Date(fecha),
        detalle,
        usuarioId,
      },
    });

    res.status(201).json(nuevaFinanza);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una transacción financiera
export const deleteFinanzas = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.finanzas.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Transacción eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
