import React from "react";
import "./gridlayout.css";

export const GridLayout = ({ children }) => {
  return (
    <div className="grid-container">
      <div className="row justify-content-center">
        {/* <div className="col-sm-12 col-md-6 col-lg-4">
           <div className="card">
            <img
              className="card-img-top"
              src="https://diamond-continental.com/images/resource/about-3.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div> 
        </div> */}
        <div className="row">
          {React.Children.map(children, (child, i) => (
            <div className="col-sm-12 col-md-6 col-lg-4">{child}</div>
          ))}
        </div>
        {/* <div className="col-sm-12 col-md-6 col-lg-4"></div> */}
      </div>
    </div>
  );
};
