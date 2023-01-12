import React from "react";
import "./tobnavbar.css";
import b_flag from "./../../assets/flag-icon.png";

export const TopNavbar = () => {
  return (
    <div className="  top-navbar">
      <div className="contact-list">
        <div className="px-2">
          <i className="bi bi-envelope mx-1"></i> info@diamond-continental.com
        </div>
        <div className="px-4">
          <i class="bi bi-telephone mx-1"></i>+1 801STAN
        </div>
        <div className="px-2">
          <i class="bi bi-geo-alt-fill mx-1"></i>1152 East 2100 Salt Lake
        </div>
      </div>
      <div className="d-flex px-2 lang-dropdown">
        <div
          style={{
            border: "1px solid blue",
            borderRadius: "5%",
            padding: "2px",
          }}
        >
          <img
            className=" "
            src="https://diamond-continental.com/images/icons/flag-icon.png"
            alt="british flag"
          />
          <select
            className="form-select-lang"
            //   defaultValue={lang}
            //   onChange={changeLangauge}
            name="lang"
            aria-label="Default select example"
          >
            <option value="en">English</option>
            <option value="esp">Español</option>
            <option value="fch">French</option>
            <option value="chi">中文</option>
          </select>
        </div>
      </div>
    </div>
  );
};
