import React from "react";
import "./input-select.css";

export const InputSelect = ({
  name = "name",
  options = [{ label: "Label", value: "value" }],
  onChange,
  title = "Title",
}) => {
  return (
    <div className="input-item">
      <div className="list list--inline input-texts">
        <span>{title}</span>{" "}
      </div>
      <select
        id={name}
        defaultValue={options[0].value}
        onChange={onChange}
        name={name}
        aria-label="Default select example"
      >
        {options.map((m) => (
          <option value={m.value} label={m.label}>
            {m.label}
          </option>
        ))}
      </select>
    </div>
  );
};
