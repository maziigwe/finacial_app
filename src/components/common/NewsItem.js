import React from "react";
import "./news-item.css";

export const NewsItem = () => {
  return (
    <div className="news-item">
      <div className="card">
        <img
          src="https://diamond-continental.com/images/resource/news-4.jpg"
          alt="office"
        />
        <div>
          <div>
            <span>Date</span> <span>Admin</span>
          </div>
          News Item
        </div>
      </div>
    </div>
  );
};
