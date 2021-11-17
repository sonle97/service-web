import React, { useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import renderHTML from "react-render-html";
import { BsCaretRightFill } from "react-icons/bs";

import { Container, Wrapper } from "../layout";
import bg_detail from "../../images/bg_detail.jpg";
import SectionHeaderTitleBg from "../../commons/SectionHeaderTitleBg";

import {
  ServiceDetailContainerStyle,
  MenuContainer,
  ContentDetail,
} from "./styles";
import { services } from "../../data";

const ServiceDetailePage = () => {
  const { slug } = useParams();

  const selectedSevice = services.find((service) => service.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ServiceDetailContainerStyle>
      <SectionHeaderTitleBg
        title={selectedSevice.title}
        bg={bg_detail}
        colorWhite={true}
        isOpactity={false}
      />

      <Container>
        <Wrapper>
          <div className="flex detail-container">
            <MenuContainer>
              <div className="sidebar">
                <div className="title">Danh mục dịch vụ</div>
                <div className="list">
                  {services.map((item, idx) => (
                    <div className="list-item" key={idx}>
                      <NavLink
                        to={item.slug}
                        activeClassName="active"
                        className="w-full flex items-center justify-between"
                      >
                        <span>{item.title}</span>
                        <BsCaretRightFill
                          size={20}
                          className="icon-active hidden"
                        />
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </MenuContainer>
            <ContentDetail>{renderHTML(selectedSevice.content)}</ContentDetail>
          </div>
        </Wrapper>
      </Container>
    </ServiceDetailContainerStyle>
  );
};

export default ServiceDetailePage;
