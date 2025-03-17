import express from "express";
import {
  getFinanzas,
  createFinanzas,
  deleteFinanzas,
} from "../controllers/finanzas.controller.js";

const router = express.Router();

router.get("/", getFinanzas); // Obtener todas las transacciones
router.post("/", createFinanzas); // Crear una nueva transacción
router.delete("/:id", deleteFinanzas); // Eliminar una transacción

export default router;
