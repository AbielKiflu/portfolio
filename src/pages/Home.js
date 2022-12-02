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
import Header from "../components/header/Header";

const Home = () => {
  const icons = { width: "2rem", height: "2rem" };
  return (
    <section className="home" id="home">
      <Header />

      <section className="about" id="about">
        <About />
      </section>

      <section className="skill" id="skill">
        <Skills />
      </section>

      <section className="project" id="project">
        <Project />
      </section>
    </section>
  );
};

export default Home;
