import express from "express";
import {
  getProductos,
  createProducto,
  deleteProducto,
} from "../controllers/producto.controller.js";

const router = express.Router();

router.get("/", getProductos);
router.post("/", createProducto);
router.delete("/:id", deleteProducto);

export default router;
