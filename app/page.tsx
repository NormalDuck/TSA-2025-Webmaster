"use client"
import Image from "next/image";
import Link from "next/link";
import "cally"

export default function Home() {
  return (
    <>

      <div className="grid grid-cols-1 sm:grid-cols-2 p-8 gap-4">
        <div className="grid gap-4 sm:text-center text-center">
          <span className="text-5xl font-bold lg:text-left">Resources for everyone</span>
          <span className="lg:text-left">Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</span>
        </div>
        <div className="flex justify-center">
          <Image src="/vercel.svg" alt="placeholder" width={200} height={200}></Image>
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

      <div className="grid grid-cols-2 p-8">
        <div className="font-bold text-2xl">
          Upcoming Events
        </div>

        <div className="flex">
          <calendar-date className="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
            <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
            <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
            <calendar-month></calendar-month>
          </calendar-date>
        </div>
      </div>
    </>
  );
}
