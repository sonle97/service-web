import styled from "styled-components";

export const Icon = styled.div`
  margin-right: 20px;
  color: #ddbb00;
  line-height: 39px;
  border: 2px solid #4a4a4a;
  width: 43px;
  height: 43px;
  border-radius: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: white;
    border: 2px solid white;
    transform: rotate(360deg);
    transition: all 0.8s ease;
  }
  @media screen and (max-width: 768px) {
    &.contact-icon {
      margin-right: 0;
    }
  }
`;
