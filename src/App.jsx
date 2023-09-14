import React from "react";
import Nav from "./components/nav/Nav";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global";
import { Container } from "./components/styles/Container.styled";


const theme = {
  colors: {
    black: "#000000",
    gray_color: "#68707D",
    light_gray: "#F7F8FD",
    orange: "#FF7D1A",
  },
};


function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
      <Nav />
      </Container>
    </>
  );
}

export default App;
