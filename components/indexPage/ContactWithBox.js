import React, { useEffect, useRef, useState } from "react";

import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaViber } from "react-icons/fa";
import InputIcons from "../form/Icons";

import Input from "../form/Input";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { toastSuccess, toastError } from "../../libs/Notifications";
import sendMesage from "../../fetches/sendingMessage";
import Script from "next/script";

import ReCAPTCHA from "react-google-recaptcha";
const inputsInit = {
  name: "",
  email: "",
  message: "",
};
export default function ContactWithBox({
  color,
  bgColor,
  btnColor,
  number,
  scrollBarThumb,
  scrollBarTrack,
  typePage,
  mx = "3xl:mx-96",
}) {
  const [inputs, setInputs] = useState(inputsInit);

  const [isLoading, setLoading] = useState(false);
  const [box, boxView] = useInView();
  const boxAnim = useAnimation();

  const handler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const recaptchaRef = useRef(null);
  // border-pink
  // bg-pink-50
  const submitHandler = async (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
  };
  const onReCAPTCHAChange = async (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert
        console.log("Email registered successfully");
        setLoading(true);
        // Execute the reCAPTCHA when the form is submitted

        if (!inputs.name || !inputs.email || !inputs.message) {
          setLoading(false);
          return toastError("Моля попълнете всички полета!");
        }

        const data = await sendMesage(inputs);
        if (data.message) {
          setInputs(inputsInit);
          toastSuccess(data.message);
        }
        if (data.error) {
          toastError(data.error);
        }

        setLoading(false);
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error?.message || "Something went wrong");
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset();
    }
  };
  useEffect(() => {
    if (boxView) boxAnim.start("animate");
    if (!boxView) boxAnim.start("initial");
  }, [boxView]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        id="my-script"
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      ></Script>
      <motion.section
        ref={box}
        animate={boxAnim}
        className={`flex-center  max-3xl:container  `}
        id="contactUs"
      >
        <section className={`  w-full    `}>
          <form
            action=""
            className="flex flex-col w-full xl:mt-6"
            onSubmit={submitHandler}
          >
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onReCAPTCHAChange}
            />
            <input
              type="text"
              value={inputs.name}
              onChange={handler}
              name="name"
              placeholder="Вашето име"
              className="py-2 pl-2 text-lg border border-gray-600 text-dark placeholder:text-gray-250"
            />
            <input
              type="text"
              value={inputs.email}
              onChange={handler}
              name="email"
              placeholder="Вашият и-мейл"
              className="py-2 pl-2 mt-4 text-lg border border-gray-600 text-dark placeholder:text-gray-250"
            />
            <div className="relative mt-5 lg:mb-5">
              {/* className="w-full h-2 px-4 pt-2 bg-transparent border-b border-white scrollbar scrollbar-thumb-pink-100 scrollbar-track-pink-200 focus:outline-none" */}
              <textarea
                className={`w-full  border-gray-600 py-2 pl-2 relative z-10   placeholder-transparent bg-transparent border appearance-none placeholder:pl-10 peer text-gray-darker focus:outline-none focus:shadow-outline scrollbar `}
                id="message"
                placeholder="Вашият коментар"
                name="message"
                value={inputs.message}
                rows="5"
                onChange={handler}
              />
              <label
                className="absolute block mb-2 text-sm transition-all duration-300 -top-4 -left-0 text-gray-250 peer-placeholder-shown:text-lg peer-placeholder-shown:px-6 peer-placeholder-shown:top-2 peer-placeholder-shown:-left-4"
                htmlFor="comment"
              >
                Вашето съобщение
              </label>
            </div>
            <button
              className={`${btnColor} py-2  flex-center text-white`}
              type="submit"
            >
              {isLoading ? <div className="loader"></div> : "Изпрати"}
            </button>
          </form>
        </section>
      </motion.section>
    </>
  );
}
