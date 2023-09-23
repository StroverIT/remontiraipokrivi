import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import { BsCheckLg } from "react-icons/bs";
import Checkers from "../../components/Checkers";

const checkerData = [
  "Строителен анализ и изисквания",
  "Избор на материали",
  "Проектиране на конструкцията",
  "Изготвяне на технически чертежи",
  "Планиране на строителния процес",
  "Монтаж и изпълнение",
  "Тестване и одобрение",
  "Завършващи работи",
];

export default function CleaningBasementsAndAttics() {
  return (
    <>
      <Head>
        <title>Преместване на пиана, каси, витрини</title>
        <meta
          name="description"
          content={`Фирмата ни предлага услугата "Преместване на пиана, каси, витрини". Няма нужда да се притеснявате за вашите клавиши, в сигурни ръце са!`}
        />
        <meta
          property="og:title"
          content="Преместване на пиана, каси, витрини"
        />
        <meta property="og:description" content="" />
      </Head>
      <section className="min-h-screen mt-40 ">
        <section className="container font-sans">
          <section className="flex-center">
            <Title
              title="Изграждане на план за покривна конструкция."
              size="text-3xl"
            />
          </section>
          <section class="lg:px-56">
            <section>
              <p>
                Изготвянето на план за покривна конструкция, метал или дърво, е
                процес, който изисква внимание към детайлите и знания в областта
                на строителството и инженерството. Важно е да се проектира
                стабилна и здрава конструкция, която отговаря на изискванията за
                безопасност и ефективност. Ние ще я проектираме и изработим от
                0-та до завършен преокт и ще се съобразим с вашите изисквания.
              </p>

              <p>
                Изготвянето на план за покривна конструкция, от метал лии дърво,
                изисква технически и инженерни знания, както и опит в
                съчетаването на различни материали и техните свойства. Внимание
                към детайлите, използване на качествени материали и изпълнение
                на строго спецификациите са от съществено значение за успешното
                изпълнение на проекта. ако изберете нас ние ще направим една
                конструкция която ще е издръжлива на всички метерологични
                условия ние имаме фирмен процес при изготвянето на целия процес.
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
          <SwiperServices service="piano" />
        </section>
      </section>
    </>
  );
}
