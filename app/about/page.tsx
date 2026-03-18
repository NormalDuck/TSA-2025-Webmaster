"use client";

import Footer from "@/components/footer";
import { useEffect, useRef, useState } from "react";
import "./about.css";
import Image from "next/image";

const timelineData = [
  {
    year: "2013",
    title: "A Humble Beginning",
    body: "Founded by Katherine Marina, she realized how hard it was to find quality community resources for low-income families. She decided to start Wake-up with the goal of creating a community that makes finding resources easy.",
    color: "#e8e0d5",
    accent: "#d4622a",
    image: "/timeline/about_page_hero.jpg",
  },
  {
    year: "2017",
    title: "Going Up!",
    body: "Opened an office in Capitol Hill. Helped over 1,000 people in the greater Seattle area receive resources they need.",
    color: "#e8e0d5",
    accent: "#d4622a",
    image: "/timeline/about_page_hero.jpg",
  },
  {
    year: "2020",
    title: "COVID Community",
    body: "Struck by the pandemic, we decided to shift our focus to redesigning our website to be accessible to everyone, creating a user friendly design and an option for anyone to upload a resource, no login required.",
    color: "#e8e0d5",
    accent: "#d4622a",
    image: "/timeline/about_page_hero.jpg",
  },
  {
    year: "2023",
    title: "New Horizons",
    body: "After 13 amazing years, we have still continued providing people in the Seattle, Washington area a safe place to share and find resources. We look forward to the many more years to come!",
    color: "#e8e0d5",
    accent: "#d4622a",
    image: "/timeline/about_page_hero.jpg",
  },
];


// NAV_HEIGHT is now defined as --nav-h in about.css (:root { --nav-h: 70px })
// Update that value there if your navbar height changes.

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [inTimeline, setInTimeline] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef(null);
  const timelineWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !timelineWrapperRef.current) return;

      const scrollTop = window.scrollY;

      // Progress only within the timeline block
      const wrapperEl = timelineWrapperRef.current;
      const wrapperTop = wrapperEl.offsetTop;
      const wrapperHeight = wrapperEl.scrollHeight;
      const relativeScroll = scrollTop - wrapperTop;
      const maxScroll = wrapperHeight - window.innerHeight;
      const progress = Math.min(Math.max(relativeScroll / maxScroll, 0), 1);
      setScrollProgress(progress);

      // Show timeline UI only while scrolled inside the timeline block
      const wrapperRect = wrapperEl.getBoundingClientRect();
      setInTimeline(wrapperRect.top <= 0 && wrapperRect.bottom >= window.innerHeight);

      // Which card is centred
      let found = 0;
      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
          found = i;
        }
      });
      setActiveIndex(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dotTop = `calc(${scrollProgress * 100}% - 8px)`;

  return (
    <>

      {/* ── Fixed overlays (hidden outside timeline) ── */}

      <div className={`timeline-wrapper-fixed ${inTimeline ? "visible" : ""}`}>
        <div className="timeline-line" />
        <div className="timeline-dot" style={{ top: dotTop }} />
      </div>

      <div className={`story-label ${inTimeline ? "visible" : ""}`}>
        Our Story
      </div>

      <div className={`year-sidebar ${inTimeline ? "visible" : ""}`}>
        {timelineData.map((item, i) => (
          <div
            key={i}
            className={`year-pip ${activeIndex === i ? "active" : ""}`}
            onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" })}
          >
            <div className="pip-dot" />
            <span className="pip-label">{item.year}</span>
          </div>
        ))}
      </div>

      {/* ── Main page content ── */}
      <div ref={containerRef}>

        {/* Section 1 — Who We Are */}
        <section className="snap-section">
          <div className="min-h-screen p-12 bg-[#100F0A] flex flex-col justify-between">
            <div className="mt-10 px-25">
              <h1
                className="text-[90px] font-extrabold text-white mt-87.5 leading-[.9]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Who we<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>really</span><br />
                <span className="text-[#FD6900]">are.</span>
              </h1>
              <p
                className="text-white/60 mt-6 max-w-137.5 text-[16px] leading-relaxed"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
                consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
                quisque faucibus ex sapien vitae pellentesque.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-15 ml-auto w-fit">
              {[
                { value: "2012", label: "Founded" },
                { value: "12K+", label: "Served Yearly", orange: true },
                { value: "90",   label: "Volunteers" },
              ].map(({ value, label, orange }) => (
                <div key={label}>
                  <p className="text-white text-[40px] font-extrabold leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {orange ? (
                      <>{value.replace("+", "")}<span className="text-[#FD6900]">+</span></>
                    ) : value}
                  </p>
                  <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Down arrow */}
            <div className="flex justify-center my-auto">
              <div className="animate-bounce text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Mission */}
        <section
          className="snap-section relative bg-[#E8E0D4] flex flex-col justify-between overflow-hidden about-mission"
        >
          <div className="p-50 mt-5 max-w-full">
            <p className="text-[50px] font-bold leading-[1.2]" style={{ fontFamily: "'Syne', sans-serif" }}>
              <span className="text-[#FD6900]">WAsHub</span>{" "}
              is committed to creating a safe space for Washington residents to share
              resources within the community. Founded in 2012,{" "}
              <span className="text-[#FD6900]">WAsHub</span>{" "}
              continues to follow their philosophy of{" "}
              <span className="text-[#4A7C52]">community</span>,{" "}
              <span className="text-[#4A7C52]">compassion</span>, and{" "}
              <span className="text-[#4A7C52]">equity</span>{" "}
              as they expand this resource hub and host events within local communities.
            </p>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 text-center font-extrabold text-[#FD6900] opacity-20 leading-[0.69] select-none pointer-events-none"
            style={{ fontSize: "clamp(60px, 18vw, 260px)", fontFamily: "'Syne', sans-serif" }}
          >
            MISSION
          </div>
        </section>

        {/* Sections 3–6 — Our Story timeline */}
        <div ref={timelineWrapperRef}>
          {timelineData.map((item, i) => (
            <TimelineSection
              key={i}
              item={item}
              index={i}
              refCallback={(el: HTMLDivElement | null) => (sectionRefs.current[i] = el)}
            />
          ))}
        </div>
        
        {/* Section 7 — Join Us */}
        <section
          className="snap-section relative bg-[#E8E0D4] flex flex-col justify-between overflow-hidden"
        >
          <div className="p-50 mt-5 max-w-full">
            <p className="text-[50px] font-bold leading-[1.2]" style={{ fontFamily: "'Syne', sans-serif" }}>
              Get Involved.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div
          className="snap-section footer-snap"
          style={{ background: "#f0ebe3", minHeight: "unset" }}
        >
          <Footer />
        </div>

      </div>
    </>
  );
}

interface TimelineSectionProps {
  item: {
    year: string;
    title: string;
    body: string;
    color: string;
    accent: string;
    image: string;
  };
  index: number;
  refCallback: (el: HTMLDivElement | null) => void;
}

function TimelineSection({ item, index, refCallback }: TimelineSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const isRight = index % 2 !== 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const combined = (el: HTMLDivElement | null) => {
    ref.current = el;
    refCallback(el);
  };

  return (
    <section ref={combined} className="section-full">
      <div
        className="bg-blob"
        style={{
          width: "500px", height: "500px",
          background: "#d4622a",
          top: "10%",
          left: isRight ? "60%" : "10%",
          animationDelay: `${index * 1.5}s`,
          opacity: 0.06,
        }}
      />

      <div className={`section-inner ${visible ? "visible" : ""} ${isRight ? "right" : ""}`}>
        <div className="content-block">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div className="step-number">{index + 1}</div>
            <span className="year-tag">{item.year}</span>
          </div>

          <h2 className="section-title">{item.title}</h2>
          <p className="section-body">{item.body}</p>

          <div style={{
            marginTop: "0.5rem",
            height: "2px",
            width: visible ? "60px" : "0px",
            background: "#d4622a",
            transition: "width 0.8s ease 0.7s",
            borderRadius: "2px",
          }} />
        </div>

        <div className="image-box">
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <div style={{
            position: "absolute", bottom: "1.2rem", right: "1.2rem",
            fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "0.8rem",
            color: "#8b6f4e", opacity: 0.6,
          }}>
            {item.year}
          </div>
        </div>
      </div>
    </section>
  );
}