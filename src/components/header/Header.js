import React from "react";
import "./header.css";
import styled from "styled-components";
import {
  FaHome,
  FaGraduationCap,
  FaFileCode,
  FaUserAlt,
  FaRegAddressBook,
} from "react-icons/fa";

const Header = () => {
  const icons = { width: "2rem", height: "2rem" };
  return (
    <nav className="nav">
      <a href="#home">
        <FaHome style={icons} />
        <span aria-label="Home Menu Item">Home</span>
      </a>

      <a href="#about">
        <FaUserAlt style={icons} />
        <span aria-label="About Menu Item">About</span>
      </a>

      <a href="#skill">
        <FaGraduationCap style={icons} />
        <span aria-label="Skills Menu Item">Skills</span>
      </a>

      <a href="#project">
        <FaFileCode style={icons} />
        <span aria-label="Prject Menu Item">Project</span>
      </a>

      <a href="#contact">
        <FaRegAddressBook style={icons} />
        <span aria-label="Contact Menu Item">Contact</span>
      </a>
    </nav>
  );
};

export default Header;
