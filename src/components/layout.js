import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1150px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  background-color: ${(props) =>
    props.isBackgroundWhite ? "white" : "transparent"};
  padding-top: ${(props) => (props.pt ? props.pt : "80px")};
  padding-bottom: 80px;
  @media screen and (max-width: 1100px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: ${(props) => (props.colorWhite ? "#ffffff" : "#000000")};
  font-weight: bold;
  position: relative;
  text-transform: capitalize;
  display: inline-block;
  /* padding-bottom: 25px; */
  ::before {
    content: "";
    border: 1px solid #ddbb00;
    width: 25px;
    position: absolute;
    left: -44px;
    top: 25px;
  }
  ::after {
    content: "";
    border: 1px solid #ddbb00;
    height: 20px;
    position: absolute;
    left: -20px;
    top: 16px;
  }
  span {
    ::before {
      content: "";
      border: 1px solid #ddbb00;
      width: 25px;
      position: absolute;
      right: -44px;
      top: 25px;
    }
    ::after {
      content: "";
      border: 1px solid #ddbb00;
      height: 20px;
      position: absolute;
      right: -20px;
      top: 16px;
    }
  }
  @media screen and (max-width: 540px) {
    font-size: 26px;
    line-height: 50px;
  }
`;

export const SupText = styled.p`
  position: relative;
  max-width: 940px;
  margin: 0 auto;
  color: ${(props) => (props.colorWhite ? "#cacaca" : "#707070")};
`;
