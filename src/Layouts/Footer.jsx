import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <Link to="/">
                  <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo" />
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum{" "}
                </p>
                <div className="hr"></div>
                <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                <h6>
                  +01 2345 6789 12<span>|</span>+01 2345 6789 12
                </h6>
                <div className="contact-social">
                  <ul>
                    <li>
                      <Link to="/" className="hover-target">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="hover-target">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="hover-target">
                        <i className="fab fa-github"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="hover-target">
                        <i className="fab fa-behance"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="hover-target">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
