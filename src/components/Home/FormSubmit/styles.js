import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  bottom: 0;
  background-color: rgba(9, 9, 9, 0.8);
  margin-top: -100px;
  z-index: 5;
  position: absolute;
  width: 100%;
  padding: 50px;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 1;
  @media screen and (max-width: 768px) {
    position: relative;
    margin-top: 0px;
  }
  @media screen and (max-width: 1344px) {
    padding: 35px;
  }
  @media screen and (max-width: 1024px) {
    padding: 20px;
  }
  @media screen and (max-width: 559px) {
    & .row {
      width: 100%;
    }
  }
`;

export const ButtonSubmit = styled.button`
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  z-index: 2;
  text-align: center;
  height: 45px;
  line-height: 45px;
  width: 175px;
  overflow: hidden;
  background: #ddbb00;
  border-radius: 40px;
  transition: all 0.5s ease;
  &:focus {
    outline: none;
  }
  .btn-front {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transform: scale(1);
    transition: all 0.8s ease;
  }
  .btn-back {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transform: scale(4);
    transition: all 0.8s ease;
    opacity: 0;
  }
  &:hover {
    background: transparent;
    border: 2px solid #ddbb00;
    color: white;
    .btn-front {
      transform: scale(0);
      color: #ddbb00;
      background: #202020;
    }
    .btn-back {
      transform: scale(1);
      opacity: 1;
      color: #ddbb00;
      background: #202020;
    }
  }
`;
