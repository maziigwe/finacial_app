import React from "react";
import "./input.css";

export const Input = ({
  name = "account_id",
  label = "Account ID",
  type = "number",
  placeholder = "Account ID",
  onChange,
}) => {
  function iconClass() {
    let icons = "";
    if (name === "account_id") {
      icons = "bi bi-person";
    } else if (name === "Password") {
      icons = "bi bi-key";
    } else {
      icons = "bi bi-person";
    }
    return icons;
  }

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
      <span>
        <i className={iconClass() + " left-icons"}></i>
      </span>
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
