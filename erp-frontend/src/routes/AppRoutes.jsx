import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import Usuarios from "../pages/Usuarios";
import Productos from "../pages/Productos";
import Ventas from "../pages/Ventas";
import Compras from "../pages/Compras";
import Finanzas from "../pages/Finanzas";
import Login from "../pages/Login";

function AppRoutes() {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/finanzas" element={<Finanzas />} />
          <Route path="*" element={<Navigate to="/usuarios" />} />
        </>
      )}
    </Routes>
  );
}

export default AppRoutes;
