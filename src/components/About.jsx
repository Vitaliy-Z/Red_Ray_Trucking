import React from "react";
import { Container, Box } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ display: { sm: "flex" } }}>
      <Box
        sx={{
          width: "100%",
          height: 300,
          border: "2px solid red"
        }}
      >
        Foto
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 300,
          border: "2px solid blue"
        }}
      >
        Text
      </Box>
    </Container>
  );
}
