"use client"
import React, {  useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
// Next
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/legacy/image";

// Data
import { data } from "../data/services";

// Components
import PcVersion from "./navigationElem/PcVersion";
import MobileVersion from "./navigationElem/MobileVersion"
import { Twirl as Hamburger } from "hamburger-react";

// Icons
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

  const pathname = router.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnMain, setIsOnMain] = useState(false);
  const [servicePcState, setServicePcState] = useState(false);

  const [secondNavTelephone, setSecondNavTelephone] = useState(true);


  
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
      <MobileVersion
      setMenuOpen={setMenuOpen}
      menuOpen={menuOpen}
      servicePcState={servicePcState}
       data={data}
       setServicePcState={setServicePcState}
      />
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
                  href={`tel:+${process.env.NEXT_PUBLIC_NUMBER}`}
                  aria-label="Button for calling on telehone"
                >
                  <FiPhoneCall />
                </a>
              </div>

              <div>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
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
