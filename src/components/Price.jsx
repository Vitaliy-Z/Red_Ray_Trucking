import React from "react";
import { Container, Box, Typography } from "@mui/material";

export default function Price() {
  return (
    <Container
      maxWidth="lg"
      sx={{ padding: "40px 0", backgroundColor: "#f8f9fa" }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "30px",
          textAlign: "center",
          fontSize: { xs: "1.8em", sm: "2em" },
          fontStyle: "italic",
          textShadow: "2px 3px 3px #000",
          color: "red"
        }}
      >
        Наші ціни
      </Typography>

      <Box
        sx={{
          margin: "0 auto",
          width: "95%",
          height: "300px",
          border: "2px solid red",
          // Debag
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.8em", sm: "2em" },
            fontStyle: "italic"
          }}
        >
          Тут вказані ціни на послуги
        </Typography>
      </Box>
    </Container>
  );
}
