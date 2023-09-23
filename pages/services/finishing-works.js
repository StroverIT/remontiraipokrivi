import Head from "next/head";
import Image from "next/image";
import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import { BsCheckLg } from "react-icons/bs";
import Checkers from "../../components/Checkers";


const checkerData = [
  "Демонтажни довършителни работи",
  "Шпакловане",
  "Боядисване",
  "Обръщане на прозорци",
  "Направа на мазилки",
  "Направа на замазки по подове",
  "Полагане на настилки и облицовки",
  "Зидарии при довършителни работи",
  "Сухо строителство",
  "Монтажни довършителни работи",
];

export default function DisposalOfOldFurniture() {
  return (
    <>
      <Head>
        <title>Транспортни Услуги: Ефективен, Бърз и Надежден</title>
        <meta
          name="description"
          content={`Професионални транспортни и товарни услуги на достъпни цени. Бусове и камиони за вашия товарен транспорт. Транспортна линия: София - Троян - В. Търново – Варна и обратно. `}
        />
        <meta
          property="og:title"
          content="Транспортни и товарни услуги в София и страната."
        />
        <meta property="og:description" content="" />
      </Head>
      <div className="min-h-screen mt-40">
        <section className="container font-sans">
          {/* Много често се случва да пазим с години стари вещи, мебели и други
              предмети в мазето или на тавана. С годините те се натрупват и се стига
              до момента, в който се чудите как да се отървете от тях и да ги
              изхвърлите. Понякога, за съжаление, някои недобросъвестни съседи
              изхвърлят боклука си направо в мазето. */}
          <section className="lg:px-56 ">
            <section className="p-10 bg-white rounded-md">
              <section className="flex-center">
                <Title title="Довършителни Работи" size="text-3xl" />
              </section>
              <section>
                <p>
                  Довършителните работи обхващат онези работни процеси, чрез
                  които се създават защитни, изолационни и декоративни покрития
                  върху конструкциите с цел да се предпазят сградите от
                  атмосферни или други вредни влияния, да се създадат
                  по-благоприятни експлоатационни условия и да се решат
                  определени интериорни задачи.
                </p>
              </section>
              <Checkers data={checkerData} />
            </section>
          </section>
          {/* <div className="fixed top-0 left-0 -z-20">
            <div className="relative w-screen h-screen">
              <Image
                src="/pages-images/transport-service/first.jpg"
                fill
                alt="Нашата фирма предлага висококачествени Транспортни услуги за безопасно и ефективно преместване на вашия дом или офис"
                className=""
              />
            </div>
          </div> */}
        </section>
        <section className="container my-14 lg:px-40">
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
        {/* <section className="py-10 mt-20 font-sans bg-white">
          <div className="container flex-center">
            <Title title="Вижте и другите ни услуги" size="text-4xl" />
          </div>
        </section> */}
        <section className="">
          <SwiperServices service="transport" />
        </section>
      </div>
    </>
  );
}
