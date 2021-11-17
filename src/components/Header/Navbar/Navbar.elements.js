import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const NavbarContainer = styled.div`
  /* position: sticky;
  top: -1px; */
  position: relative;
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: #f7f7f7;
  align-items: center;
  font-size: 1.2rem;
  margin-top: -35px;
  z-index: 99;
  box-shadow: 0px 1px 4px #888888;
  .logo-navbar {
    padding: 4px;
  }
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }

  @media screen and (max-width: 818px) {
    padding-right: 15px;
    padding-left: 15px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 10px;
    .logo-navbar {
      display: block;
    }
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    position: absolute;
    height: 100vh;
    overflow-y: auto;
    z-index: 9999;
    top: 0px;
    left: ${({ isOpenMobileMenu }) => (isOpenMobileMenu ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
    justify-content: flex-start;
  }
`;

export const NavItem = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
  margin-right: 10px;
  position: relative;
  .icon {
    display: none;
  }

  &:hover .nav-dropdown {
    display: block;
    left: 0;
    transform: translate(0%, 5px);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ddbb00;
    padding: 0px;
    margin-right: 0;

    &:hover {
      background-color: #ddbb00;
      transition: all 0.5s;
      a {
        color: #fff;
      }
      .nav-dropdown {
        display: none;
      }
    }
    & .logo-mobile {
      display: flex;
    }
    & .icon {
      display: block;
      margin-right: 22px;
    }
    &:first-child {
      display: block;
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(NavLink)`
  display: block;
  font-size: 16px;
  cursor: pointer;
  color: #202020;
  text-transform: capitalize;
  padding: 10px 15px;
  font-weight: 500;
  position: relative;
  &.active {
    color: #ddbb00;
  }
  &:hover {
    color: #ddbb00;
  }

  @media screen and (max-width: 818px) {
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 16px 22px;
    width: 100%;
    margin-right: 0;
    text-align: left;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const Button = styled.a`
  display: block;
  font-size: 16px;
  cursor: pointer;
  color: #202020;
  text-transform: capitalize;
  padding: 22px;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #ddbb00;
  &:hover {
    background-color: black;
    color: #ddbb00;
    p {
      transform: rotate(360deg);
      transition: all 0.8s ease;
    }
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BackgroundMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: ${({ isOpenMobileMenu }) => (isOpenMobileMenu ? "block" : "none")};
    position: fixed;
    width: 100%;
    height: 100%;
    top: 125px;
    left: 0;
    transition: opacity 0.25s;
    background: #0b0b0b;
    opacity: 0.6;
    z-index: 2;
  }
`;

export const DropdownLink = styled(NavLink)`
  background: #252831;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 16px;
  &:hover {
    background: green;
    cursor: pointer;
  }
  &.active-sub {
    color: #34d734;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const SubnavWrapperMobile = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const NavDropdownDesktop = styled.div`
  background-color: #f3f3f3;
  padding: 0;
  border: 0;
  box-shadow: none;
  border-top: 3px solid #f58634;
  position: absolute;
  min-width: 220px;
  text-align: left;
  transition: opacity 0.25s;
  display: none;
  & li {
    color: #1a80b6;
    letter-spacing: 0;
    border-right: 0;
    padding: 8px 20px;
    &:hover {
      color: #f58634;
    }
  }
`;
