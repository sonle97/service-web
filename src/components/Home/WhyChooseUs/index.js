import React from "react";
import { GiClockwork } from "react-icons/gi";
import { BsQuestionDiamond } from "react-icons/bs";

import { Container, Wrapper, SupText } from "../../layout";
import { Content } from "./style";
import whoWeImage from "../../../images/who_we_img.jpg";
import TitleSection from "../../Sections/TitleSection";
import BlockItem from "../../Sections/BlockItem/BlockItem";

const index = () => {
  return (
    <Container className="text-center ">
      <Wrapper isBackgroundWhite>
        <TitleSection
          title="Tại sao chọn chúng tôi"
          supTitle=" Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum,sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
            a sit amet mauris. Morbi accumsan ipsum velit"
        />
        <Content>
          <div className="left">
            <div className="img-effect">
              <img src={whoWeImage} alt="who_we_image" />
            </div>
            <div className="txt_wrapper">
              <h2 className="flex items-center ">
                Chúng tôi là ai <BsQuestionDiamond className="ml-2" size={25} />
              </h2>
              <SupText className="text-left">
                Proin gravida nibh vel velit auctor aliquet. ean sollicitudin,
                lorem quis bibendu ipsum, nec sagittis sem nibh Duis sed odio
                sit.
                {""}
                Proin gravida nibh vel velit auctor aliquet. ean solly, Duis sed
                sollicitudin odio sitnibh
              </SupText>
            </div>
          </div>
          <div className="right">
            <div className="w-full flex justify-between flex-wrap">
              <BlockItem
                title=""
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
              <BlockItem
                title="Fast pest removal"
                description="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                            auctor aliquet. Aenean lorem quis bibendum lorem quis."
              >
                <GiClockwork size={30} className="text-yellow-1 z-1 icon" />
              </BlockItem>
            </div>
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default index;
