import React from "react";
import "./home.css";
import {
  FaHome,
  FaGraduationCap,
  FaFileCode,
  FaRegAddressBook,
} from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="home">
      <nav className="nav">
        <FaHome style={{ width: "2rem", height: "2rem" }} />
        <FaGraduationCap style={{ width: "2rem", height: "2rem" }} />
        <FaRegAddressBook style={{ width: "2rem", height: "2rem" }} />
        <FaFileCode style={{ width: "2rem", height: "2rem" }} />
      </nav>
    </section>
  );
};

export default Home;
