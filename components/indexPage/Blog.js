import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { ImClock } from "react-icons/im";

function Blog({ children, link, imgUrl, title, paragraph, date }) {
  return (
    <div className="flex flex-col justify-center max-w-lg bg-white rounded-md shadow-xl">
      <div className="container md:px-6 ">
        <Link href={`/blog/${link}`}>
          <h2 className="py-4 font-sans text-2xl font-semibold text-center transition-colors hover:text-blue">
            {title}
          </h2>
        </Link>
      </div>
      <div className="relative w-full h-56 md:h-96">
        <Link href={`/blog/${link}`}>
          <Image
            src={`/blog/${imgUrl}`}
            alt={title}
            fill
            className="object-contain"
          />
        </Link>
      </div>
      <div className="px-8 max-sm:pt-5">
        <p className="mb-2 card__preview-text">{paragraph}</p>
      </div>
      <div className="px-8 pb-8">
        <Link href={`/blog/${link}`}>
          <span className="flex items-center py-2 font-semibold rounded-md text-blue hover:underline">
            Продължи четенето
            <span className="pt-[0.1rem] pl-1 ">
              <BsArrowRight />
            </span>
          </span>
        </Link>
      </div>
      <div className="flex items-center px-8 py-6 mt-auto font-semibold bg-gray-100 text-blue">
        <div className="">
          <ImClock />
        </div>
        <div className="pl-1 text-sm">{date}</div>
      </div>
    </div>
  );
}

export default Blog;
