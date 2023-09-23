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
        <title>Изграждане на Покриви,Конструкции,Навеси {process.env.NEXT_PUBLIC_FIRM_NAME_BG} ЕООД </title>
        <meta
          name="description"
          content="Изграждане на Покриви,Конструкции,Навеси {process.env.NEXT_PUBLIC_FIRM_NAME_BG} ЕООД"
        />
        {/* Important tags for social media */}
        <meta
          property="og:title"
          content="Изграждане на Покриви,Конструкции,Навеси {process.env.NEXT_PUBLIC_FIRM_NAME_BG} ЕООД"
        />
        <meta
          property="og:description"
          content="Изграждане на Покриви,Конструкции,Навеси {process.env.NEXT_PUBLIC_FIRM_NAME_BG} ЕООД"
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
              number="+359893909594"
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
