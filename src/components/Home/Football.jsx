import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import bottomRight from "../../assets/images/bottomRight.png";
import avater from "../../assets/images/avater.png";
const Football = () => {
  return (
    <section className="football">
      <Container>
        <Row className="p-5 avatar_row">
          <Col xl="5">
            <div className="avatar__area">
              <div className="avatar__content ">
                <div className="avatar__icon">
                  <img src={bottomRight} alt="" />
                </div>
                <h1 className="text-white">
                  What Is Football <span>Ape Fan Club?</span>
                </h1>
                <p className="text-white">
                  A NFT collection consisting of <strong>7,910 NFTs</strong> on
                  the Ethereum blockchain. There are numerous benefits to owning
                  a Football Ape Fan Club NFT. By owning a Football Ape Fan Club
                  NFT
                </p>
                <div className="avatar__bottom__content">
                  <div className="football__area">
                    <div className="football__area__contain text-white">
                      <div className="football__area_div">
                        <p>SUPPLY</p>
                        <h2>7,910 </h2>
                      </div>
                      <div className="football__area_div">
                        <p>PRICE</p>
                        <h2>
                          <strong>O.04ETH</strong> (First Phase)
                        </h2>
                      </div>
                    </div>
                    <div className="football__btn">
                      <Button className="btn btn__1">Buy FAFC</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="7">
            <div className="skill">
              <div class="skill-group">
                <span>Phase I</span>
                <h2>2500 FAFC NFTs, 0.04 ETH Each - TBA</h2>
                <div class="skill-bar">
                  <div class="skill-value skill1"></div>
                </div>
                <span>Phase II</span>
                <h2>2500 FAFC NFTs, 0.06 ETH Each - Upcoming</h2>
                <div class="skill-bar">
                  <div class="skill-value skill2"></div>
                </div>
                <span>Phase III</span>
                <h2>955 FAFC NFTs, 0.08 ETH Each - Upcoming</h2>
                <div class="skill-bar">
                  <div class="skill-value skill3"></div>
                </div>
                <span>Phase IV</span>
                <h2>955 FAFC NFTs, 0.1 ETH Each - Upcoming</h2>
                <div class="skill-bar">
                  <div class="skill-value skill4"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Football;
