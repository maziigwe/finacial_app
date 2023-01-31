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
        <div className="p-4">
          <div>
            <span>Date</span> <span>Admin</span>
          </div>
          <div>
            <h5>Strategy for Norway's Pension Fund Global.</h5>
          </div>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};
