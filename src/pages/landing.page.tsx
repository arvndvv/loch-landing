import React from "react";
import "./landing.page.scss";
import watchImg from "../assets/watch.png";
import logo from "../assets/logo.png";
import TestimonialCarousel from "../components/testimonial-carousel/TestimonialCarousel.component";
import NotifyCarousel from "../components/notify-carousel/Notify-carousel.component";
export default function Landing() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);
  const handleEmailChange = (email: string) => {
    const valid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    setError(!valid);
    setEmail(email);
  };
  const handleSubmit = () => {
    if (!email) {
      setError(true);
      return;
    }
    window.open(`https://app.loch.one/welcome`, "_self");
  };
  return (
    <div className="landing">
      <div className="hero-section">
        <div className="hero-container">
          <div className="notify-section">
            <div className="notify-content">
              <div className="icon icon--bell"></div>
              <h4 className="notify-heading">
                Get notified when a highly correlated whale makes a move
              </h4>
              <p className="notify-description">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <div className="notify-settings">
              <NotifyCarousel />
            </div>
          </div>
          <div className="watch-section">
            <div className="watch-icon">
              <img src={watchImg} alt="" />
            </div>
            <div className="watch-content">
              <div className="icon icon--eye"></div>
              <h4 className="watch-heading">Watch what the whales are doing</h4>
              <p className="watch-description">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </div>
          <div className="testimonial">
            <h2 className="testimonial__heading">Testimonials</h2>
            <hr />
            <div className="testimonial__cards__container">
              <img src={logo} alt="logo" />
              <div className="testimonial__cards ">
                <TestimonialCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="form-section__content">
          <h2 className="form-section__heading">
            Sign up for
            <br /> exclusive access.
          </h2>
          <div className="email-form">
            <input
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              id="email-address"
              type="email"
              className={`input ${error && "input--error"}`}
              placeholder="Your email address"
            />
            <span className={`error-message ${error && "error-message-show"}`}>
              Please enter a valid email
            </span>
          </div>
          <button
            onClick={handleSubmit}
            className={`btn ${error && "btn--disabled"}`}
          >
            Get started
          </button>
          <span className="info">
            You’ll receive an email with an invite link to join.
          </span>
        </div>
      </div>
    </div>
  );
}
