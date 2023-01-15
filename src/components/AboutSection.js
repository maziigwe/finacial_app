import React from "react";
import "./about-section.css";

export const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="intro-container  section-left-border px-2">
          <div className="intro-about ">
            <div className="section-title">Intro</div>
            <h1 className="section-heading">About us</h1>
          </div>
          <div className="about-subtitle">
            a lo about us lorem lopsium a lo about us lorem lopsium a lo about
            us lorem lopsiuma lo about us lorem lopsiuma lo about us lorem
            lopsium us lorem lopsiuma lo about us lorem lopsiuma lo about us
            lorem lopsium us lorem lopsiuma lo about us lorem lopsiuma lo about
            us lorem lopsium
          </div>
        </div>
        <div className="intro-container mt-4 px-2">
          <div className="intro-about ">
            <img
              className="image-1"
              alt="happy staff"
              src="https://diamond-continental.com/images/resource/about-2.jpg"
            />
            <img
              className="image-2"
              alt="happy staff 2"
              src="https://diamond-continental.com/images/resource/about-3.jpg"
            />
          </div>
          <div className="about-subtitle">
            <div>
              {" "}
              s lorem lopsiuma lo about us lorem lopsiuma lo about us lorem
              lopsium us lorem lopsiuma lo about us lorem lopsiuma lo about us
              lorem lopsium us lorem lopsiuma lo about us lorem lopsiuma lo
              about us lorem lopsium
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-4 py-4 px-0">
        <div className="d-block d-lg-flex ">
          <div className="col-lg-5 px-0">
            <img
              className="image-1"
              alt="happy staff"
              src="https://diamond-continental.com/images/resource/about-2.jpg"
            />
          </div>
          <div className="col-lg-7 px-0">
            s lorem lopsiuma lo about us lorem lopsiuma lo about us lorem
            lopsium us lorem lopsiuma lo about us lorem lopsiuma lo about us
            lorem lopsium us lorem lopsiuma lo about us lorem lopsiuma lo about
            us lorem lopsium
          </div>
        </div>
      </div> */}
    </div>
  );
};
