import React from "react";
import {
  FaHtml5,
  FaSass,
  FaReact,
  FaPhp,
  FaVuejs,
  FaCss3Alt,
  FaBootstrap,
  FaLinux,
} from "react-icons/fa";
import "./skills.css";

const Skills = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-icon">
          <FaSass className="icon" />
        </div>
      </div>

      <div className="card">
        <div className="card-icon">
          <FaSass className="icon" />
        </div>
      </div>
      <div className="card">
        <div className="card-icon">
          <FaSass className="icon" />
        </div>
      </div>
      <div className="card">
        <div className="card-icon">
          <FaSass className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
