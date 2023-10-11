import React, { useState } from "react";
import "../slider/ImageSlider.css";
import { SliderData } from "./SliderData";
// import Next from "../../assets/icon-next.svg";
// import Previous from "../../assets/icon-previous.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GalleryBigScreen from "./GalleryBigScreen";

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <article className="gallery-container">
      <div className="slider-container">
        <div className="slider-arrow-left" onClick={prevSlide}>
          <IoIosArrowBack />
        </div>

        {SliderData.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? "slider-img-container slider-img-container-active"
                  : "slider-img-container"
              }
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="ecomm" className="slider-img" />
              )}
            </div>
          );
        })}
        <div className="slider-arrow-right" onClick={nextSlide}>
          <IoIosArrowForward />
        </div>
      </div>
      <GalleryBigScreen />
    </article>
  );
}

export default ImageSlider;
