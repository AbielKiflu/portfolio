import React from "react";
import "./about.css";
import image_pic from "../assets/image/me.jpg";
import myCv from "../assets/pdf/cv.pdf";

const About = () => {
  return (
    <div className="about">
      <div className="photo">
        <img src={image_pic} alt="my picture" />
      </div>
      <div className="intro">
        <p className="intro__name">
          Hi, My name is <br />
        </p>
        <h2>Abiel Kiflu </h2> I'm a<h2>WEB DEVELOPER</h2>
        <p>
          “background” element and apply filters to the backdrop directly. The
          backdrop-filter property allows you to eliminate this extra
          “background” element and apply filters to the backdrop directly.
        </p>
        <div className="action">
          <a className="btn" href={myCv} target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a className="btn" href="#contact" rel="noreferrer">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
