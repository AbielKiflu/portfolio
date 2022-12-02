import "./projects.css";
import Carousel from "../components/carousel/Carousel";
import React, { useRef } from "react";
import styled from "styled-components";

const Project = () => {
  const data = [
    {
      id: 1,
      title: "Frontend",
      data: [
        { language: "Java Script", progress: 80 },
        { language: "CSS", progress: 95 },
        { language: "React", progress: 80 },
        { language: "Vue", progress: 30 },
      ],
    },
    {
      id: 2,
      title: "Backend",
      data: [
        { language: "Laravel", progress: 70 },
        { language: "ASP .NET", progress: 45 },
        { language: "NodeJs", progress: 20 },
      ],
    },
    {
      id: 3,
      title: "Tools",
      data: [
        { language: "Github", progress: 90 },
        { language: "Figma", progress: 75 },
        { language: "Trello", progress: 90 },
      ],
    },
    {
      id: 4,
      title: "Databses",
      data: [
        { language: "MySql", progress: 80 },
        { language: "Microsoft SQL", progress: 80 },
        { language: "Postgre SQL", progress: 60 },
      ],
    },
    {
      id: 5,
      title: "Others",
      data: [
        { language: "Java SE", progress: 95 },
        { language: "Android app", progress: 70 },
        { language: "Docker", progress: 50 },
      ],
    },
  ];

  return <Carousel data={data} />;
};

export default Project;
