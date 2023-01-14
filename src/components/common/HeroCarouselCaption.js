import React from "react";
import "./herocarouselcaption.css";
import { Link } from "react-router-dom";

export const HeroCarouselCaption = () => {
  return (
    <div className="carousel-caption">
      <div>We work for your success</div>
      <h1>We build your best business</h1>
      <p>
        Our banking services are designed to give our customers rest of mind and
        100% satisfaction.
      </p>
      <div className="d-flex">
        <Link className="btn btn-primary btn-outline-primary contact" to="/">
          Contact Us
        </Link>
        <Link className="btn btn-primary mx-4 service" to="/">
          Services
        </Link>
      </div>
    </div>
  );
};
