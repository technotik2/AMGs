import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterNav>
      <p>&copy; All rights are reserved to AMGS. 2022</p>
    </FooterNav>
  );
}

export default Footer;

const FooterNav = styled.div`
  width: 100%;
  height: 50px;
  background-color: #eeeeee;
  text-align: left;
  margin-top: 3rem;
  padding: 1rem 1rem;
`;
