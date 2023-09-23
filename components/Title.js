import Image from "next/legacy/image";
import React from "react";
import { FiTruck } from "react-icons/fi";

export default function Title({
  title,
  size,

  lineColor = "bg-[#d97706]",
}) {
  return (
    <div className="">
      <h1 className={`${size} text-center font-medium`}>{title}</h1>

      <div className="mt-2 flex-center">
        <div className={`h-1 w-full ${lineColor}`}></div>
        <div className="relative h-10 px-3 mx-2 text-xl w-14 ">
          <Image
            src="/icons/home.gif"
            alt="Временно"
            layout="fill"
            className="object-contain"
          />
          {/* <FiTruck /> */}
        </div>
        <div className={`h-1 w-full ${lineColor}`}></div>
      </div>
    </div>
  );
}
