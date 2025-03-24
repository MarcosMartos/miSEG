import { useEffect, useState } from "react";
import api from "../api/axios";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  // Obtener usuarios
  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await api.get("/usuarios");
      setUsuarios(response.data);
    };
    fetchUsuarios();
  }, []);

  // Crear usuario
  const handleCreate = async () => {
    await api.post("/usuarios", {
      nombre,
      email,
      password,
      rol,
    });
    window.location.reload(); // Recargar para actualizar lista
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Usuarios
      </Typography>

      {/* Formulario */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
          marginBottom: 3,
        }}
      >
        <TextField
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <TextField
          label="Rol"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Crear Usuario
        </Button>
      </Box>

      {/* Lista de usuarios */}
      <List>
        {usuarios.map((usuario) => (
          <ListItem key={usuario.id} divider>
            <ListItemText
              primary={`${usuario.nombre} - ${usuario.email}`}
              secondary={`Rol: ${usuario.rol}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Usuarios;
