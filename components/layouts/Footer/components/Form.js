"use client";
import React, {  useState } from "react";

import newsletterSend from "../../../../fetches/newsletterSend";
import { toastError, toastSuccess } from "../../../../libs/Notifications";
import { useRouter } from "next/navigation";

export default function Form() {

  const router = useRouter();


  const [input, setInputs] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handler = (e) => {
    setInputs(e.target.value);
  };
  const newsLetterHandler = async () => {
    setLoading(true);

    const data = await newsletterSend({ email: input });

    if (data.message) {
      setInputs("");
      toastSuccess(data.message);
    }
    if (data.error) {
      toastError(data.error);
    }

    router.push(router.asPath, undefined, { scroll: false });

    setLoading(false);
  };
  return (
    <section className="w-full xl:w-96">
      <h3 className="mt-5 mb-3 font-semibold uppercase ">
        Абонирай се за нашите оферти
      </h3>
      <input
        type="text"
        className="w-full px-2 py-5 text-sm text-black border-none rounded-sm h-7 placeholder:text-dark text-dark"
        placeholder="Email"
        value={input}
        onChange={handler}
      />
      <div className="mt-2 flex-center">
        <button
          className={`bg-[#d97706] w-full py-1 rounded-sm flex-center`}
          onClick={newsLetterHandler}
        >
          {isLoading ? <div className="loader"></div> : "Абонирай ме!"}
        </button>
      </div>
    </section>
  );
}
