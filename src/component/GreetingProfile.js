import React from "react";
import { BuildingFill, PatchCheckFill } from "react-bootstrap-icons";

export const GreetingProfile = () => {
  const color = "gray";
  const size = "20";
  const classes = "me-2";
  return (
    <div className="d-flex justify-content-between ">
      <img
        className="ms-3 round-profile-2"
        src="https://www.therconline.com/wp-content/uploads/2022/05/Does-Facebook-have-the-%E2%80%98New-Profile-Pic-feature-as-app-goes-viral-1-768x768.png"
        alt="profile picture"
      />
      <div className="d-flex flex-column mt-2 ms-1">
        <h3>Welcome, John Doe</h3>
        <div className="d-flex justify-content-between">
          <span className="mx-2">
            {" "}
            <BuildingFill className={classes} size={size} color={color} /> Duke
            Street Studio
          </span>
          <span>
            <PatchCheckFill
              className="mx-1"
              size={size}
              color={true ? "#04a954f8" : "gray"}
            />
            Verified Account
          </span>
        </div>
      </div>
    </div>
  );
};
