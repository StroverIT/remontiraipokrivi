import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";
import ContactUs from "../components/indexPage/ContactUs";
import Title from "../components/Title";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>За нас и нашата визия и ценности</title>
        <meta
          name="description"
          content={`
           Открийте как ние предлагаме надеждни и бързи решения. С доказана ефективност и персонализиран подход, ние сме вашият 
           надежден партньор за всяко предизвикателство, свързано с преместване и транспорт.`}
        />
        <meta property="og:title" content="За нас и нашата визия и ценности" />
        <meta
          property="og:description"
          content={`Нашата мисия е да бъдем предпочитаната компания за всеки нуждаещ се от преместване! Независимо дали се местите в града или страната, нашият опитен екип ще направи безпроблемно вашето преместване.`}
        />
      </Head>
      <section className="mt-20">
        <div className="fixed -z-10">
          <div className="relative">
            <div className="relative w-screen h-screen ">
              <Image
                src="/IMG_2191.jpeg"
                alt="image"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 z-10 w-screen h-screen bg-dark-transparent"></div>
          </div>
        </div>
        <section className="relative z-20 pt-20 bg-white smToXl:container xl:mx-80 ">
          <div className="flex-col flex-center">
            <Title title="Нашата мисия" size="text-4xl" />
            <p className="max-w-xl mt-5 text-center">
              Да станем предпочитаната компания за всеки нуждаещ се от
              преместване в страната и чужбина – прилагайки иновативни практики,
              качествени услуги и решения. Да осигурим ефективно преместване на
              нашите клиенти и най-доброто изживяване от прехода към новото си
              място. С помощта на нашите всеотдайни професионалисти да създадем
              устойчивост за растеж на бизнеса и обществото. Позволете да
              помогнем на вас за един плавен преход без стрес.
            </p>
          </div>
          <section className="grid mt-20 lg:grid-cols-2 ">
            <div className="p-10 border-blue-100 border-y flex-center max-md:order-2">
              <div className="flex-col flex-center">
                <Title title="Визия" size="text-3xl" />
                <p className="mt-2 text-sm text-center md:max-w-sm ">
                  В „временно“ имаме ясна визия за това, къде искаме да стигнем
                  и как да стигнем там. Вярваме, че като си поставяме амбициозни
                  цели и работим усилено за постигането им, можем да се
                  подобряваме и растем като компания. Нашата визия ни кара да
                  предоставяме най-добрите хамалски и транспортни услуги на
                  клиентите и да бъдем водещият избор за всеки, който се нуждае
                  от качествено и надеждно преместване.
                </p>
              </div>
            </div>
            <div className="py-5 bg-blue-100 flex-center md:py-10 max-md:order-1">
              <div className="relative w-20 h-20 md:h-44 md:w-44 ">
                <Image
                  src="/about-us/professional-services.png"
                  layout="fill"
                  alt="професионални услуги услуги"
                />
              </div>
            </div>
            <div className="p-10 border-b border-blue-100 flex-center max-md:order-4">
              <div className="flex-col flex-center">
                <Title title="Ценности:" size="text-3xl" />
                <ol className="flex flex-col max-w-md gap-2 mt-2 text-sm list-decimal">
                  <li>
                    <h2 className="text-lg">Отговорност:</h2>
                    <p>
                      Поемаме отговорност за нашите действия и тяхното
                      въздействие, държим да изградим доверие и надеждност за
                      нашите клиенти и обществото. Да бъдем ангажирани,
                      отговорни и почтени към вас е наш приоритет и ценност.
                    </p>
                  </li>
                  <li>
                    <h2 className="text-lg">Почтеност/Честност:</h2>
                    <p>
                      Нашата основа на доверието и надеждността. Високо ценим
                      честността и прозрачността във всички бизнес сделки, така
                      ние създаваме на дълготрайни взаимоотношения с нашите
                      заинтересовани страни и общността.
                    </p>
                  </li>
                  <li>
                    <h2 className="text-lg">Сътрудничество:</h2>
                    <p>
                      Нашият ключ към успеха в „временно“. Вярваме, че работата
                      в екип и споделянето на идеи води към по-добри постижения.
                      Изграждането на положителна и подкрепяща работна среда,
                      която насърчава нашите служители и стимулира бизнес
                      успеха. Работата в екип прави мечтата да работи.
                    </p>
                  </li>
                  <li>
                    <h2 className="text-lg">Иновативност:</h2>
                    <p>
                      Насърчаване на нашата креативност и непрекъснато
                      усъвършенстване е начинът и движещата сила към основата на
                      съвършенството в предоставянето на възможно най-добрите
                      услуги за нашите клиенти и общността.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="py-5 flex-center bg-blue md:py-10 max-md:order-3">
              <div className="relative w-20 h-20 md:h-44 md:w-44 ">
                <Image
                  src="/about-us/respect.png"
                  layout="fill"
                  alt="професионални услуги услуги"
                />
              </div>
            </div>
            {/* <div className="p-10 border-b border-blue-100 flex-center max-md:order-6">
              <div className="flex-col flex-center">
                <Title title="Нашата история" size="text-3xl" />
                <p className="max-w-md mt-2 text-sm text-center">
                  2017 година - основателя започва работа като доставчик, възмутен
                  от отношението на шефа си, се мотивира да създаде собствен малък
                  бизнес.
                </p>
                <p className="max-w-md mt-2 text-sm text-center">
                  Средата на 2017 година - започва работа в международна фирма за
                  товари
                </p>
                <p className="max-w-md mt-2 text-sm text-center">
                  2018 година - основателя Денислав започва съвместен бизнес с
                  Валери като вътрешена дъщерна транспортна фирма на Маднес
                  Експрес.
                </p>
              </div>
            </div>
            <div className="py-5 bg-blue-100 lg:order-1 flex-center md:py-10 max-md:order-5">
              <div className="relative w-20 h-20 md:h-44 md:w-44">
                <Image
                  src="/about-us/business.png"
                  layout="fill"
                  alt="професионални услуги услуги"
                />
              </div>
            </div> */}
          </section>
          <section className="flex-col py-16 flex-center ">
            <div className="flex-center">
              <Title title="ЕКИПЪТ" size="text-4xl" />
            </div>
            <section className="grid mt-16 md:grid-cols-3 gap-x-20 gap-y-10">
              <div className="flex-col flex-center">
                <div className="relative transition-all border-2 rounded-full cursor-pointer w-36 h-36 hover:scale-110 border-primaryBlue-100 ">
                  {/* <Image
                    src="/djulia.jpg"
                    alt="growth for you and your company"
                    layout="fill"
                    className="object-contain rounded-full "
                  /> */}
                </div>
                <h2 className="mt-3 text-xl text-center">Денислав Цветков</h2>
                <p>Управител</p>
              </div>
              <div className="flex-col flex-center">
                <div className="relative transition-all border-2 rounded-full cursor-pointer w-36 h-36 hover:scale-110 border-primaryBlue-100 ">
                  {/* <Image
                    src="/hrisi2_durt_crop.jpg"
                    alt="growth for you and your company"
                    layout="fill"
                    className="rounded-full bg-blend"
                  /> */}
                </div>
                <h2 className="mt-3 text-xl text-center">Йоана Стайкова</h2>
                <p>Hr консултант</p>
              </div>
              <div className="flex-col flex-center">
                <div className="relative transition-all border-2 rounded-full cursor-pointer w-36 h-36 hover:scale-110 border-primaryBlue-100 ">
                  <Image
                    src="/personal/test_v3.jpg"
                    alt="growth for you and your company"
                    layout="fill"
                    className="object-contain rounded-full bg-[#afafaf]"
                  />
                </div>
                <h2 className="mt-3 text-xl text-center">Емил Златинов</h2>
                <p>Ит съпорт</p>
              </div>
            </section>
          </section>
          <section className="pb-20">
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
      </section>
    </>
  );
}
