import React from "react";
import noPath from "../assets/NoPath-4@2x.png";
import rectangle from "../assets/Rectangle 11@2x.png";
import AccelerationProcess from "../components/AccelerationProcess";
import Overview from "../components/Overview";
function PlatformTech() {
  return (
    <>
      <div className="main-background">
        <Overview />
        <div className="platform-tech-container">
          <div className="container ">
            <div className="row platform-tech align-items-center">
              <div className="col-lg-6">
                <h2>Best Platform for the Technological Era</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                  <br /> Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet
                </p>
                <p className="w-50 learn-about"> Learn About Our Success</p>
              </div>
              <div className="col-lg-6 platform-tech-img">
                <img className="w-100" src={noPath} alt="" />
              </div>
              {/* <div className="backgtound-img-tech">
              <img className="w-100" src={rectangle} alt="" />
            </div> */}
            </div>
          </div>
        </div>
        <AccelerationProcess />
      </div>
    </>
  );
}

export default PlatformTech;
