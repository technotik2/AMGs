import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PaymentInfo() {
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
    </Container>
  );
}

export default PaymentInfo;
