import "./projects.css";
import React, { useRef } from "react";
import styled from "styled-components";
import Card from "../components/card/Card";

const Project = () => {
  const data = [
    {
      title: "Netflix Clone",
      image: require("../assets/image/netflix.jpg"),
    },
    {
      title: "Pomodoro",
      image: require("../assets/image/pomodoro.jpg"),
    },
    {
      title: "weather",
      image: require("../assets/image/weather.png"),
    },
  ];
  return (
    <section id="project" className="project">
      {data.map((p) => (
        <Card data={p} />
      ))}
    </section>
  );
};

export default Project;
