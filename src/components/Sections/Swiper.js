import React from "react";

import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import img from "../../images/about_us_img.jpg";
import img1 from "../../images/about_us_img.jpg";
import img2 from "../../images/about_us_img.jpg";
import img3 from "../../images/about_us_img.jpg";

const data = [img, img1, img2, img3];

const index = () => {
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
    <Swiper {...params} className="swiper-wrapper">
      {data.map((item, index) => (
        <div className="w-full h-full relative item" key={index}>
          <img src={item} alt="bg" className="img-item-swiper" />
        </div>
      ))}
    </Swiper>
  );
};

export default index;
