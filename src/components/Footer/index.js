import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper } from "../layout";
import { Content, Line } from "./style";
import ContactFooter from "./ContactFooter";
import FooterWrapper from "./FooterWrapper";
import { scrollToTop } from "../ButtonScrollOnTop";

const Footer = () => {
  return (
    <React.Fragment>
      <Container className="text-center w-full h-full bg-black-3">
        <Wrapper>
          <Content>
            <ContactFooter />
            <Line />
            <FooterWrapper />
          </Content>
        </Wrapper>
        <div className="bg-black-4 text-gray-1 p-4">
          Copyright 2021{" "}
          <Link to="/" className="text-yellow-1" onClick={scrollToTop}>
            Dietmoitangoc.com
          </Link>{" "}
          . All Right Reserved - Design By{" "}
          <span className="text-yellow-1">Dietmoitangoc</span>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
