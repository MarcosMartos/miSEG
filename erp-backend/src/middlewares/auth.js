import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ error: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};

export const authorizeAdmin = (req, res, next) => {
  if (req.user.rol !== "admin") {
    return res.status(403).json({ error: "Acceso no autorizado" });
  }
  next();
};
