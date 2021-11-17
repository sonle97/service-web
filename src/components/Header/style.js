import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #202020;
  font-size: 16px;
  display: flex;
  color: #ffffff;
  position: relative;
  display: flex;
  height: 125px;
  .top-header {
    top: 19px;
    left: 50%;
    transform: translate(-50%, 0);
    max-width: 1050px;
  }
  @media screen and (max-width: 768px) {
    .bg-yellow {
      display: none;
    }
    .top-header {
      justify-content: center;
      .logo {
        display: none;
      }
    }
  }
`;

export const Line = styled.div`
  background-color: #4a4a4a;
  width: 1px;
  height: 43px;
  margin: 0px 20px;
`;

export const Icon = styled.div`
  margin-right: 20px;
  color: #ddbb00;
  line-height: 39px;
  border: 2px solid #4a4a4a;
  width: 43px;
  height: 43px;
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: white;
    border: 2px solid white;
    transform: rotate(360deg);
    transition: all 0.8s ease;
  }
  @media screen and (max-width: 768px) {
    &.contact-icon {
      margin-right: 0;
    }
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
`;
