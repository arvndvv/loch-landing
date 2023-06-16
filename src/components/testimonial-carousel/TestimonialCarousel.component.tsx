import React from "react";
import Carousel from "../carousel/Carousel.component";
import TestimonialCard from "../testimonial-card/TestimonialCard.component";

export default function TestimonialCarousel() {
  return (
    <Carousel autoplay={false}>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </Carousel>
  );
}
