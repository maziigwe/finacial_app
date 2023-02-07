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
              <a
                className="email-address-link"
                href="mailto:support@landolt-central.com"
              >
                support@landolt-central.com
              </a>
            </li>
            <li>
              <i class="bi bi-house-door-fill mx-1"></i>
              <span> 49 Charing Cross London SW1A2DX</span>
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
            <h4>
              <a href="mailto:support@landolt-central.com">Support </a>
            </h4>
            <li>
              <i class="bi bi-chevron-right "></i>

              <a className="mx-1" href="mailto:support@landolt-central.com">
                Contact Us
              </a>
            </li>
            <li>
              <i class="bi bi-chevron-right"></i>
              <a className="mx-1" href="mailto:support@landolt-central.com">
                Submit a Ticket
              </a>
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
