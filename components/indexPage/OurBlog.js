import React from "react";
import Title from "../Title";
import { blogData } from "../../components/data/blog";
import BlogSwiper from "../swiper/BlogSwiper";

const OurBlog = () => {
  return (
    <section className="my-20 ">
      <div className="flex-center flex-col">
        <Title title="Нашият блог" size="text-4xl" />
      </div>
      <section className="mt-10 container ">
        <BlogSwiper data={blogData} />
      </section>
    </section>
  );
};

export default OurBlog;
