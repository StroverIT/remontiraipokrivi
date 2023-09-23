import Head from "next/head";
import React from "react";
import Title from "../../components/Title";

import { blogData } from "../../components/data/blog";
import Blog from "../../components/indexPage/Blog";
const Index = () => {
  return (
    <>
      <Head>
        <title>Блог - Хубаво е да знаете</title>
        <meta
          name="description"
          content="Разберете какъв тип хора ще пренасят вашите ценни вещи или ще изчистват къщата Ви. 
          Нашите ценности и визия за хамалските и транспортните услуги."
        />
      </Head>
      <main className="min-h-screen pt-40 pb-20 bg-blog">
        <section className="container mt-10">
          <div className="flex-center">
            <Title title="Нашият блог" size="text-4xl" />
          </div>
          <section className="grid mt-5 lg:grid-cols-2 gap-y-10 gap-x-5 max-lg:place-items-center xl:place-items-center grid-auto-rows">
            {blogData.map((data) => {
              return (
                <Blog
                  imgUrl={data.imgUrl}
                  link={data.link}
                  key={data._id}
                  paragraph={data.paragraph}
                  title={data.title}
                  date={data.date}
                />
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
};

export default Index;
