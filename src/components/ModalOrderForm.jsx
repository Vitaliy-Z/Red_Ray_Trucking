import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";
import { BtnOrderContext } from "../App";

export default function ModalOrderForm() {
  const { isOpen, setOpen } = React.useContext(BtnOrderContext);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>Форма для замовлення</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Для замовдення послуги вантажного перевезення заповніть, будь ласка,
          всі поля форми 📝
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="ФІО"
          type="name"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="tel"
          label="Телефон"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose}>Cancel</Button> */}
        <Button onClick={handleClose}>Замовити</Button>
      </DialogActions>
    </Dialog>
  );
}
