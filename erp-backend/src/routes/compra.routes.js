import express from "express";
import { getCompras, createCompra } from "../controllers/compra.controller.js";

const router = express.Router();

router.get("/", getCompras);
router.post("/", createCompra);

export default router;
