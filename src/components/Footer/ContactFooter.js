import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

import { Row } from "../layout";
import { Icon } from "../ui/Icon";

const ContactFooter = () => {
  return (
    <Row className="justify-between contact-footer">
      <a
        className="row"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/diettmoitangoc"
        title="https://www.facebook.com/diettmoitangoc"
      >
        <Icon className="contact-icon">
          <FaFacebookF size="23" />
        </Icon>
      </a>

      <Row className="row">
        <Icon>
          <MdPhone size="23" />
        </Icon>
        <div className="text-left">
          <p>0941.386.676</p>
          <p>0347.366.345</p>
          <p>0986.223.390</p>
        </div>
      </Row>

      <Row className="row">
        <Icon>
          <MdEmail size="23" />
        </Icon>
        <p>son.lequang97@gmail.com</p>
      </Row>

      <Row>
        <Icon>
          <MdLocationOn size="23" />
        </Icon>
        <div className="text-left">
          <p>CN1: Xã Hạ Trạch - Bố Trạch - Quảng Bình</p>
          <p>CN2: P.Tân Đông Hiệp - Dĩ An - BD</p>
        </div>
      </Row>
    </Row>
  );
};

export default ContactFooter;
