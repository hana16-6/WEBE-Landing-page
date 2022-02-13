import React from "react";
import noPath from "../assets/NoPath-4@2x.png";
function Overview() {
  return (
    <>
      <div className="container">
        <div className="overview">
          <div className="text-center overview-info">
            <p className="headline">Advanced Customer Service Platform</p>
            <h2>Platform Overview</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
            </p>
            <p> dolores et ea rebum.</p>
            <p>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet
            </p>
          </div>
          <div>
            <img className="w-100" src={noPath} alt="" />
          </div>
          <ul className="dots list-unstyled d-flex justify-content-center">
            <li className="active"></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Overview;
