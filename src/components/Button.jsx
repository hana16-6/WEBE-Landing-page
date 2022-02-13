import React from "react";

function Button(props) {
  return (
    <button className={`${props.style}`} type="button">
      {props.text}
    </button>
  );
}

export default Button;
