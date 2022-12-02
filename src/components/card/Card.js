import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <Detail>Hi there</Detail>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  display: flex;
  gap: 1rem;
  background: gray;
  padding: 1rem;
  box-shadow: 0.2rem 0.3rem 0.5rem var(--bg-color);
`;

const Detail = styled.div`
  position: absolute;
  height: 90%;
  width: 90%;
  top: -15%;
  left: 5%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  clip-path: polygon(
    19% 0,
    100% 0,
    100% 44%,
    100% 100%,
    78% 100%,
    50% 100%,
    0 100%,
    0 12%,
    11% 5%
  );
  box-shadow: 0.2rem 0.3rem 0.5rem var(--bg-color);
`;

export default Card;
