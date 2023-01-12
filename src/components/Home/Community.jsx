import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const Community = () => {
  return (
    <section className="community">
      <Container>
        <Row>
          <Col xl="12">
            <div className="community__area">
              <h1>
                A Sports collection built with utility and <br />
                <span> community at its foundation</span>
              </h1>
              <h1>
                Once inside, you will have exclusive access to FAFC related
                drops, meetups and IRL events, and access to upcoming projects!
              </h1>
            </div>
          </Col>
          <Col xl="12">
            <Accordion
              className="accordion"
              defaultActiveKey={["0"]}
              alwaysOpen
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What Is the Mint Date for FAFC?
                </Accordion.Header>
                <Accordion.Body>TBA</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What intellectual property rights do FAFC holders receive?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Will the Football Ape Fan Club NFT be revealed right away?
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Community;
