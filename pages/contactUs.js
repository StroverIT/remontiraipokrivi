import Head from "next/head";
import React, { useState } from "react";
import { FaViber } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import ContactWithBox from "../components/indexPage/ContactWithBox";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Контакти - Свържи се с нас </title>
        <meta
          name="description"
          content="Контакти с нас. Винаги готови да отговорим на вашите въпроси. Може да се свържете с нас чрез телефон, и-мейл, viber, messenger и instagram "
        />
        <meta property="og:title" content="Контакти - Свържи се с нас" />
        <meta
          property="og:description"
          content="Трябва да се свържете с нашия екип за хамалски и транспортни услуги? 
        Нашата страница за връзка с нас улеснява! 
        Независимо дали имате въпроси относно нашите услуги, имате нужда от оферта или искате да планирате преместване, 
        ние сме тук, за да помогнем. Нашите любезни и опитни представители за обслужване на клиенти са на разположение, 
        за да Ви помогнат на всяка стъпка от пътя. 
        Свържете се с нас днес и ни позволете да помогнем при следващото Ви преместване."
        />
      </Head>
      <main className="container mt-40 rounded-md shadow-lg">
        <div className="xl:grid grid-cols-[27%75%] container py-10">
          <div className="pl-5 border-r border-gray-600">
            <h1 className="pb-4 text-2xl font-semibold">Контакти</h1>
            <ul className="pr-4">
              <li className="">
                <a
                  href="tel:+359 временно"
                  className="flex items-center py-4 gap-x-2"
                >
                  <div className="text-2xl text-blue">
                    <FiPhoneCall />
                  </div>
                  <div className="pl-2">
                    <h2 className="font-medium">Телефон</h2>
                    <p>+359 89 506 3670</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="viber://chat?number=+359 временно"
                  className="flex items-center py-4 gap-x-2"
                >
                  <div className="text-2xl text-blue">
                    <FaViber />
                  </div>
                  <div className="pl-2">
                    <h2 className="font-medium">Viber</h2>
                    <p>+359 89 506 3670</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:временноbg@gmail.com"
                  className="flex items-center py-4 gap-x-2"
                >
                  <div className="text-3xl text-blue">
                    <HiOutlineMail />
                  </div>
                  <div className="pl-2">
                    <h2 className="font-medium">И-мейл</h2>
                    <p>временноbg@gmail.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="max-xl:mt-4 xl:px-10">
            <h1 className="pb-4 pl-5 text-2xl font-semibold">Пишете ни</h1>
            <ContactWithBox btnColor="bg-blue" />
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
