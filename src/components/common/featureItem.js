import React from "react";
import "./feature-item.css";

export const FeatureItem = ({
  title = "Expert Team",
  subtitle = " We Have A Thorougly Professional Expert Team In All Of Our Departments.",
  active = false,
}) => {
  return (
    <div className={"card my-2 " + active ? " active" : " "}>
      <h4>{title} </h4>
      <p>{subtitle}</p>
    </div>
  );
};
