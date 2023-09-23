import Head from "next/head";
import Image from "next/image";
import React from "react";
import ContactUs from "../../../components/indexPage/ContactUs";
import SwiperGallery from "../../../components/SwiperGallery";
import SwiperServices from "../../../components/SwiperServices";
import Title from "../../../components/Title";

import { officeMovingImages } from "../../../components/data/office-moving-images";
import { BsCheckLg } from "react-icons/bs";
import Checkers from "../../../components/Checkers";



const checkerData = [
  "Хидроизолация на покрив с течна гума",
  "Хидро и топлоизолация на плосък покрив",
  "Хидроизолация на дървен покрив",
  "Хидроизолация на ламаринен покрив",
  "Хидроизолация на покрив с посипка",
];

export default function OfficeMoving() {
  return (
    <>
      <Head>
        <title>Преместване на офис | Оглед и планиране</title>
        <meta
          name="description"
          content={`Преместване на офис | Решение за вашия бизнес – професионално обучен екип с дългогодишен опит. Висококачествени опаковъчни материали, монтаж и демонтаж.`}
        />

        <meta property="og:title" content="Професионално преместване на дома" />
        <meta property="og:description" content=" " />
      </Head>

      <section className="min-h-screen mt-40 ">
        <section className="font-sans ">
          <section className="">
            <section className="lg:px-56 3xl:px-[30rem]">
              <section className="container px-5 py-10 bg-white rounded-lg md:px-14">
                <div className="flex-center">
                  <Title title="Хидроизолации" size="text-3xl" />
                </div>
                <section>
                  <p>
                    Ние предоставяме множество строителни услуги свързани с
                    покривните ремонти, и в частност с хидроизолацията. В
                    търсене на фирми за хидроизолация в София и страната, можете
                    да разчитате на опита ни, който е доказан с времето, както
                    личи и от мненията на множеството граждани, които решиха да
                    ни гласуват доверие. Клиентът може да пожелае ремонт на
                    покрив с течна хидроизолация, битумна хидроизолация и
                    прочие. Екипът ни ще извърши ремонтните дейности с вещина,
                    за да задоволи всяка една претенция на потребителите.
                    Надеждните хидроизолационни смеси и дългият стаж на
                    бригадата ни ще доведат до очаквания резултат, а именно
                    превенция срещу течове, здравина и стабилност.
                  </p>

                  <p>
                    Надеждността на използваните материали и смеси при
                    изграждане на хидроизолация на покрив, е от първостепенна
                    важност. Много често сме слушали оплаквания от фирми за
                    хидроизолация, които вършат половинчата работа, а покривът
                    започва да тече буквално 2 – 3 месеца, след като покривът
                    бил хидроизолиран. Това не бива да се допуска, защото
                    инвестицията не е никак малка.
                  </p>
                </section>

                <Checkers data={checkerData} />

              </section>
            </section>
            {/* <section className="my-10">
              <div className=" flex-center">
                <Title title="Нашата галерия" size="text-3xl" />
              </div>
              <SwiperGallery data={officeMovingImages} link="office-moving/" />
            </section> */}

            <section className="container my-14 lg:px-36">
              <ContactUs
                color="border-blue"
                btnColor="bg-blue"
                bgColor="bg-blue-50"
                number="+359 временно"
                scrollBarThumb="scrollbar-thumb-primaryBlue-150"
                scrollBarTrack="scrollbar-track-primaryBlue-500"
                typePage="Web"
                mx=""
              />
            </section>
          </section>

          {/* <p>ненужни вещи изхвърляне</p> */}
        </section>
        <div className="fixed top-0 left-0 -z-20">
          <div className="relative w-screen h-screen">
            <Image
              src="/pages-images/office-moving/background.webp"
              fill
              alt="Нашата фирма предлага висококачествени Транспортни услуги за безопасно и ефективно преместване на вашия дом или офис"
              className=""
            />
          </div>
        </div>
        {/* <section className="py-10 mt-20 font-sans bg-white flex-center">
          <Title title="Вижте и другите ни услуги" size="text-4xl" />
        </section> */}
        <section className="">
          <SwiperServices service="office" />
        </section>
      </section>
    </>
  );
}
