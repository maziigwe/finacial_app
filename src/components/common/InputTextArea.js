import React from "react";
import "./input-area.css";

export const InputTextArea = ({
  name = "message",
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
          <span className="forgot-password">
            <a href="/sign-in">don't have an account?</a>
          </span>
        ) : (
          ""
        )}
      </div>
      <textarea
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="input-text-area"
      />
    </div>
  );
};
