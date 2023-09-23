import Head from "next/head";
import ContactUs from "../components/indexPage/ContactUs";
import FaQ from "../components/indexPage/FaQ";
import HeroSection from "../components/indexPage/HeroSection";
import OurBlog from "../components/indexPage/OurBlog";
import Pricing from "../components/indexPage/Pricing";
import Services from "../components/indexPage/Services";
import SmallInfo from "../components/indexPage/SmallInfo";
import SwiperServices from "../components/SwiperServices";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Изграждане на Покриви,Конструкции,Навеси РАЙБИЛДИНГ 76 ЕООД </title>
        <meta
          name="description"
          content="Фирмата ни предлага предлага професионални услуги в сферата на транспорта и
          хамалските услуги, като това включва преместване на дома и офиса, международно преместване, транспортни услуги,
          товаро-разтоварни дейности и преместване на пиана."
        />
        {/* Important tags for social media */}
        <meta
          property="og:title"
          content="Хамалски и транспортни услуги за София, България"
        />
        <meta
          property="og:description"
          content="Търсите надеждна услуга за преместване и транспорт, 
          която да се справи със следващото Ви преместване? 
          Не търсете повече!
           Нашият опитен екип от хамали предоставя първокласно обслужване, 
           за да гарантира, че вашите вещи се транспортират безопасно и ефективно. 
           От опаковането и товаренето до разтоварването и разопаковането, ние ги покриваме. 
           Свържете се с нас днес, за да насрочите вашето преместване без стрес!"
        />

        <meta property="og:url" content="https://временно.bg/" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="">
        <HeroSection />
        <section className="bg-gray-550 ">
          <SmallInfo />
          <Services />
          {/* <Pricing /> */}
          {/* <OurBlog /> */}

          {/* <FaQ /> */}
          <section className="pb-20 mt-10 lg:mt-20">
            <ContactUs
              color="border-[#d97706]"
              btnColor="bg-[#d97706]"
              bgColor="bg-blue-50"
              number="+359 временно"
              scrollBarThumb="scrollbar-thumb-primaryBlue-150"
              scrollBarTrack="scrollbar-track-primaryBlue-500"
              typePage="Web"
            />
          </section>
        </section>

        <section className="">
          <SwiperServices />
        </section>
      </main>
    </div>
  );
}
