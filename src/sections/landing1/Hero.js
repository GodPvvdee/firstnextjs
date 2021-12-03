import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgL from "../../assets/image/png/portrait-1.png";
import imgHeader from "../../assets/image/webp/head.svg";


const ImgRight = styled.img`
  max-width: 100%;
`;
const Hero = () => {
  return (
    <>
      <div className="" style={{marginLeft: '100px',position:'relative', marginRight:'100px'}}>
      <ImgRight src={imgHeader} alt="" />
      </div>
      {/* <!-- Hero Area --> */}

    </>
  );
};

export default Hero;
