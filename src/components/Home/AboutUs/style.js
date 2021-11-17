import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .swiper-container {
    max-width: 45%;
    margin-right: 30px;
    .swiper-button-prev,
    .swiper-button-next {
      color: #ddbb00;
    }

    .swiper-slide {
      &:hover {
        .img-item-swiper {
          transform: scale(2);
        }
      }
      .img-item-swiper {
        transition: all 12s;
        border-radius: 5px;
      }
    }

    .swiper-pagination {
      display: none;
    }
  }
  .wrapper-right {
    position: relative;
    .item {
      display: flex;
      padding-bottom: 30px;
      cursor: pointer;
      &:hover {
        .item-content {
          transition: all 0.8s ease;
          background: rgba(0, 0, 0, 0.6);
          .title {
            color: #ffffff;
          }
          .description {
            color: #cacaca;
          }
        }
        .icon {
          transform: rotate(360deg);
          transition: all 0.8s ease;
        }
      }
      &:last-child {
        padding-bottom: 0px;
      }
      .item-content {
        transition: all 0.8s ease;
        font-size: 20px;
        color: #111111;
        background: #fff;
        width: calc(100% - 80px);
        padding: 23px 25px;
        display: inline-block;
        border-bottom-left-radius: 30px;
        border-top-left-radius: 30px;
        .title {
          color: #111111;
          font-size: 20px;
          font-weight: bold;
          text-transform: capitalize;
        }
        .description {
          margin-top: 10px;
          text-align: left;
          font-size: 16px;
          color: #707070;
        }
      }
    }

    .item-icon {
      border-radius: 0;
      width: 80px;
      border-bottom-right-radius: 30px;
      border-top-right-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 34px;
      color: #000;
      background: #dcba00;
    }
  }

  @media screen and (max-width: 540px) {
    .swiper-container {
      .swiper-button-prev,
      .swiper-button-next {
        color: #ddbb00;
        &::after {
          @media screen and (max-width: 768px) {
            font-size: 30px;
          }
          @media screen and (max-width: 500px) {
            font-size: 24px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    .swiper-container {
      margin: 0 auto 30px;
    }
    .item {
      .item-content {
        .title {
          text-align: left;
        }
      }
    }
  }
`;
