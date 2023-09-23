"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
// Icons
import { HiOfficeBuilding } from "react-icons/hi";
import Image from "next/legacy/image";
import Link from "next/link";

import { listAllExceptOne } from "../utils/services";

export default function SwiperServices({ service }) {
  const listService = listAllExceptOne(service);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        " text-lg bg-[#d97706] rounded-full text-white py-2 px-4 lg:mr-10 " +
        '">' +
        (index + 1) +
        "</span>"
      );
    },
  };

  return (
    <>
      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2.95,
          },
        }}
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="h-full pt-5 bg-white border max-lg:border-x cursor-grab border-gray rounded-b-xl mySwiper"
      >
        {listService.map((service) => {
          return (
            <SwiperSlide key={service._id}>
              <SwiperSlideFn
                icon={service.image}
                title={service.title}
                link={service.link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
function SwiperSlideFn({ icon, title, p, isBorder = true, link }) {
  return (
    <Link href={`${link}`} scroll={false}>
      <section className="relative flex flex-col h-64 p-5 pb-24 flex-center">
        {/* <div className="relative w-16 h-16 mb-2">
          <Image
            src={`/icons/${icon}`}
            alt="quality"
            layout="fill"
            className="object-contain"
          />
        </div> */}
        <section className="pl-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="max-w-xs text-sm text-gray-250">{p}</p>
        </section>
        {isBorder && (
          <section className="w-1 sm:h-full bg-gray rotate-[20deg] absolute right-0 top-0 rounded-full border border-gray"></section>
        )}
      </section>
    </Link>
  );
}
