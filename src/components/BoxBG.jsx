import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import bgImg from "../img/bgImg.webp";
import { ReactComponent as LogoIcon } from "../img/logoRR.svg";
import BtnOrder from "./BtnOrder";

export default function BoxBG() {
  return (
    <Box
      maxWidth="100%"
      sx={{
        height: { xs: 180, sm: 260, md: 400 },
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "cover"
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: { xs: "0 10px", sm: "0 30px", md: "0 50px" },
          display: { xs: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.65), rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0))"
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            width: { sm: "250px", md: "300px" }
          }}
        >
          <Typography
            sx={{
              display: { xs: "none", sm: "inline-block" },
              marginBottom: "1em",
              fontFamily: "Montserrat",
              fontSize: { sm: "2.1rem", md: "2.5rem" },
              fontWeight: "bold",
              lineHeight: { sm: "2.2rem", md: "2.6rem" }
            }}
          >
            Вантажні перевезення по Україні
          </Typography>

          <BtnOrder />
        </Box>
        <SvgIcon
          component={LogoIcon}
          inheritViewBox
          sx={{
            display: "block",

            margin: { sm: 0 },
            fontSize: { xs: "10rem", sm: "12rem", md: "15rem" }
          }}
        />
      </Box>
    </Box>
  );
}
