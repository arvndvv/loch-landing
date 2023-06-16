import React from "react";
import Carousel from "../carousel/Carousel.component";

import "./notify-carousel.styles.scss";

export default function NotifyCarousel() {
  return (
    <Carousel autoplay={true} margin={0}>
      <div className="notify-setting notify-setting--one"></div>
      <div className="notify-setting notify-setting--two"></div>
      <div className="notify-setting notify-setting--three"></div>
    </Carousel>
  );
}
