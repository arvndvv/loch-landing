import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Carousel({
  autoplay,
  children,
  margin,
  items = 1.5,
}: any) {
  return (
    <div className="carousel-container">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={margin ? margin : 20}
        dots={false}
        autoplay={autoplay}
        autoplaySpeed={1000}
        items={items}
      >
        {children}
      </OwlCarousel>
    </div>
  );
}
