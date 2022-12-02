import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

function MMiddle() {
  return (
    <Container>
      <Row>
        <Col>
          <h5>
            <span style={{ color: "#eb6440", textDecoration: "underline" }}>
              Urgent call?
            </span>
          </h5>
          <p>
            Don't panic! Anybody can have a broken car in the middle of the
            street.
          </p>
          <p> All you have to do is;</p>
          <ul>
            <li>Go to appointment page,</li>
            <li>Select urgent call,</li>
            <li>Share your location,</li>
            <li>One of the mechanic will contact you,</li>
            <li>Afterwards, Pay online,</li>
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
export default MMiddle;
