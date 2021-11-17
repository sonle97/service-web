import React from "react";

import { Container, Wrapper } from "../../layout";
import { Content } from "./style";
import TitleSection from "../../Sections/TitleSection";

const index = () => {
  return (
    <Container className="text-center ">
      <Wrapper isBackgroundWhite>
        <TitleSection
          title="Sản phẩm"
          supTitle=" Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum,sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
            a sit amet mauris. Morbi accumsan ipsum velit"
        />
        <Content></Content>
      </Wrapper>
    </Container>
  );
};

export default index;
