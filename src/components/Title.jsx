import { Divider, Typography } from "@mui/material";
import React from "react";

export default function Title({ text }) {
  return (
    <>
      <Divider
        sx={{ width: "15vw", margin: "20px auto 0 auto ", borderColor: "red" }}
      />
      <Typography
        sx={{
          margin: "10px 0",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: { xs: "1.5em", sm: "1.7em" },
          fontWeight: "bold",
          color: "#001E3C"
        }}
      >
        {text}
      </Typography>
      <Divider sx={{ width: "30vw", margin: "0 auto", borderColor: "red" }} />
    </>
  );
}
