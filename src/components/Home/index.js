import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
// import { MdPhoneInTalk } from "react-icons/md";
import { GiTronArrow } from "react-icons/gi";

import bg from "../../images/slider_bg.jpg";
import bg1 from "../../images/slide-1.jpg";
import bg2 from "../../images/slide-2.jpg";
import bg3 from "../../images/slide-3.jpg";

import { Container, SwiperDescription } from "./styles";
import FormSubmit from "./FormSubmit";
import WhyChooseUs from "./WhyChooseUs";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import CounterSection from "./CounterSection";
import LatestProject from "./Products";

const data = [bg, bg1, bg2, bg3];

const Home = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: { delay: 3000 },
  };

  return (
    <React.Fragment>
      <Container>
        <Swiper {...params}>
          {data.map((item, index) => (
            <div className="w-full h-full relative" key={index}>
              <div className="absolute w-full h-full bg-black-2"></div>
              <img src={item} alt="bg" className="backgound-img w-full" />
              <SwiperDescription>
                <p className="text pb-4">Dịch vụ diệt mối tận gốc</p>
                <p className="description text-red-600 text-2xl leading-loose flex items-center">
                  Chất lượng <GiTronArrow className="mx-2 text-yellow-600" /> Uy
                  tín <GiTronArrow className="mx-2 text-yellow-600" /> Hiệu quả
                </p>
                {/* <p className="description text-red-600 text-xl flex items-center mt-1">
                  <MdPhoneInTalk size={30} className="mr-2" /> 0347366345
                </p> */}
              </SwiperDescription>
            </div>
          ))}
        </Swiper>
        <FormSubmit />
      </Container>
      <WhyChooseUs />
      <AboutUs />
      <OurServices />
      <CounterSection />
      <LatestProject />
    </React.Fragment>
  );
};

export default Home;
