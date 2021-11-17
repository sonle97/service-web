import React from "react";

import { Container, Wrapper } from "../../components/layout";
import TitleSection from "../../components/Sections/TitleSection";

const index = (props) => {
  const { bg, title, colorWhite, isOpactity } = props;
  return (
    <Container
      className="text-center w-full h-full bg-cover bg-no-repeat relative bg-center"
      style={{ backgroundImage: "url(" + bg + ")" }}
    >
      {isOpactity && (
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        />
      )}
      <Wrapper>
        <TitleSection title={title} className="p-0" colorWhite={colorWhite} />
      </Wrapper>
    </Container>
  );
};

export default index;
