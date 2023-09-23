import React, { useState } from "react";
import Title from "../Title";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { questionData } from "../data/questions";
import Image from "next/legacy/image";

export default function FaQ() {
  return (
    <AnimateSharedLayout>
      <motion.section
        layout
        className="container relative z-10 mt-10 max-md:py-10 md:p-20 lg:mt-20 lg:rounded-2xl box"
        id="faq"
      >
        <motion.div layout className="flex-center">
          <Title title="Често задавани въпроси" size="text-xl lg:text-5xl" />
        </motion.div>

        <motion.section layout className="md:mt-4">
          {questionData.map((question, index) => {
            return (
              <Question
                key={question._id}
                title={question.title}
                text={question.text}
                isBorder={question.isBorder}
                index={index}
              />
            );
          })}
        </motion.section>
      </motion.section>
    </AnimateSharedLayout>
  );
}
const variants = {
  hide: { opacity: 0, y: -10, transition: { duration: 0.5 } },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const iconVariants = {
  closed: { rotate: 0 },
  open: {
    rotate: "135deg",
    transition: {
      duration: 0.5,
    },
  },
};
function Question({ title, text, isBorder = true, index }) {
  const [isOpen, setOpen] = useState(index == 0 ? true : false);

  return (
    <motion.section
      layout
      className={`p-7 ${isBorder ? "border-b-2 border-blue-200" : ""} `}
    >
      <motion.div
        layout
        onClick={() => setOpen(!isOpen)}
        className="cursor-pointer"
      >
        <motion.div layout className="flex items-center justify-between">
          <motion.h2
            layout
            className="font-semibold uppercase text-md lg:text-lg"
          >
            {title}
          </motion.h2>
          <motion.div
            layout
            animate={isOpen ? "open" : "closed"}
            variants={iconVariants}
            className={`text-xl ${isOpen ? "text-lightGreen" : "text-dark"}`}
          >
            <AiOutlinePlus />
          </motion.div>
        </motion.div>
        <motion.div
          layout
          animate={isOpen ? "show" : "hide"}
          transition={{
            type: "spring",
            duration: 2,
            stiffness: 260,
            damping: 20,
          }}
          variants={variants}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.p
                layout
                exit={{
                  opacity: 0,
                }}
                className="mt-1 font-sans whitespace-pre-line max-lg:text-sm"
              >
                {text}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
