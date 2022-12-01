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
              Don't have a time?
            </span>
          </h5>
          <p>
            When you don't have a time to go to repair shop, let the mechanic
            come to your place.
          </p>
          <p> All you have to do is;</p>
          <ul>
            <li>Set your appointment,</li>
            <li>Continue on your daily life,</li>
            <li>Welcome the mechanic at your place,</li>
            <li>Get your car repaired,</li>
            <li>Pay online,</li>
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
`;
export default MiddleRight;
