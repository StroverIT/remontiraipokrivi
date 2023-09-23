import React, { useContext, useEffect, useState } from "react";

import { Twirl as Hamburger } from "hamburger-react";
import { globalContext } from "../globalContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import { data } from "../data/services";
import PcVersion from "./navigationElem/PcVersion";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail, HiX } from "react-icons/hi";
import { TbBus } from "react-icons/tb";
import { BsTelephoneForward } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaViber,
} from "react-icons/fa";

export default function Navigation() {
  const router = useRouter();

  const { heroRef, scrollData, footerRef } = useContext(globalContext);
  const pathname = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnMain, setIsOnMain] = useState(false);
  const [servicePcState, setServicePcState] = useState(false);

  const [secondNavTelephone, setSecondNavTelephone] = useState(true);

  const handleNav = (hash, e) => {
    e.preventDefault();
    setMenuOpen(false);
    let timer;
    if (hash) {
      const item = document.querySelector(hash);

      timer = setTimeout(() => {
        if (item) {
          item.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 250);
    }
    return () => clearTimeout(timer);
  };
  useEffect(() => {
    if (heroRef.current) {
      if (scrollData >= heroRef.current.offsetHeight - 86) {
        setIsOnMain(true);
      } else setIsOnMain(false);
    }

    if (footerRef.current) {
      const footer = footerRef.current;
      const screenHeight = screen.height;
      const footerDistance = footer.offsetTop - screenHeight;

      if (scrollData <= footerDistance) {
        setSecondNavTelephone(true);
      } else setSecondNavTelephone(false);
    }
  }, [scrollData]);
  useEffect(() => {
    setMenuOpen(false);
    if (pathname != "/") {
      setIsOnMain(true);
    } else {
      setIsOnMain(false);
    }
    setServicePcState(false);
  }, [router]);
  useEffect(() => {
    const body = document.querySelector("body");
    if (menuOpen) {
      body.style.overflow = "hidden";
    } else if (!menuOpen) {
      body.removeAttribute("style");
    }
  }, [menuOpen]);
  return (
    <nav
      className={`${
        isOnMain ? "bg-dark box3" : "bg-dark-50 box2"
      } fixed top-0 left-0 z-50 w-full text-white  uppercase font-medium box2 transition-colors`}
    >
      <PcVersion
        pathname={pathname}
        servicePcState={servicePcState}
        setServicePcState={setServicePcState}
        data={data}
        isOnMain={isOnMain}
      />
      {/* MOBILE VERSION */}
      <section className="container relative justify-between py-6 flex-center lg:hidden">
        <div className="absolute w-48 h-48 ">
          <Link href="/">
            <Image
              src="/logo2.svg"
              alt="logo"
              layout="fill"
              className="object-contain"
            />
          </Link>
        </div>
        <div className="relative invisible w-64 ">test</div>

        <section className="flex items-center justify-center gap-x-5 ">
          <div className="flex gap-x-2">
            {/* <a
              href="tel:+359 временно"
              className="h-8 px-4 mt-2 text-sm rounded-sm bg-blue flex-center "
            >
              позвъни
            </a> */}

            <button className="relative z-20" aria-label="Navigation menu">
              <Hamburger
                toggle={setMenuOpen}
                toggled={menuOpen}
                size={30}
                label="Hamburger menu"
              />
            </button>
          </div>
          <AnimatePresence mode="wait">
            {menuOpen && (
              <motion.section
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                  duration: 0.5,
                  type: "spring",
                }}
                variants={{
                  initialState: {
                    y: "100vh",
                  },
                  animateState: {
                    y: 0,
                  },
                  exitState: {
                    y: "-100vh",
                  },
                }}
                className="fixed top-0 left-0 h-screen bg-dark"
              >
                <section className="w-screen h-screen flex-center">
                  <ul className="flex flex-col items-center justify-center text-2xl gap-y-6">
                    <li onClick={handleNav.bind({}, "#index")}>
                      <Link href="/" scroll={false}>
                        Начало
                      </Link>
                    </li>

                    <li
                      className=" group"
                      onClick={(e) => setServicePcState(true)}
                    >
                      <div className="cursor-pointer flex-center">
                        <span className="">Услуги</span>
                        <span
                          className={`pl-1 group-hover:rotate-90 transition-transform text-lg`}
                        >
                          <TbBus />
                        </span>
                      </div>
                    </li>

                    {/* <li>
                      <Link href="/pricing" scroll={false}>
                        Цени
                      </Link>
                    </li> */}
                    {/* {pathname == "/" && (
                      <li onClick={handleNav.bind({}, "#faq")}>
                        <a href="#">Въпроси</a>
                      </li>
                    )} */}

                    <li>
                      <Link href="/aboutUs" scroll={false}>
                        За нас
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/blog" scroll={false}>
                        БЛОГ
                      </Link>
                    </li> */}
                  </ul>
                </section>
              </motion.section>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {servicePcState && (
              <motion.div
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                  duration: 0.5,
                  type: "spring",
                }}
                variants={{
                  initialState: {
                    y: "-100vh",
                  },
                  animateState: {
                    y: 0,
                  },
                  exitState: {
                    y: "-100vh",
                  },
                }}
                className="fixed top-0 left-0 z-[999] flex flex-col w-full h-screen"
              >
                <section className="w-full h-screen bg-[#d97706] flex-center">
                  <section className="container relative">
                    <section
                      className="absolute right-0 text-xl bg-white rounded-md top-5 text-[#d97706]"
                      onClick={() => setServicePcState(false)}
                    >
                      <HiX />
                    </section>
                    <ul className="flex-col p-10 text-sm ">
                      {data.map((list, i) => {
                        return (
                          <Link href={list.link} key={i} scroll={false}>
                            <motion.li
                              variants={{
                                hidden: (i) => ({
                                  opacity: 0,
                                  y: -50 * i,
                                  zIndex: -10,
                                }),
                                visible: (i) => ({
                                  opacity: 1,
                                  y: 0,
                                  zIndex: 0,
                                  transition: {
                                    delay: i * 0.05,
                                  },
                                }),
                              }}
                              initial="hidden"
                              animate="visible"
                              custom={i}
                              className="py-2 pl-2 transition-colors cursor-pointer hover:bg-white hover:text-blue-150"
                            >
                              {list.title}
                            </motion.li>
                          </Link>
                        );
                      })}
                    </ul>
                  </section>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </section>
      <AnimatePresence mode="wait">
        {secondNavTelephone && (
          <motion.section
            key="subsectionMenuTel"
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.9,
            }}
            variants={{
              initialState: {
                y: "100vw",
              },
              animateState: {
                opacity: 1,
                y: 0,
              },
              exitState: {
                y: "100vw",
              },
            }}
            className="fixed bottom-0 w-full bg-dark lg:hidden"
          >
            <div className="flex items-center justify-between py-4 text-2xl max-sm:px-10 text-[#d97706] sm:container">
              <div>
                <a
                  href={`tel:+${process.env.NUMBER}`}
                  aria-label="Button for calling on telehone"
                >
                  <FiPhoneCall />
                </a>
              </div>

              <div>
                <a
                  href="mailto:Pokrividoverie74@gmail.com"
                  aria-label="Button for writting on email"
                >
                  <HiOutlineMail />
                </a>
              </div>
              <div>
                <a
                  href={`viber://chat/?number=%2B${process.env.NEXT_PUBLIC_NUMBER}`}
                  aria-label="Button for calling on viber"
                >
                  <FaViber />
                </a>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </nav>
  );
}
