import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .item {
    width: 25%;
    padding-right: 15px;
    padding-left: 15px;
    .icon-wrapper {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      font-size: 10px;
      animation: pulse 3s infinite;
      display: inline-block;

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0em #3a3a3a;
        }
        25% {
          box-shadow: 0 0 0 0.25em #3a3a3a;
        }
        50% {
          box-shadow: 0 0 0 0.65em #3a3a3a;
        }
        75% {
          box-shadow: 0 0 0 0.25em #3a3a3a;
        }
        100% {
          box-shadow: 0 0 0 0.15em #3a3a3a;
        }
      }
      .icon {
        text-align: center;
        width: 100%;
        height: 100%;
        border-radius: 90px;
        line-height: 90px;
        background: #ddbb00;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: #fff;
      }
    }

    .count-description {
      font-size: 34px;
      font-weight: 700;
      color: white;
      padding-top: 20px;
      span.time {
        font-size: 40px;
        font-weight: 800;
        color: white;
        margin-top: 20px;
        font-family: "Montserrat", sans-serif;
      }
      h5.con1 {
        font-size: 16px;
        font-weight: 600;
        text-transform: capitalize;
        color: #b1b1b1;
        padding-top: 13px;
      }
    }
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    .item {
      width: 100%;
      padding: 0px 0px 30px 0px;
      &:last-child {
        padding-bottom: 0px;
      }
    }
  }
`;
