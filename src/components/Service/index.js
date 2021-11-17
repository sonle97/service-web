import React from "react";
import { GiClockwork } from "react-icons/gi";

import { ServiceContainerStyle } from "./style";
import { Container, Wrapper } from "../layout";
import BlockItem from "../Sections/BlockItem/BlockItem";
import bg from "../../images/about_us_bg.jpg";
import service_header_bg from "../../images/service_header_bg.jpg";
import TitleSection from "../Sections/TitleSection";
import OurServices from "../Home/OurServices";
import Swiper from "../Sections/Swiper";

function index() {
  return (
    <ServiceContainerStyle>
      <Container
        className="text-center w-full h-full bg-cover bg-no-repeat relative bg-center"
        style={{ backgroundImage: "url(" + service_header_bg + ")" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        />
        <Wrapper>
          <TitleSection title="Dịch vụ" className="p-0" colorWhite />
        </Wrapper>
      </Container>

      <Container>
        <Wrapper>
          <div className="service-infor flex justify-bettwen">
            <div className="w-1/2 pr-3 img">
              <Swiper />
            </div>
            <div className="w-1/2 text-left pl-3 text">
              <h2 className="text-3xl font-extrabold">
                We Works with Clients on Strategy
              </h2>
              <p className="pt-7 text-gray-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here,tent here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                content hereng it look like readable English. Many desktop
                publishing packages and web age edrs now use Lorem Ipsum as. It
                is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-le point of
                using Lorem Ipsum is that it ess normal distribution of letters,
              </p>
            </div>
          </div>
        </Wrapper>
      </Container>

      <Container
        className="text-center w-full h-full bg-cover bg-no-repeat relative"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        />
        <Wrapper>
          <div className="flex benefit-service">
            <BlockItem
              title="Fast pest removal"
              description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                            auctor aliquet. Aenean lorem quis bibendum lorem quis."
            >
              <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
            </BlockItem>
            <BlockItem
              title="Fast pest removal"
              description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                            auctor aliquet. Aenean lorem quis bibendum lorem quis."
            >
              <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
            </BlockItem>
            <BlockItem
              title="Fast pest removal"
              description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                            auctor aliquet. Aenean lorem quis bibendum lorem quis."
            >
              <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
            </BlockItem>
          </div>
        </Wrapper>
      </Container>
      <OurServices />
    </ServiceContainerStyle>
  );
}

export default index;
