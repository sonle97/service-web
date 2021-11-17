import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  BackgroundMobile,
} from "./Navbar.elements";
import Logo from "../../../images/logo_dark.png";
import { SidebarData } from "./NavbarData";
import SubNavbar from "./SubNavbar";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

function Navbar() {
  const { width } = useWindowDimensions();

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleToggleMenu = () => setIsOpenMobileMenu(!isOpenMobileMenu);

  const closeMobileMenu = () => setIsOpenMobileMenu(false);

  useEffect(() => {
    if (isOpenMobileMenu && width <= 768) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpenMobileMenu, width]);

  document.body.addEventListener("click", () => {
    if (width <= 768) {
      closeMobileMenu();
    }
  });

  return (
    <React.Fragment>
      <NavbarContainer className="header">
        <MobileIcon onClick={handleToggleMenu}>
          {isOpenMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleToggleMenu} isOpenMobileMenu={isOpenMobileMenu}>
          <NavItem>
            <div className="bg-yellow-1 justify-center py-1 hidden logo-mobile">
              <img src={Logo} alt="logo" />
            </div>
          </NavItem>
          {SidebarData.map((sidebar, idx) => (
            <SubNavbar sidebar={sidebar} key={idx} />
          ))}
        </NavMenu>

        <div className="logo-navbar hidden">
          <img src={Logo} alt="logo" />
        </div>
      </NavbarContainer>
      <BackgroundMobile isOpenMobileMenu={isOpenMobileMenu} />
    </React.Fragment>
  );
}

export default Navbar;
