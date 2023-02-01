import React from "react";
import "./gridlayout.css";

export const GalleryGridLayout1x3 = ({ children }) => {
  return (
    <div className="grid-container">
      <div className="row justify-content-center">
        <div className="row">
          {React.Children.map(children, (child, i) => (
            <div className="col-sm-4">{child}</div>
          ))}
        </div>
        {/* <div className="col-sm-12 col-md-6 col-lg-4"></div> */}
      </div>
    </div>
  );
};
