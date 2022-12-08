import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { IoFolderOpenSharp } from "react-icons/io5";

const Card = ({ data }) => {
  const iconStyle = { fontSize: "2rem" };

  return (
    <Container>
      <h2 style={{ color: "black" }}>{data.title}</h2>
      <ImageData src={data.image} alt={data.title} />
      <Footer>
        <BsGithub style={iconStyle} />
        <IoFolderOpenSharp style={iconStyle} />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  color: black;
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background: gray;
  padding: 1rem;
  box-shadow: 0.2rem 0.3rem 0.5rem var(--bg-color);
`;

const ImageData = styled.img`
  width: 100%;
  height: 50%;
  src: url(${(prop) => prop.image});
  object-fit: contain;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
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
