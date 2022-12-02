import "./projects.css";
import React, { useRef } from "react";
import styled from "styled-components";
import Card from "../components/card/Card";

const Project = () => {
  return (
    <section id="project" className="project">
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default Project;
