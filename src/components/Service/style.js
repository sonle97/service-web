import styled from "styled-components";

export const ServiceContainerStyle = styled.div`
  margin-top: -33px;
  @media screen and (max-width: 768px) {
    .benefit-service {
      flex-direction: column;
    }
    .service-infor {
      flex-direction: column;
      .img {
        margin: 0 auto;
      }
      .text {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
`;
