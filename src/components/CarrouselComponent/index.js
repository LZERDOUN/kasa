import React, { useState } from "react";
import "./style.css";
import arrowPrev from "../../assets/arrowPrev.png";
import arrowNext from "../../assets/arrowNext.png";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <img
        className="prev"
        onClick={prevSlide}
        src={arrowPrev}
        alt="arrow previous"
      />
      <img
        className="next"
        onClick={nextSlide}
        src={arrowNext}
        alt="arrow next"
      />
    </div>
  );
}

function SliderContent({ currentImage }) {
  return (
    <section>
      <img className="slide-image" src={currentImage} alt="" />
    </section>
  );
}

function Carrousel(props) {
  const len = props.images.length - 1;
  const sliderImage = props.images;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slider-container">
      <SliderContent currentImage={sliderImage[activeIndex]} />
      {len > 0 ? (
        <>
          <Arrows
            prevSlide={() =>
              setActiveIndex(activeIndex === 0 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          />
          <div className="compteur">
            <p>
              {activeIndex + 1}/{len + 1}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Carrousel;
