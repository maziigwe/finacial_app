import React from "react";
import "./statistics-item.css";

export const StatisticsItem = ({
  title = "Accounts Opened",
  total = "120k",
}) => {
  let icon =
    title === "Accounts Opened" ? (
      <i class="bi bi-rocket"></i>
    ) : title === "Team Members" ? (
      <i class="bi bi-diagram-3"></i>
    ) : title === "Happy Client" ? (
      <i class="bi bi-hand-thumbs-up"></i>
    ) : title === "Years Experience" ? (
      <i class="bi bi-clock-history"></i>
    ) : (
      ""
    );

  return (
    <div className="statistics-item">
      <div className="icon">{icon}</div>{" "}
      <div>
        <h3 className="total">{total}</h3>
      </div>
      <div>
        <h4 className="title">{title}</h4>
      </div>
    </div>
  );
};
