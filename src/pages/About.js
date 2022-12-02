import React from "react";
import "./about.css";
import image_pic from "../assets/image/me.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="photo">
        <img src={image_pic} alt="my picture" />
      </div>
      <div className="intro">
        Hi, My name is <br />
        <h2>Abiel Kiflu </h2> I'm a<h2>WEB DEVELOPER</h2>
        <p>
          “background” element and apply filters to the backdrop directly. The
          backdrop-filter property allows you to eliminate this extra
          “background” element and apply filters to the backdrop directly.
        </p>
        <div className="action">
          <button className="btn">Download CV</button>
          <button className="btn">Hire Me </button>
        </div>
      </div>
    </div>
  );
};

export default About;
