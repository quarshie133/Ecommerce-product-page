import React from "react";
import Navbar from "./components/nav/Nav";
import GlobalStyles from "./Global";
import { Container } from "./components/styles/Container.styled";
import ImageSlider from "./components/slider/ImageSlider";
import { SliderData } from "./components/slider/SliderData";
import ProductInfo from "./components/Product/ProductInfo";
import { useGlobalContext } from "./context";
import LightboxGallery from "./components/LightboxGallery/LightboxGallery";

function App() {
  const { isLightboxGalleryOpen } = useGlobalContext();

  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <section className="product-container">
          <ImageSlider slides={SliderData} />
          <ProductInfo />
          {isLightboxGalleryOpen && <LightboxGallery />}
        </section>
      </Container>
    </>
  );
}

export default App;
