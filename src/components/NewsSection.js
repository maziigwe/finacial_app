import React from "react";
import "./news-section.css";
import { NewsItem } from "./common/NewsItem";
import { GridLayout1x3 } from "./../component/GridLayout1x3";

export const NewsSection = () => {
  return (
    <div className="container news-section mb-4">
      <div>
        <div className="mb-4 px-4 section-left-border">
          <div className="section-title ">SOME OF OUR NEWS </div>
          <h1 className=" px-0 section-heading">Learn about us</h1>
        </div>
        <div className="mt-4 pt-4">
          <GridLayout1x3>
            <NewsItem />
            <NewsItem
              date="January 05, 2023"
              title="What we are capable of usually gets discovered."
              image="https://diamond-continental.com/images/resource/news-5.jpg"
            />
            <NewsItem
              date="January 15, 2023"
              title="Food industry leaders often change their promoters."
              image="https://diamond-continental.com/images/resource/news-6.jpg"
            />
          </GridLayout1x3>
        </div>
      </div>
    </div>
  );
};
