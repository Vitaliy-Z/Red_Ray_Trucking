import React from "react";
import { Box } from "@mui/material";

import Header from "./components/Header";
import BoxBG from "./components/BoxBG";
import About from "./components/About";
import Price from "./components/Price";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import ModalOrderForm from "./components/ModalOrderForm";

// import axios from "axios";
// const URL = "https://hook.eu1.make.com/yq6j6xvjm6xm14wc6tjz4jqi5k9eztek";
export const BtnOrderContext = React.createContext();

function App() {
  // const submitForm = (user) => {
  //   console.log(user);
  // };
  const [open, setOpen] = React.useState(false);

  return (
    <BtnOrderContext.Provider value={{ isOpen: open, setOpen: setOpen }}>
      <Box
        maxWidth="xl"
        sx={{
          boxShadow: "0 0 70px #001E3C",
          margin: "0 auto",
          padding: 0,
          paddingLeft: 0,
          paddingRight: 0,
          fontFamily: "Montserrat"
        }}
      >
        <Header />
        <BoxBG />
        <About />
        <Price />
        {/* <OrderForm /> */}
        <Reviews />
        <Footer />
        <ModalOrderForm />
      </Box>
    </BtnOrderContext.Provider>
  );
}

export default App;
