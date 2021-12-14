import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import { Title, Button, Section, Box, Text } from "../../components/Core";
import Slider from "../../components/Slider";
import Chero from "../../components/Card/hero";
import { device } from "../../utils";
import imgL from "../../assets/image/png/portrait-1.png";
import imgHeader from "../../assets/image/webp/head.svg";

const ImgRight = styled.img`
  max-width: 100%;
`;
const Hero = () => {
  const chero = [<Chero />, <Chero />, <Chero />];
  return (
    <>
      <div style={{ backgroundColor: "#e6e6e6", display: "flex", justifyContent: "center" }}>
        <div className="" style={{ width: "90%" }}>
          <ImgRight src={imgHeader} alt="abc" />
        </div>
      </div>
    </>
  );
};

export default Hero;
