import React from "react";
import { SvgIcon, Box, Typography, Link, Divider } from "@mui/material";

import { ReactComponent as LogoIcon } from "../img/logoRR.svg";
import { ReactComponent as FacebookIcon } from "../img/facebookIcon.svg";
import { ReactComponent as InstagramIcon } from "../img/instagramIcon.svg";
import { ReactComponent as TikTokIcon } from "../img/tiktokIcon.svg";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#001E3C",
        padding: { xs: "0 10px", sm: "0 30px", md: "0 50px" }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "2em"
        }}
      >
        <SvgIcon
          component={LogoIcon}
          inheritViewBox
          sx={{
            display: "block",
            fontSize: { xs: "10rem", sm: "12rem", md: "15rem" }
          }}
        />
        <Box>
          <Typography
            sx={{
              marginBottom: "10px",
              fontFamily: "Montserrat",
              fontSize: "1.3rem",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#fff"
            }}
          >
            Наші контакти:
          </Typography>
          <Link
            href="tel:+380937937399"
            color="#fff"
            underline="none"
            sx={{
              display: "inline-block",
              marginBottom: "5px",
              fontSize: "1rem",
              borderBottom: "2px solid red"
            }}
          >
            +38 093 793 73 99
          </Link>
          <br />
          <Link
            href="mailto:redraytrucking@gmail.com"
            color="#fff"
            underline="none"
            sx={{
              display: "inline-block",
              fontSize: "1rem",
              borderBottom: "2px solid red"
            }}
          >
            redraytrucking@gmail.com
          </Link>
        </Box>
        <Box
          sx={{
            margin: "0 auto"
          }}
        >
          <Typography
            sx={{
              marginBottom: "10px",
              fontFamily: "Montserrat",
              fontSize: "1.3rem",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#fff"
            }}
          >
            Ми в соціальних мережах:
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <Link href="https://www.facebook.com/redraytruckingofficial">
              <SvgIcon
                component={FacebookIcon}
                inheritViewBox
                sx={{
                  fontSize: { xs: "2.5rem", sm: "2.8rem", md: "3rem" }
                }}
              />
            </Link>
            <Link href="https://www.instagram.com/red_ray_trucking/">
              <SvgIcon
                component={InstagramIcon}
                inheritViewBox
                sx={{
                  fontSize: { xs: "2.5rem", sm: "2.8rem", md: "3rem" }
                }}
              />
            </Link>
            <Link href="https://www.tiktok.com/@red_ray_trucking">
              <SvgIcon
                component={TikTokIcon}
                inheritViewBox
                sx={{
                  fontSize: { xs: "2.5rem", sm: "2.8rem", md: "3rem" }
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ width: "100%", margin: "0 auto", borderColor: "red" }} />
      <Box sx={{ textAlign: "center", padding: "15px 0" }}>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontFamily: "Montserrat",
            fontStyle: "italic",
            color: "#fff"
          }}
        >
          Est. 2022
        </Typography>
      </Box>
    </Box>
    // </ThemeProvider>
  );
}
