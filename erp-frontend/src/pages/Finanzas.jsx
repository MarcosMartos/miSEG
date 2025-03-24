import { useEffect, useState } from "react";
import api from "../api/axios";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function Finanzas() {
  const [finanzas, setFinanzas] = useState([]);

  useEffect(() => {
    const fetchFinanzas = async () => {
      const response = await api.get("/finanzas");
      setFinanzas(response.data);
    };
    fetchFinanzas();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Finanzas
      </Typography>

      {finanzas.map((finanza) => (
        <Box key={finanza.id} sx={{ borderBottom: 1, mb: 2 }}>
          <Typography>
            {finanza.tipo} - {finanza.monto} - {finanza.fecha}
          </Typography>
        </Box>
      ))}
    </Container>
  );
}

export default Finanzas;
