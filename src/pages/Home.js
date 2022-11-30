import React from "react";
import "./home.css";
import {
  FaHome,
  FaGraduationCap,
  FaFileCode,
  FaUserAlt,
  FaRegAddressBook,
} from "react-icons/fa";
import Skills from "./Skills";

const Home = () => {
  const icons = { width: "2rem", height: "2rem" };
  return (
    <>
      <section id="home" className="home">
        <nav className="nav">
          <a href="#home">
            <FaHome style={icons} />
            <span>Home</span>
          </a>

          <a href="#about">
            <FaUserAlt style={icons} />
            <span>About</span>
          </a>

          <a href="#skill">
            <FaGraduationCap style={icons} />
            <span>Skills</span>
          </a>
          <a href="#contact">
            <FaFileCode style={icons} />
            <span>Contact</span>
          </a>
          <a href="#project">
            <FaRegAddressBook style={icons} />
            <span>Project</span>
          </a>
        </nav>
      </section>
      <section id="skill" className="skill">
        <Skills />
      </section>
    </>
  );
};

export default Home;
