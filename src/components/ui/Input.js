import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 45px;
  color: #707070;
  border-top: transparent;
  border-bottom: 2px solid #ddbb00;
  padding: 0px 35px 0px 15px;
  transition: all 0.5s;
  &:focus {
    border: 1px solid #ddbb00;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  color: #707070;
  border-top: transparent;
  border-bottom: 2px solid #ddbb00;
  padding: 0px 15px 0px 15px;
  transition: all 0.5s;
  &:focus {
    border: 1px solid #ddbb00;
    outline: none;
  }
`;
