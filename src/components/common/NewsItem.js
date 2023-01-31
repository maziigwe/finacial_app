import React from "react";
import "./news-item.css";

export const NewsItem = ({
  image = "https://diamond-continental.com/images/resource/news-4.jpg",
  title = "Strategy for Norway's Pension Fund Global.",
  date = "January 03, 2023",
}) => {
  return (
    <div className="news-item">
      <div className="card">
        <div className="news-image-container">
          <img className="news-image" src={image} alt="office" />
          <div className="news-overlay">
            <span className="center-item">
              <i class="bi bi-plus-circle"></i>
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="news-subtitle">
            <i class="bi bi-calendar3"></i>
            <span className="mx-1 news-date">{date}</span>{" "}
            <i class="bi bi-person-fill mx-1"></i>
            <span className="new-admin">Admin</span>
          </div>
          <div>
            <h5 className="news-title">{title}</h5>
          </div>
          <button className="news-btn">View More</button>
        </div>
      </div>
    </div>
  );
};
