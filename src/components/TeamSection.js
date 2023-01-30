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
              <TeamItem
                image="https://diamond-continental.com/images/resource/team-5.jpg"
                name="Chen Lee"
                position="Co-Founder"
              />
              <TeamItem
                name="Emma O’Brien"
                position="Sr. Product Engineer"
                image="https://diamond-continental.com/images/resource/team-6.jpg"
              />
            </GridLayout>
          </div>
          <div>
            <GridLayout>
              <TeamItem
                name="David Ankrum"
                position="Co Founder"
                image="https://diamond-continental.com/images/resource/team-7.jpg"
              />
              <TeamItem
                name="Maria De Aragon"
                position="HRM"
                image="https://diamond-continental.com/images/resource/team-8.jpg"
              />
              <TeamItem
                name="Joe Hurt"
                position="CTO"
                image="https://diamond-continental.com/images/resource/team-9.jpg"
              />
              <TeamItem
                name="Damien Wayne"
                position="COO"
                image="https://diamond-continental.com/images/resource/team-10.jpg"
              />
            </GridLayout>
          </div>
        </div>
      </div>
    </div>
  );
};
