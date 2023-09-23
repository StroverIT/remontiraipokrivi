import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// Icons
import Image from "next/image";
import Link from "next/link";
import { HiX } from "react-icons/hi";

export default function SwiperGallery({ data, link }) {
  const [imgData, setImgData] = useState(null);
  const linkForImg = `/pages-images/${link}`;

  useEffect(() => {
    const body = document.querySelector("body");
    if (imgData) {
      body.classList.add("overflow-hidden");
    } else if (!imgData) {
      body.classList.remove("overflow-hidden");
    }
  }, [imgData]);
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2.5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2.95,
          },
          800: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 6,
          },
        }}
        className="h-56 pt-5 bg-white border max-lg:border-x cursor-grab border-gray rounded-b-xl mySwiper"
      >
        <div className="px-96">
          {data.map((image) => {
            return (
              <SwiperSlide key={image.img} onClick={() => setImgData(image)}>
                <div className="relative h-56 w-96">
                  <Image
                    src={`${linkForImg}${image.img}`}
                    fill
                    className="object-contain"
                    alt={image.alt}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      {imgData && (
        <SwiperPopup
          data={imgData}
          linkForImg={linkForImg}
          setImgData={setImgData}
        />
      )}
    </>
  );
}
function SwiperPopup({ data, linkForImg, setImgData }) {
  return (
    <section className="fixed top-0 left-0 z-50 w-screen h-screen">
      <section
        className="absolute top-0 left-0 z-10 w-screen h-screen bg-dark-50"
        onClick={() => setImgData(null)}
      ></section>

      <section className="absolute z-50 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex-col  flex-center">
        <section
          className="absolute text-2xl bg-white rounded-full cursor-pointer -top-10 right-10 z-20"
          onClick={() => setImgData(null)}
        >
          <HiX />
        </section>
        <section>
          <div className="relative mb-2 w-96 h-96">
            <Image
              src={`${linkForImg}${data.img}`}
              alt="quality"
              fill
              className="object-contain"
            />
          </div>
        </section>
      </section>
    </section>
  );
}
