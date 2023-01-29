import React from "react";
import { GridLayout } from "../component/GridLayout";
import { TeamItem } from "./common/TeamItem";
import "./team-section.css";

export const TeamSection = () => {
  return (
    <div className="team-section">
      <div className="container">
        <div className="intro-about ">
          <div className="section-title"> OUR DEDICATED TEAM</div>
          <h1 className="section-heading">
            We have a large number of expert team member
          </h1>
        </div>
        <div className="my-4 py-4">
          <div>
            <GridLayout>
              <TeamItem />
              <TeamItem />
              <TeamItem />
            </GridLayout>
          </div>
          <div>
            <GridLayout>
              <TeamItem />
              <TeamItem />
              <TeamItem />
              <TeamItem />
            </GridLayout>
          </div>
        </div>
      </div>
    </div>
  );
};
