import React from "react";
import "../sass/styles.scss";
import Nav from "./Nav";
import noPath from "../assets/NoPath-4@2x.png";
import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";
import client5 from "../assets/client-5.png";
import Button from "./Button";

function AppHeader() {
  return (
    <header>
      <div className="container">
        <Nav />
        <div className="row align-items-center hero-box-row">
          <div className="col-lg-5">
            <div className="hero-box">
              <p>Advanced Platform</p>
              <h1>Take your team to the next level</h1>
              <p className="hero-box-discrp">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
              <Button text="About us" style={`about-btn-white`} />
            </div>
          </div>
          <div className="col-lg-7">
            <img className="w-100" src={noPath} alt="" />
          </div>
        </div>
        <div className="container brands row justify-content-center">
          <div className="col-2">
            <img className="w-100" src={client1} alt="" />
          </div>
          <div className="col-2">
            <img className="w-100" src={client2} alt="" />
          </div>
          <div className="col-2">
            <img className="w-100" src={client3} alt="" />
          </div>
          <div className="col-2">
            <img className="w-100" src={client4} alt="" />
          </div>
          <div className="col-2">
            <img className="w-100" src={client5} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
