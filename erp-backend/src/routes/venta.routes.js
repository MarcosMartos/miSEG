import express from "express";
import { getVentas, createVenta } from "../controllers/venta.controller.js";

const router = express.Router();

router.get("/", getVentas);
router.post("/", createVenta);

export default router;
