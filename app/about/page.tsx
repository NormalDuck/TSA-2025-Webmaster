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
          id='missionstatement'
          className="snap-section relative bg-[#E8E0D4] flex flex-col justify-between overflow-hidden about-mission"
        > 

        {/* Top accent line */}
        <div className="absolute top-44 left-14 w-0.5 h-20 bg-[#FD6900] opacity-50" />

        {/* Mission label */}
        <div className="absolute top-50 left-20">
          <span className="text-[20px] font-bold tracking-[0.18em] text-[#FD6900] uppercase opacity-80">Our Mission</span>
        </div>

        {/* Mission Statement */}
          <div className="p-50 mt-5 max-w-full">
            <p 
              className="font-bold leading-[1.2]"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(22px, 4vw, 50px)',
              }}
            >
              WAs<span className="text-[#FD6900]">Hub</span>{" "}
              is committed to creating a safe space for Washington residents to share
              resources within the community. Founded in 2012,{" "}
              WAs<span className="text-[#FD6900]">Hub</span>{" "}
              continues to follow their philosophy of{" "}
              <span className="text-[#4A7C52]">community</span>,{" "}
              <span className="text-[#4A7C52]">compassion</span>, and{" "}
              <span className="text-[#4A7C52]">equity</span>{" "}
              as they expand this resource hub and host events within local communities.
            </p>
          </div>
          {/* Est. badge */}
            <div className="absolute top-50 right-20 flex flex-col items-center gap-0.5 opacity-50">
              <span className="text-[11px] font-black tracking-[0.2em] text-[#100F0A] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>Est.</span>
              <span className="text-[22px] font-black text-[#100F0A] leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>2012</span>
            </div>
            {/* Dot grid */}
            <div className="absolute bottom-14 right-12 grid gap-1.5 opacity-20 z-10" style={{ gridTemplateColumns: 'repeat(5, 8px)' }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#100F0A]" />
              ))}
            </div>

            {/* MISSION watermark */}
            <div
              className="absolute bottom-0 left-0 right-0 text-center font-black text-[#FD6900] opacity-[0.12] leading-[0.75] select-none pointer-events-none overflow-hidden whitespace-nowrap"
              style={{ fontSize: 'clamp(60px, 18vw, 235px)'}}
            >
              MISSION
            </div>
        </section>

        {/* Sections 3–6 — Our Story timeline */}
        <section id="ourstory">
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
        </section>
        
        {/* Section 7 — Join Us */}
        <section
          id="volunteersection"
          ref={(el) => { sectionRefs.current.volunteer = el as HTMLDivElement; }}
          className="relative min-h-screen overflow-hidden bg-[#404040] flex flex-col justify-center snap-section"
        >
          <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

              {/* Left column */}
              <div>
                <p className="text-xs font-extrabold tracking-wide mb-6 text-[#FD6900]">GET INVOLVED</p>
                <h2 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white mb-6 leading-[.9]">
                  Make a difference<br />in your city.
                </h2>
                <p className="text-[clamp(12px,1.5vw,14px)] leading-relaxed mb-6 text-white/70 max-w-xs">
                  Whether you have two hours or two days a week, there&apos;s a place for you here.
                  Join over 1,200 volunteers making a real impact across King County.
                </p>
                <ul className="space-y-2">
                  {[
                    "Flexible scheduling — weekdays or weekends",
                    "No experience required for most roles",
                    "Get matched to the right opportunity",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-[#FD6900]">›</span>{item}
                    </li>
                  ))}
                </ul>

                {/* Stat strip */}
                <div className="flex gap-8 mt-10">
                  {[
                    { value: "1,200+", label: "Active Volunteers" },
                    { value: "40+",    label: "Partner Orgs" },
                    { value: "8k hrs", label: "Served This Year" },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <p className="text-[clamp(18px,2.5vw,28px)] font-black text-white leading-none">{value}</p>
                      <p className="text-[11px] text-white/40 mt-1 tracking-wide">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — form */}
              <div className="pt-0 md:pt-8">
                {[
                  { label: "YOUR NAME",     type: "text",  placeholder: "Full Name" },
                  { label: "EMAIL ADDRESS", type: "email", placeholder: "you@example.com" },
                  { label: "PHONE NUMBER",  type: "tel",   placeholder: "Optional — for scheduling" },
                ].map(({ label, type, placeholder }) => (
                  <div key={label} className="mb-5">
                    <label className="block text-xs font-bold tracking-widest mb-1 text-white/60">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full bg-transparent pb-2 text-sm outline-none text-white placeholder:text-white/30"
                      style={{ borderBottom: "1px solid #ffffff30" }}
                    />
                  </div>
                ))}

                {/* Role picker */}
                <div className="mb-6">
                  <label className="block text-xs font-bold tracking-widest mb-3 text-white/60">AREAS OF INTEREST</label>
                  <div className="flex flex-wrap gap-3">
                    {["Food Access", "Housing", "Youth", "Health", "Outreach", "Admin"].map((role) => (
                      <label key={role} className="flex items-center gap-1.5 cursor-pointer text-sm text-white/60 hover:text-white transition-colors">
                        <input type="checkbox" className="w-3 h-3 accent-[#FD6900]" />
                        {role}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-8">
                  <label className="block text-xs font-bold tracking-widest mb-3 text-white/60">AVAILABILITY</label>
                  <div className="flex flex-wrap gap-3">
                    {["Weekday Mornings", "Weekday Evenings", "Weekends"].map((slot) => (
                      <label key={slot} className="flex items-center gap-1.5 cursor-pointer text-sm text-white/60 hover:text-white transition-colors">
                        <input type="checkbox" className="w-3 h-3 accent-[#FD6900]" />
                        {slot}
                      </label>
                    ))}
                  </div>
                </div>

                <button className="flex items-center gap-3 px-6 py-3 rounded-full text-xs font-bold tracking-widest text-white border border-white/20 bg-transparent transition-all hover:gap-5 hover:border-[#FD6900] hover:text-[#FD6900]">
                  SIGN ME UP →
                </button>
                <p className="text-[12px] mt-3 text-white/30">
                  We&apos;ll reach out within 48 hours to get you started.
                </p>
              </div>
            </div>
          </div>

          {/* Watermark */}
          <div
            className="absolute bottom-0 left-0 right-0 text-center font-extrabold text-[#2a2a2a] leading-[0.65] select-none pointer-events-none"
            style={{ fontSize: "clamp(60px, 18vw, 220px)" }}
          >
            Volunteer
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
          width: "500px",
          height: "500px",
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

          <div
            style={{
              marginTop: "0.5rem",
              height: "2px",
              width: visible ? "60px" : "0px",
              background: "#d4622a",
              transition: "width 0.8s ease 0.7s",
              borderRadius: "2px",
            }}
          />
        </div>

        <div className="image-box">
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "1.2rem",
              right: "1.2rem",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              color: "#8b6f4e",
              opacity: 0.6,
            }}
          >
            {item.year}
          </div>
        </div>
      </div>
    </section>
  );
}