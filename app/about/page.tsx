import Image from "next/image";

export default function AboutPage() {
  return <div>
    <div className="bg-lime-400 p-20 flex justify-center">
      <label className="text-5xl font-extrabold">About us</label>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 p-8 gap-4 items-center">
      <span className="lg:text-left">
        WAsHub is committed to creating a safe space for Washington residents to share resources within the community. Founded in 2012, WAsHub continues to follow their philosophy of community, compassion, and equity as they expand this resource hub and host events within local communities.
      </span>

      <div className="flex justify-center">
        <Image className="rounded-lg shadow-xl" src="/about_page_hero.jpg" alt="about page hero" width={400} height={400} ></Image>
      </div>
    </div>

    <div className="divider"></div>


    <div className="p-4">
      <h1 className="text-4xl font-extrabold">Our Story</h1>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2012</time>
            <div className="font-black text-3xl mb-4">A Humble Beginning</div>
            Founded by Katherine Marsha, she realized how hard it was to find quality community resources for low-income families. She decided to start WAsHub with the goal of creating a community that makes finding resources easy.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2017</time>
            <div className="font-black text-3xl mb-4">Going Up!</div>
            Opened an office in Capital Hill. Helped over 1,000 people in the greater Seattle area receive resources they need.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020</time>
            <div className="font-black text-3xl mb-4">Covid Community</div>
            Struck by the pandemic, we decided to shift our focus to redesigning our website to be accessible to everyone, creating a user friendly design and an option for anyone to upload a resource, no login required.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2025</time>
            <div className="font-black text-3xl mb-4">New Horizons</div>
            After 23 amazing years, we have still continued providing people in the Seattle, Washington area a safe place to share and find resources. We look forward to the many more years to come!
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
}
