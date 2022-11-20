import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <nav className="navbar">
      <svg
        viewBox="0 0 10 8"
        width="30"
        className="hamburger"
        onClick={() => setHamburger(!hamburger)}
      >
        <path d="M1 1h8M1 4h 8M1 7h8" />
      </svg>

      <NavItem
        hamburger={hamburger}
        setHamburger={setHamburger}
        name={"About"}
      />

      <NavItem
        hamburger={hamburger}
        setHamburger={setHamburger}
        name={"Experience"}
      />

      <NavItem
        hamburger={hamburger}
        setHamburger={setHamburger}
        name={"Project"}
      />

      <NavItem
        hamburger={hamburger}
        setHamburger={setHamburger}
        name={"Contact"}
      />
    </nav>
  );
};

const NavItem = ({ hamburger, name, setHamburger }) => {
  return (
    <Link
      className={hamburger ? "navbarMenu show" : "navbarMenu hide"}
      to={"/" + name.toLowerCase()}
      onClick={() => setHamburger(false)}
    >
      {name}
    </Link>
  );
};

export default Header;
