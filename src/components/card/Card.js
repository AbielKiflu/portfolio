import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { IoFolderOpenSharp } from "react-icons/io5";

const Card = () => {
  const iconStyle = { fontSize: "2rem" };
  const data = {
    title: "Netflix Clone",
    image: require("../../assets/image/netflix.jpg"),
  };
  return (
    <Container>
      <Detail>
        <h2 style={{ color: "black" }}>{data.title}</h2>
        <ImageData src={data.image} />
      </Detail>
      <BsGithub style={iconStyle} />
      <IoFolderOpenSharp style={iconStyle} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
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

const Detail = styled.div`
  position: absolute;
  height: 90%;
  color: black;
  width: 90%;
  top: -15%;
  left: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
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
