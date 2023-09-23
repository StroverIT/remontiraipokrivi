import Head from "next/head";
import Image from "next/image";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";
import { listAllExceptOne } from "../../utils/services";
import Checkers from "./Checkers";

const checkerData = [
  "Изграждане на нова дървена или метална конструкция",
  "Полагане и подмазване на керемиди",
  "Полагане на паропропусклива мембрана",
  "Редене на керемиди",
  "Изработка на двойна скара",
];
export default function HomeMoving() {
  return (
    <>
      <Head>
        <title>Професионално преместване на дома </title>
        <meta
          name="description"
          content="Професионални услуги по преместване на дома, висококачествени опаковъчни материали и консумативи, монтаж – демонтаж. Качество и достъпност!"
        />
        <meta property="og:title" content="Професионално преместване на дома" />
        <meta property="og:description" content=" " />
      </Head>
      <section className="min-h-screen mt-40 ">
        <section className=" lg:px-56 3xl:px-[30rem]">
          <section className="container px-5 py-10 bg-white rounded-lg md:px-14">
            <div className="flex-center">
              <Title title="Изграждане на покрив " size="text-4xl" />
            </div>
            <section className="container mt-2">
              {/* <h3 className="text-xl font-medium">Какво предлагаме:</h3> */}
              <section className="">
                <section>
                  <p>
                    Изграждането на нов покрив е доста сложна дейност, която
                    изисква определени познания, умения и най-вече изключително
                    прецизно изпълнение. През дългите годините на усърдна работа
                    нашата бригада е натрупала не само голям опит, но и всички
                    необходими технически знания, необходими в този бранш. Днес
                    можем да се похвалим с огромно доверие към нас от страна на
                    нашите клиенти, което е най-голямото признание за добре
                    свършената работа. Предлаганите от нас услуги биват
                    извършвани на територията на цялата страна в предварително
                    определени срокове. Освен качествен нов покрив, издържащ на
                    всякакви метеорологични условия, Вие получавате гаранция за
                    извършения от нас ремонт.
                  </p>

                  <p>
                    Не рискувайте със своя дом – оставете трудната задача на
                    нашата бригада от опитни специалисти, за която всяка цел е
                    лесно постижима. За подробна информация относно цените и
                    етапите от изграждането на нов покрив не се колебайте да се
                    свържете с нашия екип.
                  </p>
                </section>

                <Checkers data={checkerData} />
              </section>
              {/* Тука може да се сложи снимка!!!!! */}
            </section>
          </section>
        </section>
        <section className="container my-14 lg:px-36">
          <ContactUs
            color="border-blue"
            btnColor="bg-blue"
            bgColor="bg-blue-50"
            number="+359 временно"
            scrollBarThumb="scrollbar-thumb-primaryBlue-150"
            scrollBarTrack="scrollbar-track-primaryBlue-500"
            mx="md:mx-10"
          />
        </section>
        <div className="fixed top-0 left-0 -z-20">
          <div className="relative w-screen h-screen">
            <Image
              src="/pages-images/home-moving/roof3.jpg"
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
          <SwiperServices service="house" />
        </section>
      </section>
    </>
  );
}
