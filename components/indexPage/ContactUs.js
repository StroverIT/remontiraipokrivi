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
export default function ContactUs({
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
        className={`flex-center border-8 border-[#d97706] max-3xl:container  border border-l-8 ${mx} shadow-lg`}
        id="contactUs"
      >
        <section
          className={`grid lg:grid-cols-2 py-14 lg:py-20  w-full px-5 xl:px-20  bg-white-20`}
        >
          <section className="">
            <h3>
              <span
                className={`border-b-4 border-[#d97706] pb-1 text-2xl font-semibold rounded-sm `}
              >
                Свържи се с нас!
              </span>
            </h3>

            <form
              action=""
              className="flex flex-col mt-10 "
              onSubmit={submitHandler}
            >
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onReCAPTCHAChange}
              />
              <Input
                placeholder="Вашето име"
                id="name"
                val={inputs.name}
                onChange={handler}
                iconType="name"
              />
              <Input
                placeholder="Вашият и-мейл"
                id="email"
                val={inputs.email}
                onChange={handler}
                iconType="email"
              />
              <div className="relative lg:mb-3">
                <div className="absolute left-0 z-10 top-2.5 text-lg">
                  <InputIcons iconType="message" />
                </div>
                {/* className="w-full h-2 px-4 pt-2 bg-transparent border-b border-white scrollbar scrollbar-thumb-pink-100 scrollbar-track-pink-200 focus:outline-none" */}
                <textarea
                  className={`w-full h-24 px-6 py-2 leading-tight placeholder-transparent bg-transparent border-b appearance-none placeholder:pl-10 peer  focus:outline-none focus:shadow-outline scrollbar ${scrollBarThumb} ${scrollBarTrack}`}
                  id="message"
                  placeholder="Вашият коментар"
                  name="message"
                  value={inputs.message}
                  onChange={handler}
                />
                <label
                  className="absolute  z-10 -top-3.5 left-0 block mb-2 text-sm  text-gray-darker peer-placeholder-shown:text-base peer-placeholder-shown:px-6  peer-placeholder-shown:top-1.5 transition-all duration-300"
                  htmlFor="comment"
                >
                  Вашият коментар
                </label>
              </div>
              <button
                className={`bg-[#d97706] px-10 py-1  flex-center text-white`}
                type="submit"
              >
                {isLoading ? <div className="loader"></div> : "Изпрати"}
              </button>
            </form>
          </section>
          <section className="flex flex-col mx-auto space-y-3 mt-7 focus:border-transparent">
            <div className="flex items-center">
              <a href="mailto:Pokrividoverie74@gmail.com">
                <section className="flex-center">
                  <div className="text-2xl ">
                    <HiOutlineMail />
                  </div>
                  <div className="pl-1 ">Pokrividoverie74@gmail.com</div>
                </section>
              </a>
            </div>
            <div className="flex items-center">
              <a href={`tel:+${process.env.NUMBER}`}>
                <section className="flex-center">
                  <div className="text-xl ">
                    <FiPhoneCall />
                  </div>
                  <div className="pl-1 ">{process.env.NEXT_PUBLIC_NUMBER_SHOW}</div>
                </section>
              </a>
            </div>
            <div className="flex items-center">
              <a href={`viber://chat/?number=%2B${process.env.NEXT_PUBLIC_NUMBER}`}>
                <section className="flex-center">
                  <div className="text-xl ">
                    <FaViber />
                  </div>
                  <div className="pl-1 ">Пишете ни</div>
                </section>
              </a>
            </div>
          </section>
        </section>
      </motion.section>
    </>
  );
}
