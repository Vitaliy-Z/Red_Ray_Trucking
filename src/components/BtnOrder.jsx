import React from "react";
import { Button } from "@mui/material";
import { BtnOrderContext } from "../App";

export default function BtnOrder({ mx = 0 }) {
  const { isOpen, setOpen } = React.useContext(BtnOrderContext);

  const handleClickOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <Button
      variant="contained"
      sx={{
        display: "block",
        backgroundColor: "red",
        fontFamily: "Montserrat",
        margin: `0 ${mx}`
      }}
      onClick={handleClickOpen}
    >
      Замовити послугу
    </Button>
  );
}
