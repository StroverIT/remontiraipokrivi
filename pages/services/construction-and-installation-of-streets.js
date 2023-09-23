import Head from "next/head";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import { BsCheckLg } from "react-icons/bs";
import Checkers from "./Checkers";

const checkerData = [
  "Планиране и проектиране",
  "Избор на материали",
  "Подготовка на повърхностите",
  "Монтаж на улуците",
  "Тестване и проверка",
  "Завършващи дейности",
  "Боядисване (при необходимост)",
];

export default function CleaningOfApartmentsAndHouses() {
  return (
    <>
      <Head>
        <title>Монтаж и изграждане на дренажна ситема тип (улуци)</title>
        <meta
          name="description"
          content={` Товаро-разтоварни услуги за тирове, контейнери и други. Приемане, разтоварване и подреждане на стоката в складови бази. Претоварване на стока от тир в тир.`}
        />
        <meta
          property="og:title"
          content="Монтаж и изграждане на дренажна ситема тип (улуци)"
        />
        <meta property="og:description" content="" />
      </Head>
      <div className="min-h-screen mt-40 ">
        <section className="container font-sans">
          <section className="flex-center">
            <Title
              title="Монтаж и изграждане на дренажна ситема тип (улуци)"
              size="text-3xl"
            />
          </section>
          <section class="lg:px-56">
            <section>
              <p>
                Изграждането и монтажът на улуци са важни процеси при
                строителството или ремонта на сгради. Улуците (дренажните
                системи) играят ролята на отводнителни канали, които събират и
                отвеждат дъждовната вода или други течности от покрива и
                повърхностите на сградата, предотвратявайки така наводнения и
                влагови проблеми.
              </p>

              <p>
                Изграждането и монтажът на улуци изисква професионални умения и
                опит, за да се гарантира правилното функциониране и
                дълготрайност на системата. При добре изпълнени дейности,
                улуците играят важна роля в опазването на сградата от водни
                наводнения и увреждания, осигурявайки здрава и суха околност за
                жителите или потребителите на сградата.
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
          <SwiperServices service="loading" />
        </section>
      </div>
    </>
  );
}
