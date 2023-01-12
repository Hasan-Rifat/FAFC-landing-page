import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/images/about 1.png";
import img2 from "../assets/images/about 2.png";
import img3 from "../assets/images/about 3.png";
import img4 from "../assets/images/about 4.png";
import img5 from "../assets/images/about 5.png";
import img6 from "../assets/images/about 6.png";
import img7 from "../assets/images/about 7.png";
import img8 from "../assets/images/about 8.png";
import img9 from "../assets/images/about 9.png";
import aboutImg from "../assets/images/about.png";

const About = () => {
  const images = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
    {
      id: 9,
      img: img9,
    },
  ];
  return (
    <section className="about">
      <Container>
        <Row className="g-5">
          <Col xl="6">
            <div className="about__images__section">
              <div className="about__images">
                <div className="about__img">
                  <img src={aboutImg} alt="" />
                </div>
                <div className="top-left"></div>
                <div className="bottom-right"></div>
                <div className="about__images__items">
                  {images.map((img) => (
                    <div className="about__image" key={img.id}>
                      <img src={img.img} alt="about__image" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col xl="6">
            <div className="our__fan__club p-5">
              <h4>About</h4>
              <h1 className="text-white">
                Our Fan <span>Club</span>
              </h1>
              <p className="text-white">
                <strong>7,910 Football Ape Fan Club</strong> NFT Collection |
                Ethereum blockchain | FAFC Gholders will able to Claim Baby FAFC
                and Mutant FAFC for free (Only Gas Fee will be charged) <br />{" "}
                <br /> Holder of FAFC will get 4 or more High-Quality Sports
                related <strong>NFT Projects Accessible for Free</strong>, These
                4 plus projects will be launched by Football Ape Fan Club team
                in a span of one year. We will create a Sport Metaverse. <br />{" "}
                <br /> Every FAFC holder will able to claim NFTs in multiple
                Upcoming NFTs project like Baby FAFC, Mutant FAFC, NFL NFTs and
                NBA NFTs and More in a period of one year{" "}
                <strong>2022-2023</strong>. <br /> <br /> These are upcoming
                project from Football Ape Fan Club.
              </p>
              <div className="about__btn">
                <Button className="btn btn__1">Register on Permint</Button>
                <Button className="btn btn__2"> Linktree</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
