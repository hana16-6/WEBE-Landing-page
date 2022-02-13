import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <nav>
      <div className="row align-items-center">
        <h2 className="logo col-lg-3 col-8">
          ST<span className="logoV">v</span>DY
        </h2>
        <ul className="list-unstyled d-flex col-lg-6 nav-list">
          <li>Browser</li>
          <li>Bootcamps</li>
          <li>How It Works</li>
          <li>Testemonial</li>
        </ul>

        <div className="col-lg-3 col-4 text-center">
          <Button text="About us" style={`about-btn`} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
