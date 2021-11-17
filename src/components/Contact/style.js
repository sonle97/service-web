import styled from "styled-components";

export const ContactStyled = styled.div`
  margin-top: -33px;
  .infor-wrapper {
    @media screen and (max-width: 830px) {
      flex-direction: column;
      .info {
        margin-bottom: 15px;
        width: 50%;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .info {
      background: #fff;
      width: 250px;
      border: 2px solid #fff;
      z-index: 2;
      position: relative;
      padding: 30px 25px 30px 50px;
      visibility: visible;
      animation-duration: 1.3s;
      animation-name: zoomIn;
      &:hover {
        border: 2px solid #ddbb00;
        transition: all 0.5s;
        .icon {
          background: #f3f3f3;
          color: #ddbb00;
          border: 2px solid #ddbb00;
          transition: all 0.5s;
        }
      }
      .icon {
        width: 60px;
        height: 60px;
        background: #ddbb00;
        color: #fff;
        border-radius: 50%;
        border: 2px solid transparent;
        line-height: 55px;
        text-align: center;
        line-height: 22px;
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: -30px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .contact-section {
    .send-message {
      background: #fafafa;
      border: 1px solid #cccccc;
      padding: 50px;
      .title {
        font-size: 32px;
        line-height: 1;
        font-weight: 700;
        text-transform: capitalize;
      }
      .description {
        padding-bottom: 30px;
        padding-top: 10px;
      }
      .form {
        text-align: left;
        .button {
          font-weight: 600;
          text-transform: uppercase;
          display: inline-block;
          position: relative;
          text-align: center;
          height: 45px;
          width: 175px;
          background: #ddbb00;
          transition: all 0.5s ease;
          border: 2px solid #ddbb00;
          border-radius: 50px;
          &:hover {
            background-color: transparent;
          }
          &:focus {
            outline: none;
          }
        }
      }
      @media screen and (max-width: 600px) {
        .form {
          text-align: center;
          .form-input {
            flex-direction: column;
            .input-field-wrapper {
              margin-right: 0;
            }
            .input-message {
              margin-top: 1.5rem;
            }
          }
        }
      }
    }
    .time-work {
      background: #ddbb00;
      border: 1px solid #ddbb00;
      padding: 43px 50px;
      .title {
        font-size: 22px;
        color: #fff;
        text-transform: uppercase;
        line-height: 26px;
        font-weight: 700;
        padding-bottom: 30px;
      }
      .time-item {
        line-height: 42px;
        color: #fff;
        font-size: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        font-weight: 400;
        margin-bottom: 5px;
      }
    }
    @media screen and (max-width: 1020px) {
      flex-direction: column;
      .send-message {
        width: 100%;
        margin-right: 0;
        margin-bottom: 15px;
      }
      .time-work {
        width: 100%;
        margin-left: 0;
      }
    }
    @media screen and (max-width: 550px) {
      .send-message {
        padding: 28px;
      }
      .time-work {
        padding: 30px 28px;
      }
    }
  }
`;
