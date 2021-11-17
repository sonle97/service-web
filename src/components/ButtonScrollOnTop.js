import React from "react";
import styled from "styled-components";
import { FaAngleDoubleUp } from "react-icons/fa";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ButtonScrollOnTop = styled(({ className }) => {
  return (
    <div className={className} onClick={scrollToTop}>
      <FaAngleDoubleUp className="icon-double-up" />
    </div>
  );
})`
  opacity: 0.5;
  background-color: #ddbb00;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 8px;
  right: 20px;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  .icon-double-up {
    font-size: 20px;
    color: #fff;
  }
`;

export default ButtonScrollOnTop;
