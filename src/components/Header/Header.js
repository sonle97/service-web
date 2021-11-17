import React from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

import { Container } from "./style";
import { Row } from "../layout";
import Logo from "../../images/logo_dark.png";
import Navbar from "./Navbar/Navbar";
import { Icon } from "../ui/Icon";

const HeaderInfo = () => {
  return (
    <Container>
      <div className="bg-yellow-1 w-4/12 bg-yellow" />
      <div className="absolute flex items-center justify-center w-full justify-between top-header">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <Row>
          <Row>
            <Icon>
              <MdEmail size="23" />
            </Icon>
          </Row>

          <Row>
            <Row>
              <Icon>
                <MdPhone size="23" />
              </Icon>
            </Row>
          </Row>

          <Row>
            <Row>
              <Icon>
                <MdLocationOn size="23" />
              </Icon>
            </Row>
          </Row>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/diettmoitangoc"
            title="https://www.facebook.com/diettmoitangoc"
          >
            <Icon className="contact-icon">
              <FaFacebookF size="23" />
            </Icon>
          </a>
        </Row>
      </div>
    </Container>
  );
};

const Header = () => {
  return (
    <React.Fragment>
      <HeaderInfo />
      <Navbar />
    </React.Fragment>
  );
};

export default Header;
