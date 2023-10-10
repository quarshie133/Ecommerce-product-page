import React from "react";
import Navbar from "./components/nav/Nav";
import GlobalStyles from "./Global";
import { Container } from "./components/styles/Container.styled";
import ImageSlider from "./components/slider/ImageSlider";
import { SliderData } from "./components/slider/SliderData";
function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <ImageSlider slides={SliderData}/>
      </Container>
    </>
  );
}

export default App;
