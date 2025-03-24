import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { TextField, Button, Container, Typography } from "@mui/material";
import api from "../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post("/usuarios/login", { email, password });
      login(response.data.token); // Guardar el token en el contexto
      navigate("/"); // Redirige a la página principal
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
      </Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        sx={{ marginTop: 2 }}
      >
        Ingresar
      </Button>
    </Container>
  );
}

export default Login;
