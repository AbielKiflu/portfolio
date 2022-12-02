import React, { useRef } from "react";
import styled from "styled-components";
import Progress from "../progress/Progress";

//https://www.youtube.com/watch?v=27JtRAI3QO8

const Carousel = ({ data, Cardi: cardi }) => {
  const carousel = useRef(null);
  const selectedIndex = useRef(1);
  const cardCount = useRef(data.length);

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
        {data.map((card, index) => {
          return (
            <CarouselCards
              number={card.id}
              key={index}
              onClick={rotateCarousel}
            >
              <h3>{card.title}</h3>

              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {card.data.map((d, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.2rem",
                    }}
                  >
                    <p>{d.language}</p>
                    <Progress progress={d.progress} />
                  </div>
                ))}
              </div>
            </CarouselCards>
          );
        })}
      </Carousels>
    </Scene>
  );
};

export default Carousel;

const Scene = styled.div`
  --angleZ: -90deg;
  --angleY: 72deg;
  --translateZ: 250px;
  --card-width: 300px;
  --card-height: 300px;
  width: var(--card-height);
  height: var(--card-width);
  position: relative;
  background: transparent;
  perspective: 1000px;
  border-radius: 1rem;
  transform: rotateZ(90deg);
  transition: transform 1s;

  @media only screen and (min-width: 600px) {
    width: var(--card-width);
    height: var(--card-height);
    transform: rotateZ(0deg);
    transition: transform 1s;
    --angleY: 72deg;
    --angleZ: 0deg;
    --translateZ: 300px;
  }
`;

const Carousels = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  transform: translateZ(-250px);
  transform-style: preserve-3d;
  transition: transform 1s;
`;

const CarouselCards = styled.div`
  position: absolute;
  color: black;
  font-size: 1.2rem;
  background: var(--glass-color);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
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
