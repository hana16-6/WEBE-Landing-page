import React from "react";
import noPath from "../assets/NoPath-4@2x.png";
import arrow from "../assets/Icon awesome-long-arrow-alt-right-1.png";
import rectangle from "../assets/Rectangle 9.png";
function Platform() {
  return (
    <>
      <div className="container-fluid platform-container">
        <div className="backgtound-img">
          <img className="w-100" src={rectangle} alt="" />
        </div>
        <div className="platform row align-items-center">
          <div className="col-lg-6 platform-img">
            <img className="w-100" src={noPath} alt="" />
          </div>
          <div className="col-lg-6">
            <h2 className="w-50">Best Platform for the Technological Era</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
              <br /> Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet
            </p>
            <p className="w-50 learn-about"> Learn About Our Success</p>
            <span>
              <img src={arrow} alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platform;
