import React from "react";
import boost from "../assets/Icon simple-boost.png";
import bootstrapIcon from "../assets/Icon awesome-bootstrap.png";
import highQuality from "../assets/Icon material-high-quality.png";
import businessCenter from "../assets/business_center-24px@2x.png";
import arrow from "../assets/Icon awesome-long-arrow-alt-right-1.png";

function Business() {
  return (
    <>
      <div className="container">
        <div className="row business">
          <div className="col-lg-6">
            <h2 className="w-75">The best business solution for you</h2>
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
          <div className="col-lg-6 space">
            <div className="row">
              <div className="col-lg-6 item">
                <div className="boost icon">
                  <img className="w-50" src={boost} alt="" />
                </div>
                <h5>Scale Your Activity</h5>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </p>
              </div>
              <div className="col-lg-6 item">
                <div className="bootstrapIcon icon">
                  <img className="w-50" src={bootstrapIcon} alt="" />
                </div>
                <h5>Bootcamps</h5>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </p>
              </div>

              <div className="row">
                <div className="col-6 item">
                  <div className="highQuality icon">
                    <img src={highQuality} alt="" />
                  </div>

                  <h5>Hight Quality</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
                <div className="col-lg-6 item">
                  <div className="businessCenter icon">
                    <img src={businessCenter} alt="" />
                  </div>
                  <h5>Get Certifcation</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
