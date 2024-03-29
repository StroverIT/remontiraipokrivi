import Link from "next/link";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiGlobalLine } from "react-icons/ri";


import { data } from "../../data/services";
import Form from "./components/Form";

export default function Footer() {

  return (
    <footer className={`bg-dark   pt-2 z-10 w-full max-md:pb-10`}>
      <section className={` pb-14`}>
        <section className="flex flex-col-reverse 2xl:grid xl:grid-cols-[30%70%]  container text-white  3xl:gap-x-28">
          <section className="flex flex-col xl:items-center xl:justify-center xl:flex-row gap-x-10 2xl:flex-col 2xl:items-start">
           <Form/>
            <section>
              <h4 className="mt-8 font-semibold uppercase">Социални мрежи</h4>
              <div className="flex mt-2 gap-x-5">
                <a
                  href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Button for facebook social media"
                >
                  <div className="transition-transform cursor-pointer flex-center hover:scale-125 hover:text-primaryBlue-450">
                    <div className="text-2xl">
                      <BsFacebook />
                    </div>
                   
                  </div>
                </a>
                {/* <a
                  href="https://www.instagram.com/временноds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Button for instagram social media"
                >
                  <div className="transition-all cursor-pointer flex-center hover:scale-125 hover:text-primaryBlue-450">
                    <div className="text-2xl">
                      <BsInstagram />
                    </div>
                  
                  </div>
                </a> */}
              </div>
            </section>
          </section>

          <section className="grid-cols-[40%30%20%] justify-center xl:grid ">
            <section>
              <h5 className="mt-5 text-lg font-semibold">Услуги</h5>
              <ul className={`list-disc  marker:text-[#d97706] leading-8 ml-4`}>
                {data.map((link) => {
                  return (
                    <li className="cursor-default" key={link._id}>
                      <Link href={link.link} scroll={false}>
                        <span className="pb-1 border-b cursor-pointer border-border">
                          {link.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section>
              <h5 className="mt-5 text-lg font-semibold">{process.env.NEXT_PUBLIC_FIRM_NAME_BG}</h5>
              <ul className={`list-disc marker:text-[#d97706] pb-1 leading-8 ml-4`}>
                {/* <li className="cursor-default">
                  <Link href="/blog" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Блог
                    </span>
                  </Link>
                </li> */}
                <li className="cursor-default">
                  <Link href="/aboutUs" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      За нас
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/contactUs" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Контакти
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/legal/terms-and-conditions" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Условия за ползване
                    </span>
                  </Link>
                </li>
                <li className="cursor-default">
                  <Link href="/legal/privacy-policy" scroll={false}>
                    <span className="pb-1 border-b cursor-pointer border-border">
                      Защита на лични данни
                    </span>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="">
              <div>
                <h5 className="mt-5 text-lg font-semibold text-left">
                  Контакти
                </h5>
                <div className="ml-1 border-l border-border">
                  <ul className="pl-4 leading-8">
                    <li className="flex items-center">
                      <a href={`tel:+${process.env.NEXT_PUBLIC_NUMBER}`}>
                        <section className="flex-center">
                          <FiPhoneCall />
                          <span className="pl-1">{process.env.NEXT_PUBLIC_NUMBER_SHOW}</span>
                        </section>
                      </a>
                    </li>
                    <li className="flex items-center">
                      <a href={`viber://chat/?number=%2B${process.env.NEXT_PUBLIC_NUMBER}`}>
                        <section className="flex-center ">
                          <span className="text-lg">
                            <FaViber />
                          </span>
                          <span className="pl-1">Пишете ни</span>
                        </section>
                      </a>
                    </li>
                    <li className="flex items-center">
                      <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                        <section className="flex-center">
                          <HiOutlineMail />
                          <span className="pl-1">{process.env.NEXT_PUBLIC_EMAIL}</span>
                        </section>
                      </a>
                    </li>

                    <li className="flex items-center">
                      <RiGlobalLine />{" "}
                      <span className="pl-1">{process.env.NEXT_PUBLIC_WEBSITE_URL}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
      <section
        className={`bg-gray-250 flex-center py-5 text-white flex-wrap max-sm:flex-col relative flex-col`}
      >
        <div className="flex flex-col sm:pl-1 lg:flex-row">
          <div className="flex-center">
            <AiOutlineCopyright />
            2023 {process.env.NEXT_PUBLIC_FIRM_NAME_BG}.
          </div>
          <div className="pl-1">Всички права запазени.</div>
        </div>
        {/* <div className="text-sm text-center lg:absolute right-10">
          Изработен от -{" "}
          <a
            className="underline"
            href="https://www.strover.bg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strover
          </a>
        </div> */}
      </section>
    </footer>
  );
}
