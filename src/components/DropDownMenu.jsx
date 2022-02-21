import React from "react";

function DropDownMenu({ trigger, setTrigger }) {
  return trigger ? (
    <div className="dropDown-menu text-center">
      <div className=" text-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="white"
          className="bi bi-x-lg close-icon"
          viewBox="0 0 16 16"
          onClick={() => setTrigger(false)}
        >
          <path
            fillRule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
          />
          <path
            fillRule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
          />
        </svg>
      </div>
      <ul>
        <li className="list-menu-item1">Browser</li>
        <li className="list-menu-item2">Bootcamps</li>
        <li className="list-menu-item3">How It Works</li>
        <li className="list-menu-item4">Testemonial</li>
      </ul>
    </div>
  ) : (
    ""
  );
}

export default DropDownMenu;
