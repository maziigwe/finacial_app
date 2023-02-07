import React from "react";
import { HeroCarouselCaption } from "./common/HeroCarouselCaption";
import "./herosection.css";

export const HeroSection = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active carousel-image-1">
            <HeroCarouselCaption key={1} />
          </div>
          <div className="carousel-item carousel-image-2">
            <HeroCarouselCaption
              key={2}
              heading="We build your finances"
              description="Landolt Central is one of the leading financial institution in the world."
            />
          </div>
          <div className="carousel-item carousel-image-1">
            <HeroCarouselCaption key={3} />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
