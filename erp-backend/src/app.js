import express from "express";
import cors from "cors";
// Importa las rutas
import usuarioRoutes from "./routes/usuario.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";
import proveedorRoutes from "./routes/proveedor.routes.js";
import ventaRoutes from "./routes/venta.routes.js";
import compraRoutes from "./routes/compra.routes.js";
import finanzasRoutes from "./routes/finanzas.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Registrar rutas
app.use("/usuarios", usuarioRoutes);
app.use("/productos", productoRoutes);
app.use("/clientes", clienteRoutes);
app.use("/proveedores", proveedorRoutes);
app.use("/ventas", ventaRoutes);
app.use("/compras", compraRoutes);
app.use("/finanzas", finanzasRoutes);

export default app;
