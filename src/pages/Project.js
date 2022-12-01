import "./projects.css";
import Carousel from "../components/carousel/Carousel";
import React, { useRef } from "react";
import styled from "styled-components";

const Project = () => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
    { id: 4, name: "Jane Doe" },
    { id: 5, name: "Jane Doe" },
  ];

  return <Carousel data={data} />;
};

export default Project;
