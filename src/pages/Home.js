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
import Project from "./Project";
import About from "./About";

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

          <a href="#project">
            <FaFileCode style={icons} />
            <span>Project</span>
          </a>

          <a href="#contact">
            <FaRegAddressBook style={icons} />
            <span>Contact</span>
          </a>
        </nav>
      </section>
      <section id="project" className="project">
        <Project />
      </section>
      <section id="about" className="about">
        <About />
      </section>
    </>
  );
};

export default Home;
