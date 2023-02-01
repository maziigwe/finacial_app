import React from "react";
import "./footer.css";

import logo from "./../assets/logo-7.png";
import { GridLayout1x3 } from "./../component/GridLayout1x3";
import { GalleryGridLayout1x3 } from "../component/GalleryGridLayout1x3";

export const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="list list--inline ">
          <div className="list">
            <div className="my-2">
              <img src={logo} alt="App Icon" />
            </div>
            <p style={{ maxWidth: "50ch", display: "inline-block" }}>
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
          <div className="list other-items">
            <h4>Links</h4>
            <li>
              <i class="bi bi-chevron-right "></i>
              <a className="mx-1" href="/">
                Home
              </a>
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="/"></a>
              Services
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="/">
                {" "}
                About us
              </a>
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="/">
                Testimonials
              </a>
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="/">
                News
              </a>
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="/">
                Contact
              </a>
            </li>
          </div>
          <div className="list other-items">
            <h4>Support</h4>
            <li>
              <i class="bi bi-chevron-right "></i>
              <a className="mx-1" href="/">
                Contact Us
              </a>
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="/"></a>
              Submit a Ticket
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="/">
                {" "}
                Visit Knowledge Base
              </a>
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="/">
                Support System
              </a>
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="/">
                Refund Policy
              </a>
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="/">
                Professional Services
              </a>
            </li>
          </div>
          <div className="list other-items">
            <h4>Gallery</h4>
            <GalleryGridLayout1x3>
              <img
                src="https://diamond-continental.com/images/gallery/footer-gallery-thumb-1.jpg"
                alt="staff"
              />
              <img
                src="https://diamond-continental.com/images/gallery/footer-gallery-thumb-2.jpg"
                alt="staff"
              />
              <img
                src="https://diamond-continental.com/images/gallery/footer-gallery-thumb-3.jpg"
                alt="staff"
              />
              <img
                src="https://diamond-continental.com/images/gallery/footer-gallery-thumb-4.jpg"
                alt="staff"
              />
              <img
                src="https://diamond-continental.com/images/gallery/footer-gallery-thumb-5.jpg"
                alt="staff"
              />
              <img
                src="https://diamond-continental.com/images/gallery/footer-gallery-thumb-6.jpg"
                alt="staff"
              />
            </GalleryGridLayout1x3>
          </div>
        </div>
      </div>
    </div>
  );
};
