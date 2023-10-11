import React from "react";
import Navbar from "./components/nav/Nav";
import ImageSlider from "./components/slider/ImageSlider";
import { SliderData } from "./components/slider/SliderData";
import ProductInfo from "./components/Product/ProductInfo";
import { useGlobalContext } from "./context";
import LightboxGallery from "./components/LightboxGallery/LightboxGallery";

function App() {
  const { isLightboxGalleryOpen } = useGlobalContext();

  return (
    <main>
      <Navbar />
      <section className="product-container">
        <ImageSlider slides={SliderData} />
        <ProductInfo />
        {isLightboxGalleryOpen && <LightboxGallery />}
      </section>
    </main>
  );
}

export default App;
