import React from "react";
import "./input.css";

export const Input = ({
  name = "account_id",
  label = "Account ID",
  type = "number",
  placeholder = "Account ID",
  value,
  onChange,
}) => {
  function iconClass() {
    let icons = "";
    if (name === "account_id") {
      icons = "bi bi-person mt-1";
    } else if (name === "Password") {
      icons = "bi bi-key mt-1";
    } else if (name === "email") {
      icons = "bi bi-envelope-check mt-1";
    } else if (name === "phone") {
      icons = "bi bi-telephone mt-1";
    } else if (name === "address") {
      icons = "bi bi-geo-alt mt-1";
    } else if (name === "ssn") {
      icons = "bi bi-question-circle mt-1";
    } else if (name === "passport") {
      icons = "bi bi-upload mt-1";
    } else {
      icons = "bi bi-person mt-1";
    }
    return icons;
  }

  return (
    <div className="input-item">
      <div className="list list--inline input-texts">
        <span>{label}</span>{" "}
        {type === "password" ? (
          <span className="forgot-password">
            <a href="/sign-in">don't have an account?</a>
          </span>
        ) : (
          ""
        )}
      </div>
      <span>
        <i className={iconClass() + " left-icons"}></i>
      </span>
      <input
        value={value}
        onChange={onChange}
        id={name}
        min="0"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
