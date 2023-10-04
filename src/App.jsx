import React from "react";
import Navbar from "./components/nav/Nav";
import GlobalStyles from "./Global";
import { Container } from "./components/styles/Container.styled";
function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        
      </Container>
    </>
  );
}

export default App;
