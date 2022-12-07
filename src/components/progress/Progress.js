import React from "react";
import styled from "styled-components";
import "./progress.css";

const Progress = ({ progress }) => {
  return (
    <ProgressBar>
      <ProgressInner progress={progress} />
    </ProgressBar>
  );
};

export default Progress;

const ProgressBar = styled.div`
  background: black;
  width: 80%;
  height: 0.6rem;
  border-radius: 0.5rem;
`;

const ProgressInner = styled.div`
  background: gray;
  width: ${(prop) => prop.progress}%;
  height: 0.5rem;
  border-radius: 0.5rem;
  transition: width 2s linear;
`;
