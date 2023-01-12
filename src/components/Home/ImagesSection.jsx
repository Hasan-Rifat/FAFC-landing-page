import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/images/img/1.png";
import img2 from "../../assets/images/img/2.png";
import img3 from "../../assets/images/img/3.png";
import img4 from "../../assets/images/img/4.png";
import img5 from "../../assets/images/img/5.png";
import img6 from "../../assets/images/img/6.png";
import img7 from "../../assets/images/img/7.png";
import img8 from "../../assets/images/img/8.png";
import img9 from "../../assets/images/img/9.png";
import img10 from "../../assets/images/img/10.png";

const ImagesSection = () => {
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
    {
      id: 10,
      img: img10,
    },
  ];
  return (
    <section className="image__section">
      <div className="all__images">
        {images.map((image) => (
          <div className="single__img">
            <img src={image.img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImagesSection;
