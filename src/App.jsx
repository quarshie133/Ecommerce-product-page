import React from "react";
import Nav from "./components/nav/Nav";
import GlobalStyles from "./Global";
import { Container } from "./components/styles/Container.styled";






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
