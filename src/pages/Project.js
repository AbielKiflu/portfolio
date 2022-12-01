import "./projects.css";
import Carousel from "../components/carousel/Carousel";
import React, { useRef } from "react";
import styled from "styled-components";

const Project = () => {
  const data = [
    {
      id: 1,
      title: "Frontend",
      data: ["Java Script", "CSS", "ReactJs", "Vue"],
    },
    {
      id: 2,
      title: "Backend",
      data: ["Laravel php", "ASP DOTNET", "NodeJs"],
    },
    {
      id: 3,
      title: "Tools",
      data: ["Github", "Figma", "Trello"],
    },
    {
      id: 4,
      title: "Databses",
      data: ["MySql", "Postgre SQL", "Microsoft SQL"],
    },
    {
      id: 5,
      title: "Others",
      data: ["Java SE", "Android Studio", "Linux", "Docker"],
    },
  ];

  return <Carousel data={data} />;
};

export default Project;
