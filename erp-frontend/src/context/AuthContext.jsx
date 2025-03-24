import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      // Si hay un token, obtén la información del usuario (opcional)
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decodifica el payload del JWT
      setUser(decodedToken);
    } else {
      setUser(null);
    }
  }, [token]);

  // ✅ Función para iniciar sesión
  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);

    const decodedToken = JSON.parse(atob(newToken.split(".")[1]));
    setUser(decodedToken);
  };

  // ✅ Función para cerrar sesión
  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
