import React, { useRef } from "react";
import "./carousel.css";
import styled from "styled-components";

const Carousel = ({ data }) => {
  const carousel = useRef(null);
  const selectedIndex = useRef(1);
  const cardCount = useRef(5);

  // a function that rotates the carousel
  const rotateCarousel = () => {
    var angle = (selectedIndex.current / cardCount.current) * -360;
    carousel.current.style.transform =
      "translateZ(-300px) rotateY(" + angle + "deg)";
    selectedIndex.current++;
  };

  return (
    <Scene>
      <Carousels ref={carousel}>
        <CarouselCards number={1} onClick={rotateCarousel}>
          A
        </CarouselCards>
        <CarouselCards number={2} onClick={rotateCarousel}>
          B
        </CarouselCards>
        <CarouselCards number={3} onClick={rotateCarousel}>
          C
        </CarouselCards>
        <CarouselCards number={4} onClick={rotateCarousel}>
          D
        </CarouselCards>
        <CarouselCards number={5} onClick={rotateCarousel}>
          E
        </CarouselCards>
      </Carousels>
    </Scene>
  );
};

export default Carousel;

const Scene = styled.div`
  width: var(--card-height);
  height: var(--card-width);
  position: relative;
  background: transparent;
  perspective: 1000px;
  border-radius: 1rem;
  transform: rotateZ(90deg);
  transition: transform 1s;
`;

const Carousels = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  transform: translateZ(-300px);
  transform-style: preserve-3d;
  transition: transform 1s;
`;

const CarouselCards = styled.div`
  position: absolute;
  color: black;
  background: var(--glass-color);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  height: 100%;
  box-shadow: 0.2rem 0.3rem 0.5rem var(--bg-color);
  border-top: 1px solid rgb(206, 204, 204);
  border-left: 1px solid rgb(206, 204, 204);
  backdrop-filter: blur(5px);
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: rotateY(calc(var(--angleY) * ${(props) => props.number}))
    rotateZ(var(--angleZ)) translateZ(var(--translateZ));
`;
