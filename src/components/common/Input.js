import React from "react";
import "./input.css";

export const Input = ({
  name = "account_id",
  type = "number",
  placeholder = "Account ID",
}) => {
  return (
    <div className="input-item">
      <div className="list list--inline">
        <span>Account ID</span>{" "}
        <span className="forgot-password">forgot password</span>
      </div>
      <input id={name} type={type} placeholder={placeholder} />
    </div>
  );
};
