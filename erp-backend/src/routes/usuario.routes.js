import express from "express";
import { body } from "express-validator";
import {
  getUsuarios,
  createUsuario,
  loginUsuario,
} from "../controllers/usuario.controller.js";

const router = express.Router();

router.get("/", getUsuarios);

router.post(
  "/",
  [
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("email").isEmail().withMessage("Debe ser un email válido"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("La contraseña debe tener al menos 6 caracteres"),
    body("rol").notEmpty().withMessage("El rol es obligatorio"),
  ],
  createUsuario
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Debe ser un email válido"),
    body("password").notEmpty().withMessage("La contraseña es obligatoria"),
  ],
  loginUsuario
);

export default router;
