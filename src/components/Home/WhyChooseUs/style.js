import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    max-width: 33.33333333%;
    width: 100%;
    padding: 28px 28px 28px 28px;
    border: 1px solid #cccccc;
    margin-right: 15px;
    margin-bottom: 40px;
    .img-effect {
      position: relative;
      overflow: hidden;
      display: inline-block;
      img {
        transition: all 12s;
      }
      &:hover {
        img {
          transform: scale(2);
          transition: all 12s;
        }
      }
    }
    .txt_wrapper {
      text-align: left;
      h2 {
        font-size: 20px;
        font-weight: 700;
        margin-top: 10px;
        text-transform: capitalize;
        padding: 20px 0px 10px;
      }
    }
  }
  .right {
    max-width: 66.66666667%;
    margin-left: 15px;
    .block-item {
      &:nth-child(2n-1) {
        margin-left: 0;
      }

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    .left {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 40px;
      .txt_wrapper {
        text-align: center;
      }
    }
    .right {
      max-width: 100%;
      margin-left: 0;
    }
  }
`;
