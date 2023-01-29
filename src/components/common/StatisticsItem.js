import React from "react";
import "./statistics-item.css";

export const StatisticsItem = ({
  title = "Accounts Opened",
  total = "120k",
}) => {
  return (
    <div className="statistics-item">
      <div>Icon</div>{" "}
      <div>
        <h3 className="total">{total}</h3>
      </div>
      <div>
        <h4 className="title">{title}</h4>
      </div>
    </div>
  );
};
