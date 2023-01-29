import React from "react";
import "./team-item.css";

export const TeamItem = () => {
  return (
    <div className="team-item">
      <div>
        {" "}
        <img
          loading="lazy"
          src="https://diamond-continental.com/images/resource/team-7.jpg"
          alt="team member"
        />
        <h4>David Ankrum</h4>
        <p>Co Founder</p>
      </div>
    </div>
  );
};
