import React from "react";
import "./herocarouselcaption.css";
import { Link } from "react-router-dom";

export const HeroCarouselCaption = ({
  title = "We work for your success",
  heading = "We build your best business",
  description = " Our banking services are designed to give our customers rest of mind and 100% satisfaction.",
}) => {
  return (
    <div className="carousel-caption">
      <div>{title}</div>
      <h1>{heading}</h1>
      <p>{description}</p>
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
