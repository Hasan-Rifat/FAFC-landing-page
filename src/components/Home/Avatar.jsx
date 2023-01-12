import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import bottomArrow from "../../assets/images/bottom arrow.png";
import avater from "../../assets/images/avater.png";

const Avatar = () => {
  return (
    <section className="avatar">
      <Container>
        <Row className="p-5 avatar_row">
          <Col xl="6">
            <div className="avatar__area">
              <div className="avatar__content ">
                <div className="avatar__icon">
                  <img src={bottomArrow} alt="" />
                </div>
                <h1 className="text-white">
                  <span> FAFC NFTs</span> are more than just an avatar!
                </h1>
                <p className="text-white">
                  Football Ape Fan Club is an NFT collection consisting of{" "}
                  <strong>7,910 FootballApeFC NFT</strong> on the Ethereum
                  blockchain. We will create an NFT Metaverse. We will bring
                  more utility for every NFT project.
                  <br /> <br />
                  Every FAFC holder will able to Claim a Mutant Football Ape and
                  Baby Football Ape NFT for free. Only gas fees will be charged.
                </p>
                <div className="avatar__bottom__content">
                  <div className="avatar__bottom">
                    <p className="text-white">
                      If you hold <strong>1 FAFC</strong> you can claim
                      <strong>1 Mutant</strong>
                      and <strong>1 BFAFC</strong> Nft for free. If you hold 50
                      FAFC you can claim <strong>50 Mutants</strong> and{" "}
                      <strong>50 BFAFC Nft for free.</strong> (Only Gas Fees
                      will be Charged)
                    </p>
                  </div>
                  <div className="avatar__button__area">
                    <Button className="avatar__button__area__button">
                      <span className="avatar__button__area__span"></span>{" "}
                      <span>Example</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="6">
            <div className="avatar__img">
              <img src={avater} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Avatar;
