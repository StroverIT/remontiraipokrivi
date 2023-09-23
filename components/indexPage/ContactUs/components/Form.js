"use client";
import React, { useState } from "react";

import { toastSuccess, toastError } from "../../../../libs/Notifications";
import sendMesage from "../../../../fetches/sendingMessage";

// Components
import Input from "../../../form/Input";
import InputIcons from "../../../form/Icons";

const inputsInit = {
  name: "",
  email: "",
  message: "",
};
export default function Form({ scrollBarThumb, scrollBarTrack }) {
  const [inputs, setInputs] = useState(inputsInit);

  const [isLoading, setLoading] = useState(false);
  const submitHandler = async () => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early

    try {
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
    } catch (error) {
      console.log(error?.message || "Something went wrong");
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset();
    }
  };
  const handler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className="">
      <h3>
        <span
          className={`border-b-4 border-[#d97706] pb-1 text-2xl font-semibold rounded-sm `}
        >
          Свържи се с нас!
        </span>
      </h3>

      <form action="" className="flex flex-col mt-10 " onSubmit={submitHandler}>
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
  );
}
