import React from "react";
import { Link } from "react-router-dom";

import not_found_bg from "../../images/not_found_bg.jpg";
import { PageNotFoundStyle } from "./style";
import { Container, Wrapper } from "../../components/layout";
import TitleSection from "../../components/Sections/TitleSection";

function pageNotFound() {
  return (
    <PageNotFoundStyle>
      <Container
        className="text-center w-full h-full bg-cover bg-no-repeat relative bg-center"
        style={{ backgroundImage: "url(" + not_found_bg + ")" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        />
        <Wrapper>
          <TitleSection
            title="Không tìm thấy trang"
            className="p-0"
            colorWhite
          />
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <div className="content">
            <h1>404</h1>
            <h2>Oops! That page can’t be found</h2>
            <div className="text">
              Sorry, but the page you are looking for does not existing
            </div>
            <Link to="/">Quay lại trang chủ </Link>
          </div>
        </Wrapper>
      </Container>
    </PageNotFoundStyle>
  );
}

export default pageNotFound;
