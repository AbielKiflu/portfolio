import React from "react";
import {
  FaHtml5,
  FaSass,
  FaReact,
  FaPhp,
  FaVuejs,
  FaCss3Alt,
  FaBootstrap,
  FaTools,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skill">
      <div className="card">
        <FaCss3Alt className="icon" />
        <h3>
          <i>Frontend</i>
        </h3>
        <ul>
          <li>CSS</li>
          <li>SASS</li>
          <li>React</li>
          <li>Vue</li>
        </ul>
      </div>

      <div className="card">
        <FaPhp className="icon" />
        <h3>
          <i>Backend</i>
        </h3>
        <ul>
          <li>Laravel</li>
          <li>ASP DOTNET</li>
          <li>Java SE</li>
          <li>TailWind</li>
        </ul>
      </div>

      <div className="card">
        <FaTools className="icon" />
        <h3>
          <i>Tools</i>
        </h3>
        <ul>
          <li>VS Code</li>
          <li>Visual Studio</li>
          <li>Android Studio</li>
          <li>Figma</li>
          <li>Trello</li>
        </ul>
      </div>

      <div className="card">
        <FaDatabase className="icon" />
        <h3>
          <i>Databases</i>
        </h3>
        <ul>
          <li>MS SQL Server</li>
          <li>MySQL</li>
          <li>Postgresql</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
