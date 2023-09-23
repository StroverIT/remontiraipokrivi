import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Blog from "../indexPage/Blog";

export default function BlogSwiper({ data }) {
  return (
    <>
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2.5,
          },
          800: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((data) => {
          return (
            <SwiperSlide className="py-10" key={data._id}>
              <Blog
                link={data.link}
                imgUrl={data.imgUrl}
                paragraph={data.paragraph}
                title={data.title}
                date={data.date}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
