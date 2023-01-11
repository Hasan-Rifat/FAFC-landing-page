import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../style/home.css";
const Home = () => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col xl="2">logo</Col>
          <Col xl="8">
            <div className="text-center">center</div>
          </Col>
          <Col xl="2">
            <p className="text-end">right</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
