import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

function MiddleRight() {
  return (
    <Container>
      <Row>
        <Col>
          <h5>
            <span style={{ color: "#eb6440", textDecoration: "underline" }}>
              Schedule an appointment?
            </span>
          </h5>
          <p>
            If you are not in a tight schedule, take your car to repair shop.
          </p>
          <p> All you have to do is;</p>
          <ul>
            <li>Select a repair shop,</li>
            <li>Set your appointment,</li>
            <li>Take your car to repair shop,</li>
            <li>Wait while your car getting repaired,</li>
            <li>Pay online, Pay cheaper prices!</li>
          </ul>
          <p>It is that much easy.</p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <Button>
            <Nav.Link href="#">Get an appointment</Nav.Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
const Button = styled.div`
  display: block;
  background-color: #d6e4e5;
  text-align: center;
  color: #497174;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  :hover {
    background-color: #497174;
    color: white;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
  }
`;
export default MiddleRight;
