import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import CardOne from "@/components/CardOne";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  // slidesToScroll: 1
};
function Corousal({ containerClassName, sectionTitle }) {
  const [arrowState, setArrowState] = useState(true);

  const leftSide = (e) => {
    setArrowState(!arrowState);
    e.preventDefault();
    document.querySelector(`.${containerClassName}`).scrollLeft =
      document.querySelector(`.${containerClassName}`).scrollLeft -
      document.querySelector(`.${containerClassName}`).clientWidth -
      100;
    let scroll = document.querySelector(`.${containerClassName}`).scrollLeft;
  };

  const rightSide = (e) => {
    setArrowState(!arrowState);
    e.preventDefault();

    document.querySelector(`.${containerClassName}`).scrollLeft =
      document.querySelector(`.${containerClassName}`).scrollLeft +
      document.querySelector(`.${containerClassName}`).clientWidth -
      +20;
  };
  return (
    <div className="custom__container">
      <div className="custom__row">
        <div className="carousel__container ">
          <div className="carousel__block">
            <p className="carousel__title">{sectionTitle}</p>
            <div className="arrow left__arrow" onClick={leftSide}>
              <img src="/assets/icons/left_arrow.svg" alt="" />
            </div>
            <div className="arrow right__arrow" onClick={rightSide}>
              <img src="/assets/icons/right_arrow.svg" alt="" />
            </div>
            <div className="main__property__container__block">
              <div className={containerClassName}>
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
                <CardOne />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corousal;
