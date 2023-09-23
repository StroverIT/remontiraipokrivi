
"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Icons
import Image from "next/legacy/image";

export default function SmallInfo() {
  return (
    <>
      <Swiper
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
        className="h-full pt-5 bg-white border-b max-lg:border-x cursor-grab border-gray rounded-b-xl mySwiper"
      >
        <SwiperSlide>
          <SwiperSlideFn
            icon="quality.png"
            title="Качество"
            p="Доказано качество в предлагани услуги"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperSlideFn
            icon="best-price.png"
            title="Цени"
            p="Достъпна за всеки цена"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideFn
            icon="customer-review.png"
            title="Организация"
            p="Организираност, експедитивност и внимание към детайла"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideFn
            icon="skill.png"
            title="Опит"
            p="Вас ще ви обслужат опитни професионалисти"
            isBorder={false}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
function SwiperSlideFn({ icon, title, p, isBorder = true }) {
  return (
    <section className="relative flex h-32 p-5 select-none flex-center">
      <div className="relative w-10 h-10">
        <Image
          src={`/icons/${icon}`}
          alt="quality"
          layout="fill"
          className="object-contain"
        />
      </div>
      <section className="pl-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="max-w-xs text-sm text-gray-250">{p}</p>
      </section>
      {isBorder && (
        <section className="w-1 sm:h-full bg-gray rotate-[20deg] absolute right-0 top-2 rounded-full border border-gray"></section>
      )}
    </section>
  );
}
{
  /* <div className="bg-white ">
<div className="container">
  <h3 className="text-center">Решения за премахване</h3>
  <section className="grid md:grid-cols-3">
    <section className="flex flex-center">
      <div>
        <HiOfficeBuilding />
      </div>
      <section>
        <h3>Офисни премествания</h3>
        <p>Местиме без да мрънкаме</p>
      </section>
    </section>
    <section className="flex flex-center">
      <div>
        <HiOfficeBuilding />
      </div>
      <section>
        <h3>Месим</h3>
        <p>Местиме без да мрънкаме</p>
      </section>
    </section>
    <section className="flex flex-center">
      <div>
        <HiOfficeBuilding />
      </div>
      <section>
        <h3>Месим</h3>
        <p>Местиме без да мрънкаме</p>
      </section>
    </section>
  </section>
</div>

</div> */
}
