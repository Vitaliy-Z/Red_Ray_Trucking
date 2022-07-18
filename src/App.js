import React from "react";
import { Box } from "@mui/material";

import Header from "./components/Header";
import BoxBG from "./components/BoxBG";
import About from "./components/About";

// import axios from "axios";
// const URL = "https://hook.eu1.make.com/yq6j6xvjm6xm14wc6tjz4jqi5k9eztek";

function App() {
  // const submitForm = (user) => {
  //   console.log(user);
  // };

  return (
    <Box
      maxWidth="lg"
      sx={{
        boxShadow: "0 0 70px #001E3C",
        margin: "0 auto",
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0
      }}
    >
      <Header />
      <BoxBG />
      <About />
    </Box>
  );
}

export default App;
