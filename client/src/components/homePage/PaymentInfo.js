import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cardsPic from "../../images/cards.jpg";

function PaymentInfo() {
  return (
    <Container>
      <Row>
        <Col>
          <p>
            We want our business as simple as possible. We don't want you to
            deal with trying to find cash. It is always easier to pay online
            than keeping the cash in your pocket ready to use.
          </p>
          <p> We are offering fast and secure payments.</p>
          <p>
            When you are done with you car repair, you don't need to talk the
            mechanic about how you are paying.
          </p>
          <p>
            Also, your receipts are sent to you online when you complete your
            payment.
          </p>
        </Col>
        <Col md={4}>
          <img src={cardsPic} className="d-block w-100" alt="Accepted Cards" />
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentInfo;
