import styled from "styled-components";

export const ClockWrapper = styled.div`
  color: #fff;
  .clock {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .times {
      width: 200px;
      height: 250px;
      position: relative;
      transform: skewY(-10deg);
      &::before {
        content: "";
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: rgb(200, 20, 60);
        transform-origin: bottom;
        transform: skewX(45deg);
      }
      &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        width: 10px;
        height: 100%;
        background-color: rgb(200, 20, 60);
        transform-origin: left;
        transform: skewY(45deg);
      }

      &:nth-of-type(1) {
        filter: hue-rotate(225deg);
      }
      &:nth-of-type(3) {
        filter: hue-rotate(95deg);
      }

      .time {
        width: 100%;
        height: 180px;
        text-align: center;
        background-color: crimson;
        line-height: 180px;
        font-size: 5rem;
        letter-spacing: 3px;
      }
      .title {
        width: 100%;
        height: 70px;
        text-align: center;
        line-height: 70px;
        background-color: rgb(210, 20, 60);
        font-size: 2rem;
        letter-spacing: 2px;
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 250px;
          background: linear-gradient(transparent, #0005);
          transform-origin: bottom;
          transform: skewX(45deg);
          bottom: 0;
          left: 0;
          z-index: -1;
          filter: blur(5px);
        }
      }
    }
  }
`;
