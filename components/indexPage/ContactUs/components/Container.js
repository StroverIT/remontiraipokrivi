"use client";
import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Container({ children, mx }) {
  const [box, boxView] = useInView();
  const boxAnim = useAnimation();

  // border-pink
  // bg-pink-50

  useEffect(() => {
    if (boxView) boxAnim.start("animate");
    if (!boxView) boxAnim.start("initial");
  }, [boxView]);

  return (
    <motion.section
      ref={box}
      animate={boxAnim}
      className={`flex-center border-8 border-[#d97706] max-3xl:container  border border-l-8 ${mx} shadow-lg`}
      id="contactUs"
    >
      <section
        className={`grid lg:grid-cols-2 py-14 lg:py-20  w-full px-5 xl:px-20  bg-white-20`}
      >
        {children}
      </section>
    </motion.section>
  );
}
