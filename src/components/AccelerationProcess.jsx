import Button from "../components/Button";
import React from "react";

function AccelerationProcess() {
  return (
    <>
      <div className="container ac-process">
        <div className="row align-items-center">
          <div className="process-info col-lg-6">
            <h2>Acceleration Process to Grow Your Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet
            </p>
            <Button text="About us" style={`about-btn`} />
          </div>
          <div className="market-research col-lg-6">
            <div className="market-item">
              <h5>
                <span className="market-circle">1</span>Market Research
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div className="market-item">
              <h5>
                <span className="market-circle">1</span>Market Research
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
            <div className="market-item">
              <h5>
                <span className="market-circle">1</span>Market Research
              </h5>
              <p className="last-child">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccelerationProcess;
