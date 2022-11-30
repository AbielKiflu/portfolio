import "./projects.css";
import React, { useRef } from "react";

const Project = () => {
  const carousel = useRef(null);
  const selectedIndex = useRef(1);
  const cardCount = useRef(6);

  function rotateCarousel() {
    var angle = (selectedIndex.current / cardCount.current) * -360;
    carousel.current.style.transform =
      "translateZ(-300px) rotateY(" + angle + "deg)";
  }

  return (
    <div
      className="project"
      onScroll={() => {
        rotateCarousel();
        selectedIndex.current++;
      }}
    >
      <div className="scene">
        <div className="carousel" ref={carousel}>
          <div
            className="carousel__card"
            onClick={() => {
              rotateCarousel();
              selectedIndex.current++;
            }}
          >
            A
          </div>
          <div
            className="carousel__card"
            onClick={() => {
              rotateCarousel();
              selectedIndex.current++;
            }}
          >
            B
          </div>
          <div
            className="carousel__card"
            onClick={() => {
              rotateCarousel();
              selectedIndex.current++;
            }}
          >
            C
          </div>
          <div
            className="carousel__card"
            onClick={() => {
              rotateCarousel();
              selectedIndex.current++;
            }}
          >
            D
          </div>
          <div
            className="carousel__card"
            onClick={() => {
              rotateCarousel();
              selectedIndex.current++;
            }}
          >
            F
          </div>
          <div
            className="carousel__card"
            onClick={() => {
              rotateCarousel();
              selectedIndex.current++;
            }}
          >
            G
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
