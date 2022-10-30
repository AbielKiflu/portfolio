import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ name }) => {
  return (
    <nav className="navbar">
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/project">Project</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
