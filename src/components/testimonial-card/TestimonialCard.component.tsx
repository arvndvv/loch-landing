import React from "react";
import "./TestimonialCard.styles.scss";
export default function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__title">
        <strong className="testimonial-card__name">Jack F</strong>
        <span className="testimonial-card__desig">Ex Blackrock PM</span>
      </div>
      <p className="testimonial-card__message">
        “Love how Loch integrates portfolio analytics and whale watching into
        one unified app.”
      </p>
    </div>
  );
}
