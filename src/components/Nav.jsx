import React, { useState } from "react";
import Button from "./Button";
import DropDownMenu from "./DropDownMenu";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(true);
  };
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
        <div className="nav-icon ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            className="bi bi-list "
            viewBox="0 0 16 16"
            onClick={handleMenuOpen}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <div className="col-lg-3 text-center">
          <Button text="About us" style={`about-btn`} />
        </div>
      </div>

      <DropDownMenu trigger={openMenu} setTrigger={setOpenMenu} />
    </nav>
  );
}

export default Nav;
