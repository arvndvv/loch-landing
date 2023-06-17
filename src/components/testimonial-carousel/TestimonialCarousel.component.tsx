import React from "react";
import Carousel from "../carousel/Carousel.component";
import "./TestimonialCarousel.styles.scss";
export default function TestimonialCarousel() {
  return (
    <Carousel autoplay={false} items={1}>
      <div className="testimonial-card testimonial-card--one"></div>
      <div className="testimonial-card testimonial-card--two"></div>
      <div className="testimonial-card testimonial-card--three"></div>
    </Carousel>
  );
}
