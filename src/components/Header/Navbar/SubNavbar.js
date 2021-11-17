import React, { useState } from "react";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import {
  NavItem,
  NavLinks,
  DropdownLink,
  SidebarLabel,
  SubnavWrapperMobile,
  NavDropdownDesktop,
} from "./Navbar.elements";

const SubMenu = ({ sidebar }) => {
  const [isOpenSubnav, setIsOpenSubnav] = useState(false);

  const showSubnav = () => setIsOpenSubnav(!isOpenSubnav);

  return (
    <>
      <NavItem className="items-center">
        <NavLinks exact to={sidebar.path} activeClassName="active">
          {sidebar.title}
        </NavLinks>
        {sidebar.subNav && sidebar.subNav.length && (
          <div
            className="icon cursor-pointer"
            onClick={sidebar.subNav && showSubnav}
          >
            {isOpenSubnav ? (
              <BiChevronUp size={25} />
            ) : (
              <BiChevronDown size={25} />
            )}
          </div>
        )}

        {sidebar.subNav && sidebar.subNav.length && (
          <NavDropdownDesktop className="nav-dropdown hidden">
            {sidebar.subNav.map((sub, idx) => (
              <DropdownLink
                to={sub.path}
                key={idx}
                activeClassName="active-sub"
              >
                <SidebarLabel>{sub.title}</SidebarLabel>
              </DropdownLink>
            ))}
          </NavDropdownDesktop>
        )}
      </NavItem>

      <SubnavWrapperMobile>
        {isOpenSubnav &&
          sidebar.subNav &&
          sidebar.subNav.map((item, index) => {
            return (
              <DropdownLink
                to={item.path}
                key={index}
                subnav={isOpenSubnav}
                activeClassName="active-sub"
              >
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          })}
      </SubnavWrapperMobile>
    </>
  );
};

export default SubMenu;
