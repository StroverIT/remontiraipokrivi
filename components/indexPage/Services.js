import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import Title from "../Title";

import { data } from "../data/services";

export default function Services() {
  return (
    <div className="mt-10 lg:mt-20 bg-gray-550" id="services">
      <section className="container py-10">
        <div className="mb-16 text-center flex-center">
          <Title title="Какво предлагаме" size="text-4xl lg:text-5xl" />
        </div>
        <section className="grid gap-10 lg:grid-cols-3">
          {data.map((service, index) => {
            return (
              <Service
                title={service.title}
                key={service._id}
                index={index}
                image={service.image}
                link={service.link}
                p={service.p}
              />
            );
          })}
        </section>
        <div className="mt-10 flex-center">
          <a
            href={`tel:+${process.env.NUMBER}`}
            className="py-4 text-lg font-semibold text-white uppercase rounded-lg px-14 bg-[#d97706]"
          >
            позвъни сега
          </a>
        </div>
      </section>
    </div>
  );
}

function Service({ title, index, image, link, p }) {
  return (
    <Link href={`${link}`} scroll={false}>
      <div className="h-full pb-5 transition-all bg-white shadow-lg cursor-pointer text-dark hover:shadow-lg hover:scale-110 rounded-xl">
        <section className="px-5 pt-4 ">
          <section className="flex justify-between">
            <div className="text-4xl text-[#d97706]">0{index + 1}</div>
            {/* <div className="relative w-10 h-10">
              <Image src={`/icons/${image}`} alt="test" layout="fill" />
            </div> */}
          </section>
          <h2 className="pt-2 text-xl font-medium">{title}</h2>
          <p className="mt-1 font-sans ">{p}</p>
        </section>
      </div>
    </Link>
  );
}
