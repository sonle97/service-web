import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlockItemStyle = styled(Link)`
  border: 1px solid #cccccc;
  padding: 20px;
  margin: 57px 15px;
  position: relative;
  background: #fff;
  transition: all 0.5s;
  flex: 1 1 35%;
  margin-bottom: 40px;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    content: "";
    opacity: 0;
    transition: opacity 0.35s, transform 1.3s;
    border-right: 1px solid #ddbb00;
    border-left: 1px solid #ddbb00;
    transform: scale(1, 0);
    cursor: pointer;
  }
  &::after {
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    content: "";
    opacity: 0;
    transition: opacity 0.5s, transform 1.3s;
    border-top: 1px solid #ddbb00;
    border-bottom: 1px solid #ddbb00;
    transform: scale(0, 1);
    cursor: pointer;
  }
  .icon-wrapper {
    margin: auto;
    display: block;
    width: 113px;
    height: 113px;
    background-color: #ffffff;
    border-radius: 100%;
    border: 1px solid #cccccc;
    margin-bottom: 26px;
    margin-top: -78px;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    border: 1px solid transparent;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
    ::before,
    ::after {
      opacity: 1;
      transform: scale(1);
      transform: scale(1);
      cursor: pointer;
    }
    h4 {
      color: #ddbb00;
    }
    .icon-wrapper {
      background: #ddbb00;
      border: 1px solid transparent;
      transition: all 0.9s;
      transform: rotateY(180deg) rotate(0deg);
      .icon {
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 560px) {
    flex: 1 1 55%;
    margin-bottom: 40px;
    &:nth-child(n) {
      margin-right: 0;
      margin-left: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
