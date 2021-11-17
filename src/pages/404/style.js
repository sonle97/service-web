import styled from "styled-components";

export const PageNotFoundStyle = styled.div`
  margin-top: -33px;
  color: #181614;
  .content {
    h1 {
      position: relative;
      font-size: 200px;
      font-weight: 700;
      line-height: 1em;
      margin-bottom: 10px;
      background: none;
      @media screen and (max-width: 415px) {
        font-size: 120px;
      }
    }
    h2 {
      position: relative;
      font-size: 48px;
      font-weight: 700;
      line-height: 1.2em;
      margin-bottom: 20px;
      @media screen and (max-width: 415px) {
        font-size: 36px;
      }
    }
    .text {
      position: relative;
      font-size: 20px;
      font-weight: 400;
      margin-top: 10px;
      margin-bottom: 50px;
      color: #808080;
      margin: 0px 0px 15px;
    }
    a {
      display: inline-block;
      font-size: 17px;
      line-height: 24px;
      color: #fff;
      padding: 20px 35px;
      font-weight: 600;
      border-radius: 32px 0 32px 32px;
      overflow: hidden;
      text-transform: capitalize;
      font-family: "Poppins", sans-serif;
      vertical-align: middle;
      box-shadow: 0px 15px 40px 0px rgb(32 171 148 / 20%);
      background-color: #ddbb00;
      transition: all 0.5s ease;
      &:hover {
        color: #ddbb00;
        background-color: #2b2c2e;
      }
    }
  }
`;
