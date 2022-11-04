import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./carusel.css";

const Carusel = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className=" roof head"></div>
        <div className=" roof tail"></div>
        <div className=" roof tailLeft"></div>
        <div className=" roof tailRight"></div>
        <div className=" sides back"></div>
        <div className="sides left"></div>
        <div className="sides right"></div>
        <div className="sides top"></div>
        <div className="sides bottom"></div>
        <div className="sides front"></div>
      </div>
    </div>
  );
};

export default Carusel;
