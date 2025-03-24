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

function Compras() {
  const [compras, setCompras] = useState([]);
  const [total, setTotal] = useState("");
  const [proveedorId, setProveedorId] = useState("");
  const [usuarioId, setUsuarioId] = useState("");

  // Obtener compras
  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await api.get("/compras");
        setCompras(response.data);
      } catch (error) {
        console.error("Error al obtener las compras:", error);
      }
    };
    fetchCompras();
  }, []);

  // Crear compra
  const handleCreate = async () => {
    try {
      if (!total || !proveedorId || !usuarioId) {
        alert("Por favor completa todos los campos");
        return;
      }

      await api.post("/compras", {
        total: parseFloat(total),
        proveedorId: parseInt(proveedorId),
        usuarioId: parseInt(usuarioId),
      });

      // Recargar la lista de compras después de crear
      const response = await api.get("/compras");
      setCompras(response.data);

      // Limpiar el formulario después de enviar
      setTotal("");
      setProveedorId("");
      setUsuarioId("");
    } catch (error) {
      console.error("Error al crear la compra:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Compras
      </Typography>

      {/* Formulario para crear compra */}
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
          fullWidth
        />
        <TextField
          label="Proveedor ID"
          value={proveedorId}
          onChange={(e) => setProveedorId(e.target.value)}
          fullWidth
        />
        <TextField
          label="Usuario ID"
          value={usuarioId}
          onChange={(e) => setUsuarioId(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Crear Compra
        </Button>
      </Box>

      {/* Lista de compras */}
      <List>
        {compras.map((compra) => (
          <ListItem key={compra.id} divider>
            <ListItemText
              primary={`Compra ID: ${compra.id} - Total: ${compra.total} $`}
              secondary={`Proveedor ID: ${compra.proveedorId} | Usuario ID: ${compra.usuarioId}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Compras;
