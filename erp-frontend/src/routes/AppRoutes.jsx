import { Route, Routes } from "react-router-dom";
import Usuarios from "../pages/Usuarios";
import Productos from "../pages/Productos";
import Ventas from "../pages/Ventas";
import Compras from "../pages/Compras";
import Finanzas from "../pages/Finanzas";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/ventas" element={<Ventas />} />
      <Route path="/compras" element={<Compras />} />
      <Route path="/finanzas" element={<Finanzas />} />
    </Routes>
  );
}

export default AppRoutes;
