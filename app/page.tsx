"use client"
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4">
            Resources for everyone
          </h2>
          <p className="text-lg text-gray-600">
            Subheading that sets up context, shares more info about the website,
            or generally gets people psyched to keep scrolling.
          </p>
        </div>

        {/* Right Column: Placeholder for Image/Content */}
        <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center">
          <span>(Visual Content Goes Here)</span>
        </div>
      </div>

      <div className="grid grid-cols-3 bg-[#E0A959] border-y border-black text-center">
        <div className="py-16 border-r border-black">
          <div className="text-4xl font-bold text-black">1,000+</div>
          <div className="mt-2 text-lg text-black">Resources</div>
        </div>

        <div className="py-16 border-r border-black">
          <div className="text-4xl font-bold text-black">99%</div>
          <div className="mt-2 text-lg text-black">Satisfied</div>
        </div>

        <div className="py-16">
          <div className="text-4xl font-bold text-black">4,800</div>
          <div className="mt-2 text-lg text-black">Users</div>
        </div>
      </div>

      <div className="grid place-content-center p-4 gap-4">
        <h1 className="text-center text-2xl font-bold ">Our Top Resources</h1>

        <Link href={"/resources"} className="flex justify-center" >
          <button className="btn">Explore</button>
        </Link>
      </div>

      <Carousel
        responsive={{ desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 }, tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 }, mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 } }}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="py-10"
        itemClass="px-2"
      >
        <div className="rounded-xl shadow-md border border-slate-100 p-4 flex flex-col gap-4 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/landing_page_news_1.jpg"
              width={1000}
              height={1000}
              alt="test"
              className="aspect-video object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Local Non-Profit Hosts Winter Clothes Drive for Families</h3>
          <p className="text-gray-500 mt-2">Posted by Kamala Aresnio</p>
        </div>

        <div className="rounded-xl shadow-md border border-slate-100 p-4 flex flex-col gap-4 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/landing_page_news_2.jpg"
              width={1000}
              height={1000}
              alt="test"
              className="aspect-video object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Books & School Supplies Drive</h3>
          <p className="text-gray-500 mt-2">Posted by Yoshimi Jeong</p>
        </div>

        <div className="rounded-xl shadow-md border border-slate-100 p-4 flex flex-col gap-4 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/landing_page_news_3.jpg"
              width={1000}
              height={1000}
              alt="test"
              className="aspect-video object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Online healthcare: What is it?</h3>
          <p className="text-gray-500 mt-2">Posted by Ronaldo Parzival</p>
        </div>

      </Carousel >
    </>
  )
}
