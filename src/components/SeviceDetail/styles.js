import styled from "styled-components";

export const ServiceDetailContainerStyle = styled.div`
  margin-top: -33px;
  @media (max-width: 768px) {
    .detail-container {
      flex-direction: column-reverse;
    }
  }
`;

export const MenuContainer = styled.div`
  padding-left: 0;
  padding-right: 20px;
  min-width: 300px;
  max-width: 350px;
  width: 100%;

  .sidebar {
    padding-bottom: 25px;
    position: relative;
    margin-bottom: 50px;
    box-shadow: 12.036px 15.973px 80px 0px rgb(37 59 112 / 12%);
    padding: 40px;
    border-radius: 10px;
    text-align: left;
    .title {
      font-size: 24px;
      font-weight: 400;
      text-transform: capitalize;
      margin-bottom: 30px;
    }
    .list {
      position: relative;
      margin: 0 -40px;

      .list-item {
        position: relative;
        padding: 0 40px;
        a {
          position: relative;
          color: #061a3a;
          font-size: 18px;
          line-height: 30px;
          font-weight: 500;
          text-transform: capitalize;
          -webkit-transition: all 500ms ease;
          -moz-transition: all 500ms ease;
          -ms-transition: all 500ms ease;
          -o-transition: all 500ms ease;
          transition: all 500ms ease;
          padding: 12px 0;
          border-bottom: 1px solid #e5e5e5;
          &.active {
            .icon-active {
              display: block;
              color: #ddbb00;
            }
          }
        }
        &:hover {
          background: #ddbb00;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    min-width: 250px;
    .sidebar {
      padding: 40px 20px;
      .list {
        margin: -20px;
        .list-item {
          padding: 0 20px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    min-width: 100%;
    padding-right: 0;
    .sidebar {
      margin-top: 50px;
      margin-bottom: 0;
      padding: 40px;
      padding-top: 30px;
    }
  }
`;
export const ContentDetail = styled.div`
  padding: 0 15px;
  text-align: left;
  .context-block {
    position: relative;
    margin-bottom: 20px;
    .image-block {
      .image {
        margin-left: -15px;
      }
    }
  }

  h2 {
    font-size: 40px;
    margin-bottom: 30px;
    font-family: "Abril Fatface", cursive;
  }
  h3 {
    position: relative;
    font-size: 30px;
    font-family: "Abril Fatface", cursive;
    margin-bottom: 30px;
  }
  h4 {
    position: relative;
    font-size: 24px;
    font-family: "Abril Fatface", cursive;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    color: #808080;
    margin: 0px 0px 15px;
  }
  img {
    border-radius: 20px;
    padding: 15px;
  }
  .process-block-wrapper {
    margin: 40px 0px;
    .process-block {
      &::before {
        position: absolute;
        content: "";
        top: 10px;
        left: 30px;
        bottom: -10px;
        width: 1px;
        background: #e2e6e7;
      }
      position: relative;
      padding-left: 100px;
      padding-bottom: 5px;
      .count {
        position: absolute;
        top: 8px;
        left: 0;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 22px;
        font-weight: 500;
        color: #fff;
        border-radius: 30px 30px 0 30px;
        background: #21c58e;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
