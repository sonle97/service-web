import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FooterWrapperStyle } from "./style";
import Logo from "../../images/footer_logo.png";

const FooterWrapper = () => {
  return (
    <FooterWrapperStyle className="flex justify-between">
      <div className="col w-1/2">
        <Link to="/">
          <img src={Logo} alt="logo" className="pb-10 " />
        </Link>
        <p className="text-left text-gray-1 pb-4 pr-6">
          Fusce et sem elementum, mis nibh nec, tincidunt ipsum etiau eu ctor
          turpis. Quisque sitmi elit. Cras vel dui vel orciarel gravida.
          tincidunt ipsum etiau.
        </p>
        <div className="flex ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/diettmoitangoc"
          >
            <FaFacebookF
              size={15}
              className="text-gray-1 hover:text-yellow-1 mr-3"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/diettmoitangoc"
          >
            <FaYoutube
              size={15}
              className="text-gray-1 hover:text-yellow-1 mr-3"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/diettmoitangoc"
          >
            <FaInstagram
              size={15}
              className="text-gray-1 hover:text-yellow-1"
            />
          </a>
        </div>
      </div>
      <div className="col w-1/3 text-left">
        <h4 className="title">Usefull Link</h4>
        <ul className="text-gray-1">
          <Link to="/">
            <li type="circle">About Smartpest Company</li>
          </Link>
          <Link to="/">
            <li type="circle">Pest ControlCompany Profile</li>
          </Link>
          <Link to="/">
            <li type="circle">Pest Company Team</li>
          </Link>
          <Link to="/">
            <li type="circle">Pest Team</li>
          </Link>
        </ul>
      </div>
      <div className="col w-1/3 text-left">
        <h4 className="title">Service</h4>
        <ul className="text-gray-1">
          <Link to="/">
            <li type="circle">Residential Pest Control.</li>
          </Link>
          <Link to="/">
            <li type="circle">Mouse Control</li>
          </Link>
          <Link to="/">
            <li type="circle">Commercial Pest Control.</li>
          </Link>
          <Link to="/">
            <li type="circle">Pest Prevention.</li>
          </Link>
        </ul>
      </div>
    </FooterWrapperStyle>
  );
};

export default FooterWrapper;
