import express from "express";
import {
  getFinanzas,
  createFinanzas,
  deleteFinanzas,
} from "../controllers/finanzas.controller.js";
import { authenticateUser, authorizeAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", authenticateUser, authorizeAdmin, getFinanzas); // Obtener todas las transacciones
router.post("/", authenticateUser, authorizeAdmin, createFinanzas); // Crear una nueva transacción
router.delete("/:id", authenticateUser, authorizeAdmin, deleteFinanzas); // Eliminar una transacción

export default router;
