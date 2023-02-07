import React from "react";
import { GridLayout } from "../component/GridLayout";
import { Nav } from "react-bootstrap";
import { Headset, HourglassSplit, GraphUp } from "react-bootstrap-icons";
import "./about-section.css";
import { ProgressBar } from "./common/ProgressBar";

export const AboutSection = () => {
  const color = "white";
  const size = "50";
  const classes = "me-2";
  return (
    <div className="about-section">
      <div className="container">
        <div className="intro-container  section-left-border px-2">
          <div className="intro-about ">
            <div className="section-title">Intro</div>
            <h1 className="section-heading">About us</h1>
          </div>
          <div className="about-subtitle about-text">
            While we're a global bank, our mission is simple: We responsibly
            provide financial services that enable growth and economic progress.
            Standard Credit Union is the largest foreign direct investor in
            financial services in the world, it has played a leading role in
            establishing market intermediaries with depositories.
          </div>
        </div>
        <div className="intro-container mt-4 px-2">
          <div className="intro-about image-before">
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
            <div className="my-4">
              <GridLayout>
                <div className="about-item">
                  <div className="round-icon my-2">
                    <Headset className={classes} size={size} color={color} />
                  </div>
                  <h5>24/7 full online support</h5>
                </div>
                <div className="about-item">
                  <div className="round-icon my-2">
                    <HourglassSplit
                      className={classes}
                      size={size}
                      color={color}
                    />
                  </div>
                  <h5>26 years of experience</h5>
                </div>
                <div className="about-item">
                  <div className="round-icon my-2">
                    <GraphUp className={classes} size={size} color={color} />
                  </div>
                  <h5>Creative finance idea</h5>
                </div>
              </GridLayout>
            </div>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
};
