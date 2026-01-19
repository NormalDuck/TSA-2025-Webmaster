"use client"
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  return (
    <>

      <div className="grid grid-cols-1 sm:grid-cols-2 p-8 gap-4">
        <div className="grid gap-4 sm:text-center text-center">
          <span className="text-5xl font-bold lg:text-left">Resources for everyone</span>
          <span className="lg:text-left">Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</span>
        </div>
        <div className="flex justify-center">
          <Image src="/about_page_hero_image.jpg" alt="placeholder" width={400} height={400} className="rounded-lg"></Image>
        </div>
      </div>

      <div className="grid grid-cols-3 bg-lime-400 border-y border-black text-center">
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
        <div className="bg-gray-500 rounded-xl shadow-md border border-slate-100 p-4 flex flex-col gap-4 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/landing_page_news_1.jpg"
              width={1000}
              height={1000}
              alt="test"
              className="aspect-video object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Item 1</h3>
          <p className="text-black mt-2">Description goes here</p>
        </div>

        <div className="bg-gray-500 rounded-xl shadow-md border border-slate-100 p-4 flex flex-col gap-4 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/landing_page_news_2.jpg"
              width={1000}
              height={1000}
              alt="test"
              className="aspect-video object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Item 1</h3>
          <p className="text-black mt-2">Description goes here</p>
        </div>

        <div className="bg-gray-500 rounded-xl shadow-md border border-slate-100 p-4 flex flex-col gap-4 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/landing_page_news_3.jpg"
              width={1000}
              height={1000}
              alt="test"
              className="aspect-video object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Item 1</h3>
          <p className="text-black mt-2">Description goes here</p>
        </div>

      </Carousel >


      <div className="text-center grid items-center place-content-center gap-2">
        <label className="bold text-4xl">Join Our Newsletter</label>
        <label className="2xl bold">Get monthly updates on new resources, news, events, and more!</label>
      </div>


      <div className="flex items-center justify-center p-4">
        <div className="flex w-full max-w-sm items-center gap-2">
          <input type="email" placeholder="Email" className="input" />
          <button type="submit" className="btn">Subscribe</button>
        </div>
      </div>
    </>
  )
}
