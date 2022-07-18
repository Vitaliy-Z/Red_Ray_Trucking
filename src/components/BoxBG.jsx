import React from "react";
import { Container, SvgIcon, Typography } from "@mui/material";
import bgImg from "../img/bgImg.webp";
import { ReactComponent as LogoIcon } from "../img/logoRR.svg";

export default function BoxBG() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: { sm: "flex" },
        alignItems: "center",
        width: "100%",
        height: { xs: 150, sm: 200, md: 250 },
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        opacity: 0.85
      }}
    >
      <SvgIcon
        component={LogoIcon}
        inheritViewBox
        sx={{
          display: "block",
          margin: { xs: "0 auto", sm: 0 },
          fontSize: { xs: "10rem", sm: "12rem", md: "15rem" }
        }}
      />
      <Typography
        sx={{
          display: { xs: "none", sm: "inline" },
          fontSize: "3rem",
          fontWeight: "bold",
          fontStyle: "italic",
          textShadow: "5px 5px 2px #000",
          color: "red"
        }}
      >
        Red Ray Truckind
      </Typography>
    </Container>
  );
}
