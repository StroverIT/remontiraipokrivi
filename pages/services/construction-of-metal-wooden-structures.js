import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import { BsCheckLg } from "react-icons/bs";
import Checkers from "../../components/Checkers";




const checkerData = [
  "НАВЕСИ",
  "ВЕРАНДИ",
  "БЕСЕДКИ",
  "СЕННИЦИ",
  "И ОЩЕ МНОГО ДРУГИ КОНСТРУКЦИИ",
];

export default function InternationalRelocation() {
  return (
    <>
      <Head>
        <title>Международно преместване на дома и офиса</title>
        <meta
          name="description"
          content={`Международно преместване на дома и офиса в ЕС. Висококачествено координиране и управление, професионално обучен екип. Вземи своята оферта!`}
        />
        <meta
          property="og:title"
          content="Международно преместване – временно ЕООД"
        />
        <meta property="og:description" content="" />
      </Head>
      <section className="min-h-screen mt-40 ">
        <section className="container">
          <section className="font-sans flex-center">
            <Title title="Изграждане на Метални/Дървени Конструкции" size="text-3xl" />
          </section>
          {/* Преместване на дома и/или офиса в друга държава. */}
          <section class="lg:px-56">
            <section>
              <p>
                За да бъде един навес максимално удобен и функционален ние
                предлагаме вариант с изработени и предварително сглобени от нас
                дървени ферми. По този начин се избягват средни носещи колони и
                вие можете да разполагате , каквото си пожелаете под навеса, без
                да се притеснявате от множество подпорни греди. Изработваме също
                така и навеси с метална конструкция. Идеите ни в тази област са
                много и винаги има още и още варианти. Доверете се на
                професионализма ни и ще получите красив, здрав и функционален
                навес на добра цена, който няма да поддаде от тежкия сняг през
                март или да отлети при буря.
              </p>
              <p>
                Извършваме професионално изграждане на навеси, беседки, веранди,
                сенници, платформи от дърво, огради, дървени облицовки и други
                дърводелски дейности на територията на София и страната. Екипът ни
                е от майстори с дългогодишен опит и множество изградени проекти.
                Изработваме различни по вид и размер навеси и павилиони, които се
                отличават със собствен стил и характер. Държим на уникалността и
                художествената стойност, като влагаме прецизност в изработката.
              </p>
            </section>
            <Checkers data={checkerData} />

          </section>
          <section className="my-14 lg:mx-36">
            <ContactUs
              color="border-blue"
              btnColor="bg-blue"
              bgColor="bg-blue-50"
              number="+359 временно"
              scrollBarThumb="scrollbar-thumb-primaryBlue-150"
              scrollBarTrack="scrollbar-track-primaryBlue-500"
              typePage="Web"
              mx="md:mx-10"
            />
          </section>
        </section>

        {/* <section className="mt-20 font-sans flex-center">
          <Title title="Вижте и другите ни услуги" size="text-4xl" />
        </section> */}
        <section className="">
          <SwiperServices service="international" />
        </section>
      </section>
    </>
  );
}
