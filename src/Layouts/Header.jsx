import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../style/home.css";

const Header = () => {
  return (
    <Navbar expand="xl" className="hero p-2" sticky="top">
      <Container>
        <Navbar.Brand>
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link
                className=" text-nav text-black text-decoration-none nav__active"
                to="/"
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-nav text-black text-decoration-none"
                to="/about-us"
              >
                About us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-nav text-black text-decoration-none"
                to="/nfts"
              >
                Nfts
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-nav text-black text-decoration-none"
                to="/roadmap"
              >
                Roadmap
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-nav text-black text-decoration-none"
                to="/faqs"
              >
                Faqs
              </Link>
            </Nav.Link>
          </Nav>
          <Navbar>
            <Button className="btn btn-dark ">Join Discord</Button>
          </Navbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
