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
        <line x1="44" y1="18" x2="75" y2="89" />
        <line x1="16" y1="64" x2="75" y2="49" />
        <line x1="16" y1="90" x2="47" y2="17" />
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
        <Link className="navItem" to="/">
          About
        </Link>
        <Link className="navItem" to="/">
          Project
        </Link>
        <Link className="navItem" to="/">
          HireMe
        </Link>
      </div>
    </nav>
  );
};

export default Header;
