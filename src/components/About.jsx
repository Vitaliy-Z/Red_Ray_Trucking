import React from "react";
import { Container, Box, Divider, Typography } from "@mui/material";

const descrCar = [
  { title: "Об`єм", value: "20 м3" },
  { title: "Довжина", value: "420 см" },
  { title: "Ширина", value: "210 см" },
  { title: "Висота", value: "230 см" },
  { title: "Вантажопідйомність", value: "2200 кг" },
  { title: "Заднє та бічне завантаження / розвантаження" }
];

export default function About() {
  return (
    <>
      <Divider
        sx={{ width: "20vw", margin: "20px auto 0 auto ", borderColor: "red" }}
      />
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontStyle: "italic",
          color: "#001E3C"
        }}
      >
        Renault Master Тент 2200 кг
      </Typography>
      <Divider sx={{ width: "40vw", margin: "0 auto", borderColor: "red" }} />
      <Container
        maxWidth="lg"
        sx={{ display: { md: "flex" }, alignItems: "center" }}
      >
        <Box>
          <img
            width="768"
            height="512"
            src="https://www.twojdostawczak.pl/wp-content/uploads/2019/06/plandeka-10ep-profil-czysty-768x512.jpg"
            alt="car"
            loading="lazy"
            srcSet="https://www.twojdostawczak.pl/wp-content/uploads/2019/06/plandeka-10ep-profil-czysty-768x512.jpg 768w, https://www.twojdostawczak.pl/wp-content/uploads/2019/06/plandeka-10ep-profil-czysty-300x200.jpg 300w, https://www.twojdostawczak.pl/wp-content/uploads/2019/06/plandeka-10ep-profil-czysty-1024x682.jpg 1024w, https://www.twojdostawczak.pl/wp-content/uploads/2019/06/plandeka-10ep-profil-czysty.jpg 1600w"
            sizes="(max-width: 768px) 100vw, 768px"
            style={{
              width: "100%",
              height: "auto",
              verticalAlign: "middle",
              borderStyle: "none"
            }}
          />
        </Box>
        <Box
          sx={{
            padding: "10px"

            // border: "2px solid blue"
          }}
        >
          <Typography
            sx={{ fontSize: "1.1em", fontWeight: "bold", fontStyle: "italic" }}
          >
            Розміри вантажного простору і вантажопідйомність
          </Typography>
          <ul>
            {descrCar.map((v, i) => (
              <li key={i}>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    marginBottom: " 5px"
                  }}
                >
                  {v.title}
                  {v.value && (
                    <span
                      style={{
                        fontSize: "1.1em",
                        fontWeight: "bold",
                        fontStyle: "normal"
                      }}
                    >
                      : {v.value}
                    </span>
                  )}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </>
  );
}
