import React from "react";
import { BarChartSteps } from "react-bootstrap-icons";
import "./service-item.css";

export const ServiceItem = ({
  title = "Finance Management",
  subtitle = "We ensure the financial health of your organization through investment activities and long-term financing strategies.",
  iconClass = "bi bi-bar-chart-steps",
}) => {
  return (
    <div className="service-item">
      <div className="cards">
        <i className={iconClass + " my-2 service-icon"}></i>
        <h3>{title} </h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
