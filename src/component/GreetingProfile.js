import React from "react";
import "./greeting.css";
import { BuildingFill, PatchCheckFill } from "react-bootstrap-icons";

export const GreetingProfile = () => {
  const { photo, address, full_name } = JSON.parse(
    localStorage.getItem("user")
  );
  const color = "gray";
  const size = "18";
  const classes = "me-2";
  return (
    <div className="d-flex justify-content-between ">
      <img className="ms-1 round-profile-2" src={photo} alt="profile picture" />
      <div className="d-flex flex-column mt-2 mx-2">
        <h3>Welcome, {full_name}</h3>
        <div className="d-flex justify-content-between">
          <span className="mx-2 verify-address">
            <BuildingFill className={classes} size={size} color={color} />
            {address.slice(0, 20)}
          </span>
          <span className="verify-address">
            <PatchCheckFill
              className="mt-1"
              size={size}
              color={true ? "#04a954f8" : "gray"}
            />
            <span>Verified</span>
          </span>
        </div>
      </div>
    </div>
  );
};
