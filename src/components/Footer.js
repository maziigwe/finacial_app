import React from "react";
import "./footer.css";
import { GridLayout } from "./../component/GridLayout";
import { AppIcon } from "./common/AppIcon";
import logo from "./../assets/logo-7.png";

export const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="list list--inline">
          <div className="list">
            <div className="my-2">
              <img src={logo} alt="App Icon" />
            </div>
            <p>
              Make informed decisions during your life or during the growth of
              your business. We will help you find the right financial solutions
              to meet your needs.
            </p>
            <li>
              <i class="bi bi-telephone-fill mx-1"></i> +1 801STAN
            </li>
            <li>
              <i class="bi bi-envelope-fill mx-1"></i>
              info@diamond-continental.com
            </li>
            <li>
              <i class="bi bi-house-door-fill mx-1"></i>
              <span>1152 East 2100 South. Salt Lake City UT 84106</span>
            </li>
          </div>
          <div className="list">
            <li>
              <span class="bi bi-chevron-right mx-1"></span>
              +1 801STAN
            </li>
            <li>
              <span class="bi bi-chevron-right mx-1"></span>
              info@diamond-continental.com
            </li>
            <li>
              <span class="bi bi-chevron-right mx-1"></span>
              <span>1152 East 2100 South. Salt Lake City UT 84106</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
