import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [hamburger, setHamburger] = useState(true);
  return (
    <nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 100 100"
        className="logo"
      >
        <circle cx="50" cy="50" r="46" className="logocircle" />
        <path strokeWidth="5" d="M44,18L75,89" className="logoline1"></path>
        <path strokeWidth="5" d="M16,64L75,49" className="logoline2"></path>
        <path strokeWidth="5" d="M16,90L47,17" className="logoline3"></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="50"
        height="50"
        onClick={() => setHamburger(!hamburger)}
        className="hamburger"
      >
        <line x1="5" y1="22" x2="95" y2="22" />
        <line x1="5" y1="72" x2="95" y2="72" />
        <line x1="5" y1="47" x2="95" y2="47" />
      </svg>

      <div className={hamburger ? "navMenu" : " navMenu hide"}>
        <Link
          className="navItem"
          to="/about"
          onClick={() => setHamburger(!hamburger)}
        >
          About
        </Link>

        <Link
          className="navItem"
          to="/skills"
          onClick={() => setHamburger(!hamburger)}
        >
          Skills
        </Link>

        <Link
          className="navItem"
          to="/project"
          onClick={() => setHamburger(!hamburger)}
        >
          Projects
        </Link>

        <Link
          className="navItem btn"
          to="/contact"
          onClick={() => setHamburger(!hamburger)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
