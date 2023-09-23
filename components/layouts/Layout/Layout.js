
"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Components

import Cookie from "../../banners/Cookie";
import Footer from "../Footer";
import Navigation from "../Navigation";
import ToastContainer from "../ToastContainer";

export default function Layout({ children }) {
  

  return (
    <>
      <Cookie  />
      <div className="flex flex-col justify-between h-screen">
        <Navigation />
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              const html = document.querySelector("html");
              window.scrollTo({ top: 0 });
              html.style.scrollBehavior = "smooth";
            }
          }}
        >
          <motion.div
            key={usePathname}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.5,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {
                opacity: 0,
              },
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}
