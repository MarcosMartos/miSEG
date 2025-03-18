import express from "express";
import {
  getFinanzas,
  createFinanzas,
  deleteFinanzas,
} from "../controllers/finanzas.controller.js";
import { authenticateUser } from "../middleware/auth.js";

const router = express.Router();

router.get("/", authenticateUser, getFinanzas); // Obtener todas las transacciones
router.post("/", authenticateUser, createFinanzas); // Crear una nueva transacción
router.delete("/:id", authenticateUser, deleteFinanzas); // Eliminar una transacción

export default router;
