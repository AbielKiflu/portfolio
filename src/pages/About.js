import React from "react";
import "./about.css";
import image_pic from "../assets/image/me.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="intro">
        <div className="photo">
          <img src={image_pic} alt="my picture" />
        </div>
        <h2>
          Hi, My name is Abiel Kiflu <br />
          I'm a <br />
          <b>WEB DEVELOPER</b>
        </h2>
        <div className="action">
          <button className="btn">Download CV</button>
          <button className="btn">Hire Me </button>
        </div>
      </div>
    </div>
  );
};

export default About;
