import styled from "styled-components";

export const Container = styled.div`
  margin-top: -33px;
  position: relative;
  z-index: 0;
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
    .swiper-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      .swiper-pagination-bullet-active {
        background-color: #ddbb00;
        width: 15px;
        height: 15px;
        transition: all 0.3s ease;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    margin-top: 0px;
  }
`;

export const SwiperDescription = styled.div`
  position: absolute;
  width: 100%;
  top: -100px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 19;
  @media screen and (max-width: 768px) {
    top: 0;
  }
  .text {
    white-space: nowrap;
    font-size: 49px;
    line-height: 57px;
    font-weight: 800;
    color: rgb(255, 255, 255);
    opacity: 1;
    text-transform: uppercase;
    @media screen and (max-width: 1024px) {
      font-size: 38px;
    }
    @media screen and (max-width: 768px) {
      font-size: 24px;
      padding-bottom: 0.5rem;
    }
    @media screen and (max-width: 506px) {
      font-size: 20px;
    }
    @media screen and (max-width: 415px) {
      font-size: 16px;
      padding-bottom: 0.25rem;
    }
    span {
      color: rgb(221, 187, 0);
      margin: 0px 0px 0px 2px;
      font-family: Montserrat, sans-serif;
      transition: none 0s ease 0s;
      text-align: left;
      line-height: 57px;
      border-width: 0px;
      padding: 0px;
      letter-spacing: 0px;
    }
  }
  .description {
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
