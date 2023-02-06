import React from "react";
import "./progressbar.css";

export const ProgressBar = () => {
  return (
    <div className="progress-container">
      {/* <ProgressBar /> */}
      <div className="skills">
        <h2>Finance</h2>
        <div className="progress-bars">
          <div className="html">
            <span>93</span>
          </div>
        </div>
        <h2>Business</h2>
        <div className="progress-bars">
          <div className="css">
            <span>90</span>
          </div>
        </div>
        <h2>Investment</h2>
        <div className="progress-bars">
          <div className="js">
            <span>91</span>
          </div>
        </div>
      </div>
    </div>
  );
};
