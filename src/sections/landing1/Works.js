import React, { useState, useEffect } from "react";

import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";
import { Section, Box, ListNav } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { designWorks1 } from "../../data";
import Card from "../../components/Card";
import Slider from "../../components/Slider";
import imgHeader from "../../assets/image/webp/head.svg"
import cityImg from "../../assets/image/jpg/city.jpg";
import LogoImg from "../../assets/image/jpg/logo.jpg";
import Chero from "../../components/Card/hero";
import { Center } from "@chakra-ui/layout";
import Partner from '../../components/PartnersSlider/Partner'

// const chero = [<Chero/>,<Chero/>,<Chero/>]
const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
const logos = [LogoImg, LogoImg, LogoImg, LogoImg, LogoImg, LogoImg];
const Works = () => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {
    setItems(designWorks1);
  }, []);

  const filterBy = (cat) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(designWorks1);
    } else {
      const filteredItems = designWorks1.filter((item) => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <div style={{ backgroundColor: "#e6e6e6" }}>
      {/* <!-- Works Area --> */}

      {/*<div style={{maxWidth: '1920px', justifyContent: 'center', margin: 'auto',marginLeft:'100px',marginRight:'100px'}}>*/}
      {/*  <div className="flexCenter">*/}
      {/*    <Slider comps={chero} length={1}  title={'test'}/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div
        style={{
          maxWidth: "1920px",
          justifyContent: "center",
          margin: "auto",
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        <div className="flexCenter">
          <Slider comps={cards} length={5} title={"Бүтээгдэхүүн"} />
        </div>
      </div>

      <img src={cityImg} className="my-4" />

      <Center>
        <div className="grid grid-cols-3 gap-8">
          <Card />
          <Card />
          <Card />
        </div>
      </Center>

      <div
        style={{
          maxWidth: "1920px",
          justifyContent: "center",
          margin: "auto",
          marginLeft: "100px",
          marginRight: "100px",
        }}
      >
        <div className="flexCenter">
          <Partner comps={logos} length={8} />
        </div>
      </div>

      <Section className="position-relative">
        <Container>
          <Box mb="2.5rem" ml="-1.75rem">
            <ListNav className="nav">
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${activeLink === "*" ? "active" : null
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("*");
                  }}
                >
                  Бүх ажилууд
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${activeLink === "branding" ? "active" : null
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("branding");
                  }}
                >
                  Бренд
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${activeLink === "ux-design" ? "active" : null
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("ux-design");
                  }}
                >
                  дизайн
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${activeLink === "photography" ? "active" : null
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("photography");
                  }}
                >
                  График
                </a>
              </li>
            </ListNav>
          </Box>
        </Container>

        <Container fluid>
          <Masonry
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >
            {items.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="filtr-item">
                <WorkCard workItem={item} link={item.link} mb="30px" />
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </div>
  );
};

export default Works;
