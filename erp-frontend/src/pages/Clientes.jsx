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

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  // Obtener clientes
  useEffect(() => {
    const fetchClientes = async () => {
      const response = await api.get("/clientes");
      setClientes(response.data);
    };
    fetchClientes();
  }, []);

  // Crear cliente
  const handleCreate = async () => {
    await api.post("/clientes", {
      nombre,
      email,
      telefono,
    });
    window.location.reload();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Clientes
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
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Crear Cliente
        </Button>
      </Box>

      {/* Lista de clientes */}
      <List>
        {clientes.map((cliente) => (
          <ListItem key={cliente.id} divider>
            <ListItemText primary={`${cliente.nombre} - ${cliente.email}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Clientes;
