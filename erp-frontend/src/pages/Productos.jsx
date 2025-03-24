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

function Productos() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");

  // Obtener productos
  useEffect(() => {
    const fetchProductos = async () => {
      const response = await api.get("/productos");
      setProductos(response.data);
    };
    fetchProductos();
  }, []);

  // Crear producto
  const handleCreate = async () => {
    await api.post("/productos", {
      nombre,
      precio: parseFloat(precio),
      stock: parseInt(stock),
      categoria,
    });
    window.location.reload();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Productos
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
          label="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <TextField
          label="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <TextField
          label="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleCreate}>
          Crear Producto
        </Button>
      </Box>

      {/* Lista de productos */}
      <List>
        {productos.map((producto) => (
          <ListItem key={producto.id} divider>
            <ListItemText
              primary={`${producto.nombre} - ${producto.precio}$`}
              secondary={`Stock: ${producto.stock} | Categoría: ${producto.categoria}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Productos;
