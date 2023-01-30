import React from "react";
import "./team-item.css";

export const TeamItem = ({
  image = "https://diamond-continental.com/images/resource/team-4.jpg",
  name = "Frazer Diamond",
  position = "Founder & CEO",
}) => {
  return (
    <div className="team-item">
      <div>
        {" "}
        <img loading="lazy" src={image} alt="team member" />
        <div className="team__subtitle">
          {" "}
          <h4>{name}</h4>
          <p>{position}</p>
          <div className="team-overlay"></div>
        </div>
      </div>
    </div>
  );
};
