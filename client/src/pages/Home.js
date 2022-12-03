import React from "react";
import HomeCarousel from "../components/homePage/HomeCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfoLeft from "../components/homePage/InfoLeft";
import InfoRight from "../components/homePage/InfoRight";
import styled from "styled-components";
import MiddleLeft from "../components/homePage/MiddleLeft";
import MMiddle from "../components/homePage/MMiddle";
import MiddleRight from "../components/homePage/MiddleRight";
import PaymentInfo from "../components/homePage/PaymentInfo";

function Home() {
  return (
    <>
      <Container fluid>
        <Row style={{ marginTop: "20px" }}>
          <Col className="d-flex align-items-center justify-content-center">
            <InfoLeft />
          </Col>
          <Col md={5}>
            <HomeCarousel />
          </Col>
          <Col className="d-flex align-items-center">
            <InfoRight />
          </Col>
        </Row>
      </Container>
      <Divider>How it works?</Divider>
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col md={4} className="d-flex align-items-center ">
            <MiddleLeft />
          </Col>
          <Col md={4} className="d-flex align-items-center ">
            <MMiddle />
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <MiddleRight />
          </Col>
        </Row>
      </Container>
      <Divider>Pay Online</Divider>
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col className="d-flex align-items-center ">
            <PaymentInfo />
          </Col>
        </Row>
      </Container>
    </>
  );
}
const Divider = styled.div`
  width: 50vw;
  background-color: #497174;
  color: #eff5f5;
  text-align: center;
  font-weight: 500;
  padding: 0.5rem 1rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 1rem;
`;

export default Home;
