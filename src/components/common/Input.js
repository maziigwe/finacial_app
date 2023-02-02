import React from "react";
import "./input.css";

export const Input = ({
  name = "account_id",
  label = "Account ID",
  type = "number",
  placeholder = "Account ID",
  onChange,
}) => {
  return (
    <div className="input-item">
      <div className="list list--inline input-texts">
        <span>{label}</span>{" "}
        {type === "password" ? (
          <span className="forgot-password">don't have an account?</span>
        ) : (
          ""
        )}
      </div>
      <input
        onChange={onChange}
        id={name}
        min="0"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
