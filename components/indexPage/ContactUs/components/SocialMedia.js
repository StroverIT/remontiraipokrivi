import React from "react";

// React
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaViber } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <section className="flex flex-col mx-auto space-y-3 mt-7 focus:border-transparent">
      <div className="flex items-center">
        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
          <section className="flex-center">
            <div className="text-2xl ">
              <HiOutlineMail />
            </div>
            <div className="pl-1 ">{process.env.NEXT_PUBLIC_EMAIL}</div>
          </section>
        </a>
      </div>
      <div className="flex items-center">
        <a href={`tel:+${process.env.NEXT_PUBLIC_NUMBER}`}>
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
  );
}
