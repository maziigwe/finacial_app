import React from "react";
import "./feature-section.css";
import feature_1 from "./../assets/feature-1.jpg";
import { FeatureItem } from "./common/featureItem";

export const FeaturesSection = () => {
  return (
    <div>
      <div className="about-section feature-section">
        <div className="container">
          <div className="grid-1x2 grid-1x2--col-2-60 mb-4 pb-4">
            <div className="px-2 section-left-border">
              <div className="section-title ">OUR BEST FEATURES </div>
              <h1 className="section-heading">Why choose us</h1>
            </div>
            <div className="feature-text">
              We are the most preferred, trustworthy, leading bank in Utah
              because we provide rapid, efficient and top quality banking
              solutions to meet the needs of customers and consistently enhance
              shareholder's value.
            </div>
          </div>
          <div>
            <div className="grid-1x2 grid-1x2--col-2-60  mt-4 ">
              <div className="col">
                {/* <FeatureItem />
                <FeatureItem
                  title="Best Finance"
                  subtitle="Brand Our Brand Is The Most Innovative And Productive Banking Brand In Utah."
                  active={true}
                />
                <FeatureItem
                  title="Best Leadership Ideas"
                  subtitle="Our Management Staff Is Poised And Focused On The Best Banking Ideas In The Industry."
                /> */}
                <div className="card my-2">
                  <h4> Expert Team</h4>
                  <p>
                    We Have A Thorougly Professional Expert Team In All Of Our
                    Departments.
                  </p>
                </div>
                <div className="card my-2 active">
                  <h4> Best Finance</h4>
                  <p>
                    Brand Our Brand Is The Most Innovative And Productive
                    Banking Brand In Utah.
                  </p>
                </div>
                <div className="card my-2">
                  <h4>Best Leadership Ideas</h4>
                  <p>
                    Our Management Staff Is Poised And Focused On The Best
                    Banking Ideas In The Industry.
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <img className="image-1" alt="happy staff" src={feature_1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
