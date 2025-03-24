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

function Ventas() {
  const [ventas, setVentas] = useState([]);
  const [total, setTotal] = useState("");
  const [clienteId, setClienteId] = useState("");
  const [usuarioId, setUsuarioId] = useState("");

  useEffect(() => {
    const fetchVentas = async () => {
      const response = await api.get("/ventas");
      setVentas(response.data);
    };
    fetchVentas();
  }, []);

  const handleCreate = async () => {
    await api.post("/ventas", {
      total: parseFloat(total),
      clienteId: parseInt(clienteId),
      usuarioId: parseInt(usuarioId),
    });
    window.location.reload();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Ventas
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
          label="Total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
        <TextField
          label="Cliente ID"
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
        />
        <TextField
          label="Usuario ID"
          value={usuarioId}
          onChange={(e) => setUsuarioId(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Crear Venta
        </Button>
      </Box>

      {/* Lista de ventas */}
      <List>
        {ventas.map((venta) => (
          <ListItem key={venta.id} divider>
            <ListItemText
              primary={`Venta ID: ${venta.id} - Total: ${venta.total}$`}
              secondary={`Cliente ID: ${venta.clienteId} | Usuario ID: ${venta.usuarioId}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Ventas;
