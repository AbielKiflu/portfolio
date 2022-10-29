import React from "react";
import "./button.css";

const Button = ({ name }) => {
  return (
    <button
      className="button"
      onClick={() => {
        console.log("Button");
      }}
    >
      {name}
    </button>
  );
};

export default Button;
