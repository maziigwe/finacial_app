import React from "react";
import "./news-section.css";
import { GridLayout } from "../component/GridLayout";
import { NewsItem } from "./common/NewsItem";
import { GridLayout1x3 } from "./../component/GridLayout1x3";

export const NewsSection = () => {
  return (
    <div className="container news-section">
      <div>
        <div className="px-2 section-left-border">
          <div className="section-title ">SOME OF OUR NEWS </div>
          <h1 className="section-heading">Learn about us</h1>
        </div>
        <GridLayout1x3>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </GridLayout1x3>
      </div>
    </div>
  );
};
