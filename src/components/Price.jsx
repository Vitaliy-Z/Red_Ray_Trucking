import React from "react";
import { Box, Typography } from "@mui/material";
import Title from "./Title";
import BtnOrder from "./BtnOrder";

const prices = [
  {
    region: "Київ",
    cost: "від 1000грн",
    dop: [
      "тривалість більше 2-х годин - 200 грн/год",
      "додаткове місце завантаження/розвантаження - 200 грн/місце"
    ]
  },
  {
    region: "Київська область",
    cost: " від 1000грн",
    dop: ["15 грн/км від межі міста Київ"]
  },
  {
    region: "Україна",
    cost: "від 15 грн/км"
  }
];

export default function Price() {
  return (
    <Box sx={{ padding: "40px 0", backgroundColor: "#f8f9fa" }}>
      <Title text="Наші ціни" />

      <Box
        sx={{
          margin: "50px auto 0 auto",
          display: { md: "flex" },
          justifyContent: "space-evenly"
        }}
      >
        {prices.map((p, i) => (
          <Box
            key={i}
            sx={{
              margin: { xs: "50px auto", md: "0" },
              width: { xs: "90%", sm: "70%", md: "25%" },
              padding: { xs: "40px 30px", md: "15px 10px" },
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <Typography
              sx={{
                marginBottom: "15px",
                textAlign: "center",
                fontSize: "1.2em",
                textDecoration: "underline",
                fontWeight: "bold",
                fontFamily: "Montserrat"
              }}
            >
              {p.region}
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat" }}>
              Вартість: {p.cost}
            </Typography>
            <ul>
              {p.dop?.map((d, di) => (
                <li key={di} style={{ marginBottom: "5px" }}>
                  <Typography sx={{ fontFamily: "Montserrat" }}>{d}</Typography>
                </li>
              ))}
            </ul>

            <BtnOrder mx="auto" />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
