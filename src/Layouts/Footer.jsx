import React from "react";
import { Link } from "react-router-dom";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import logoImg from "../assets/images/logo.png";
import quotation from "../assets/images/quotation.png";
import { Container } from "react-bootstrap";
import footer from "../assets/images/footer.png";

const Footer = () => {
  return (
    <footer className="footer__bg">
      <section className="contact-area " id="contact">
        <div className="footer__img">
          <img src={footer} alt="" />
        </div>
        <div className="bg-black">
          <Container className=" footerupHero">
            <div className="absoulteMk">
              <img src={quotation} alt="quatasionImg" />
            </div>
            <h1>
              Football is not just a game, but an <br />
              emotion for billion of people!
            </h1>
          </Container>
        </div>
        <div className="footerTx bg-black">
          <div className="container ">
            <div className="textContainer">
              <h1>Football Ape Fan Club NFT Holder Tier Reward System</h1>
              <p className="fstp">
                Holders with three or more Football Ape Fan Club NFTs will be
                eligible for an exclusive giveaway of 79 Football Ape Fan Club
                NFTs <span>(1 FAFC NFT per Holder)</span> to 79 Holders!
              </p>
              <p className="fstp">
                The top <span>9 Football Ape Fan Club NFT</span> holders will be
                able to work closely with the Football Ape Fan Club Team and our
                metaverse development team. These 9 holders will get priority
                updates and have exclusive discord in-chat access with Football
                Ape Fan Club founders. It’s Your Ticket to Elite-Level
                Networking Events with Business Leaders, Entrepreneurs. On the
                contingency that all Football Ape Fan Club NFTs have been
                minted.
              </p>
            </div>
            <div className=" footer">
              <div className=" footerlogo">
                <img src={logoImg} alt="logoImg" />
              </div>
              <div className="contact-social">
                <ul>
                  <li>
                    <Link to="/" className="hover-target">
                      <BsTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover-target">
                      <BsDiscord />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover-target">
                      <FaTelegram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover-target">
                      <SiMedium />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="copyright">
                <p>Copyright © 2021. FAFC. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
