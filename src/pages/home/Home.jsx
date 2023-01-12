import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <section className="hero">
      <Container>
        <Row className="gx-5">
          <Col xl="6">
            <div className="hero__content">
              <h4>Welcome to the</h4>
              <h1>Football Ape Fan Club (FAFC)</h1>
              <p>
                <strong>“The Football World Cup”</strong> is one of the most
                anticipated sporting events in the world, and we are incredibly
                excited to announce launch of Football Ape Fan Club. We are
                launching collection consisting of <strong>7,910 NFTs.</strong>
                Our collection is inspired by our legendary footballers of all
                time.
              </p>
              <Button className="btn btn-dark hero__btn">Join Discord</Button>
            </div>
          </Col>
          <Col xl="6">
            <div className="clock">
              <div className="bg-black hero__clock ">
                <div className="extra__part  ">
                  <span></span>
                </div>
                <h2 className="text-white text-center clock__title">
                  Phase I Mint Starts In
                </h2>
                <div className="clock__item">
                  <div className="clock__single__item">
                    <h1>00</h1>
                    <span>Days</span>
                  </div>
                  <div className="clock__single__item">
                    <h1>05</h1>
                    <span>Hours</span>
                  </div>
                  <div className="clock__single__item">
                    <h1>50</h1>
                    <span>Minutes</span>
                  </div>
                  <div className="clock__single__item">
                    <h1>00</h1>
                    <span>Seconds</span>
                  </div>
                </div>
                <div className="clock__item__bottom">
                  <div className="text-center">
                    <Button className="">
                      More than 10 Years of Experience
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
