import React from "react";

import { Container, Wrapper } from "../../layout";
import { Content } from "./style";
import TitleSection from "../../Sections/TitleSection";
import { GiClockwork } from "react-icons/gi";
import BlockItem from "../../Sections/BlockItem/BlockItem";
import serviceImg from "../../../images/service_img.jpg";
import { services } from "../../../data";

const index = () => {
  return (
    <Container isBackgroundWhite>
      <Wrapper>
        <TitleSection
          title="Dịch vụ của chúng tôi"
          supTitle=" Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum,sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
            a sit amet mauris. Morbi accumsan ipsum velit"
          bg={serviceImg}
        />

        <Content className="w-full flex justify-between flex-wrap">
          {services.map((service, idx) => (
            <BlockItem
              slug={service.slug}
              key={idx}
              title={service.title}
              description={service.description}
              bg={serviceImg}
            >
              <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
            </BlockItem>
          ))}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default index;
