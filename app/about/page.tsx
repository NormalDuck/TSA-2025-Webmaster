import Image from "next/image";

export default function AboutPage() {
  return <div>
    <div className="bg-[#024A70] p-40 flex justify-center">
      <label className="text-5xl font-extrabold text-black">About us</label>
    </div>

    {/*Mission Section*/}
    <div className="max-w-6xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-[#AECF72]/20 rounded-full">
            <span className="text-[#8fb84e] font-semibold text-sm uppercase tracking-wider">Our Mission</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Creating a Safe Space for Washington Residents
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong className="text-[#2F598D]">WAsHub</strong> is committed to creating a safe space for Washington residents to share resources within the community. Founded in 2012, <strong className="text-[#2F598D]">WAsHub</strong> continues to follow their philosophy of <strong className="text-[#8fb84e]">community</strong>, <strong className="text-[#8fb84e]">compassion</strong>, and <strong className="text-[#8fb84e]">equity</strong> as they expand this resource hub and host events within local communities.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8fb84e]">13+</div>
              <div className="text-sm text-gray-600">Years Serving</div>
            </div>

            <div className="w-px bg-gray-300"></div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#8fb84e]">10K+</div>
              <div className="text-sm text-gray-600">People Helped</div>
            </div>

            <div className="w-px bg-gray-300"></div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#8fb84e]">99%</div>
              <div className="text-sm text-gray-600">Satisfied</div>
            </div>
          </div>
        </div>

        {/*Mission Image*/}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#7a9b5b] rounded-2xl transform rotate-9"></div>
            <div className="absolute -inset-4 bg-[#AECF72] rounded-2xl transform rotate-1"></div>
            <Image className="relative rounded-2xl shadow-2xl rotate-1" src="/about_page_hero.jpg" alt="about page hero" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>

    <div className="divider"></div>

    <div className="max-w-6xl mx-auto px-8 py-20">
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
            After 13 amazing years, we have still continued providing people in the Seattle, Washington area a safe place to share and find resources. We look forward to the many more years to come!
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
}
