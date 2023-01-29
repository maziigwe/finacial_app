import React from "react";
import "./statistics-section.css";

export const StatisticSection = () => {
  return (
    <div style={{ height: "30vh", position: "relative" }}>
      <div className=" statistics-section">
        {" "}
        <ul className=" list list--inline">
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
        <div className="overlay"> </div>
      </div>
    </div>
  );
};
