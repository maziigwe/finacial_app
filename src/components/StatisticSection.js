import React from "react";
import { GridLayout } from "../component/GridLayout";
import { StatisticsItem } from "./common/StatisticsItem";

import "./statistics-section.css";

export const StatisticSection = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className=" statistics-section">
        <GridLayout>
          <StatisticsItem />
          <StatisticsItem />
          <StatisticsItem />
          <StatisticsItem />
        </GridLayout>
      </div>
    </div>
  );
};
