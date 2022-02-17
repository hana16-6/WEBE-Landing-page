import React from "react";
import Button from "../components/Button";
import shutterstock from "../assets/shutterstock_459775861 (1).png";
import IconStar from "../assets/Icon metro-star-full.png";
function HappyUsers() {
  return (
    <>
      <div className="container happy-users">
        <h2 className="text-center headline">
          Don't Just Take our Word for it!
        </h2>

        <div className="row">
          <div className="col-lg-3 counter-item text-center">
            <p className="num">570</p>
            <p className="cap">Dowload</p>
          </div>
          <div className="col-lg-3 counter-item text-center">
            <p className="num">570</p>
            <p className="cap">Active User</p>
          </div>
          <div className="col-lg-3 counter-item text-center">
            <p className="num">570</p>
            <p className="cap">Positive Feedback</p>
          </div>
          <div className="col-lg-3 counter-item text-center">
            <p className="num">570</p>
            <p className="cap">+ rating</p>
          </div>
        </div>
        <div className="row mt-5 pt-4 align-items-center">
          <div className="col-lg-6 card-container">
            <div className="d-flex user-card align-items-center justify-content-center">
              <div className="col-4">
                <img className="card-img" src={shutterstock} alt="" />
              </div>
              <div className="col-6 card-info">
                <h5>Florrie Jacobs</h5>
                <p className="userjob">CEO of Company</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
                </p>
                <ul className="list-unstyled d-flex justify-content-start">
                  <li className="me-2">
                    <img src={IconStar} alt="" />
                  </li>
                  <li className="me-2">
                    <img src={IconStar} alt="" />
                  </li>
                  <li className="me-2">
                    <img src={IconStar} alt="" />
                  </li>
                  <li className="me-2">
                    <img src={IconStar} alt="" />
                  </li>
                  <li>
                    <img src={IconStar} alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <ul className="dots mt-4 list-unstyled d-flex justify-content-center">
              <li className="active"></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="col-lg-6 users-info">
            <h2>Grow Your Business and Join Our Happy Users</h2>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <p className="btn-m">
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet
            </p>
            <Button text="About us" style={`about-btn`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HappyUsers;
