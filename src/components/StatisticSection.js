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
          <StatisticsItem title="Team Members" total="1954" />
          <StatisticsItem title="Happy Client" total="850k+" />
          <StatisticsItem title="Years Experience" total="26+" />
        </GridLayout>
      </div>
    </div>
  );
};
