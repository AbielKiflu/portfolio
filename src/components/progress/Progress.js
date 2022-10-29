import React from "react";
import "./progress.css";

const Progress = ({ name }) => {
  return (
    <>
      <svg width="400" height="100" className="progress">
        <path d="M0 20 H400" />
      </svg>
      <svg width="400" height="100" className="parent">
        <path d="M0 20 H400" />
      </svg>
    </>
  );
};

export default Progress;
