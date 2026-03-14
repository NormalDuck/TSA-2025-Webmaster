"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/footer";

// ── Data ──────────────────────────────────────────────────────────────────────

const newsItems = [
  { id: "01", category: "FOOD ACCESS", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque." },
  { id: "02", category: "EDUCATION", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque." },
  { id: "03", category: "FOOD ACCESS", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque." },
  { id: "04", category: "FOOD ACCESS", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque." },
];

{/* Topics for newsletter preferences */}
const topicKeys = ["Housing", "Food", "Health", "Jobs", "Events"] as const;
type Topic = (typeof topicKeys)[number];

{/*Dot navigation sections*/}
const sections = [
  { id: "hero",       label: "Home" },
  { id: "resources",  label: "Resources" },
  { id: "news",       label: "News" },
  { id: "events",     label: "Events" },
  { id: "newsletter", label: "Newsletter" },
];

// Dot colors per section background
const dotColors: Record<string, { active: string; inactive: string }> = {
  hero:       { active: "#FD6900", inactive: "#1a1a1a40" },
  resources:  { active: "#FD6900", inactive: "#1a1a1a40" },
  news:       { active: "#FD6900", inactive: "#ffffff40" },
  events:     { active: "#FD6900", inactive: "#1a1a1a40" },
  newsletter: { active: "#ffffff", inactive: "#ffffff40" },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [topics, setTopics] = useState<Record<Topic, boolean>>({
    Housing: false, Food: false, Health: false, Jobs: false, Events: false,
  });
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const toggleTopic = (topic: Topic) =>
    setTopics((prev) => ({ ...prev, [topic]: !prev[topic] }));

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) =>
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });

  const dotColor = dotColors[activeSection] ?? dotColors.hero;

  return (
    <>
      {/* ── Dot Navigation ─────── */}
      <nav
        className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3"
        aria-label="Page sections"
      >
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-label={label}
              className="group relative flex items-center justify-end"
            >
              {/* Hover label — hidden on mobile */}
              <span
                className="absolute right-6 text-[11px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap hidden md:block"
                style={{ color: dotColor.active }}
              >
                {label}
              </span>
              {/* Dot */}
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: isActive ? "10px" : "7px",
                  height: isActive ? "10px" : "7px",
                  backgroundColor: isActive ? dotColor.active : dotColor.inactive,
                  boxShadow: isActive ? `0 0 0 3px ${dotColor.active}30` : "none",
                }}
              />
            </button>
          );
        })}
      </nav>

      {/* ── Scroll Snap Container ────────────── */}
      <div
        data-scroll-container
        className="h-screen overflow-y-scroll"
        style={{
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >

        {/* Part 1: HomePage */}
        <section
          id="hero"
          ref={(el) => { sectionRefs.current.hero = el; }}
          className="min-h-screen bg-[#FEFCF8] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 flex flex-col justify-center"
          style={{ scrollSnapAlign: "start" }}
        >
         <div className="inline-flex items-center gap-2 border border-[#52AD6A] rounded-full px-4 py-1.5 mb-6 w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52AD6A] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#52AD6A]" />
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#52AD6A]">
              Serving Our Community Since 2012
            </span>
          </div>

          <h1 className="text-[clamp(36px,7vw,70px)] font-black leading-[.8] tracking-tight mb-6">
            <span className="block text-black">Your</span>
            <span className="block relative">
              <span className="text-[#FD6900]">community,</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-[40%] bg-[#CA641B] translate-y-1 opacity-40" />
            </span>
            <span className="block text-black">your</span>
            <span className="block text-black">resources</span>
          </h1>

          <p className="max-w-sm text-[clamp(12px,1.5vw,14px)] text-[#000000] leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur
            adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien
            vitae pellentesque.
          </p>

          <Link href="/resources">
            <button className="bg-[#E0A959] text-white text-[12px] font-bold rounded-xl uppercase px-4 py-2 hover:bg-[#ffad69] transition-colors duration-200 w-fit">
              Find Resources
            </button>
          </Link>
        </section>

        {/* Part 2: Top Resources */}
        <section
          id="resources"
          ref={(el) => { sectionRefs.current.resources = el; }}
          className="min-h-screen bg-[#ede8e0] flex flex-col justify-center overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 md:px-12 py-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
              <div>
                <p className="text-[13px] sm:text-[15px] font-bold mb-1 text-[#CA5400]">TOP RESOURCES</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">What<br />we offer</h2>
              </div>
              <button className="flex items-center gap-2 text-[13px] sm:text-[15px] font-black tracking-wide text-[#c0622b] transition-all hover:gap-4 whitespace-nowrap">
                BROWSE ALL PROGRAMS <span>→</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div
                className="col-span-2 rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: "#ffffff",
                  height: "clamp(120px, 18vw, 200px)",
                  border: `2px solid ${hovered === 1 || hovered === null ? "#d4845a" : "#e8e0d8"}`,
                  boxShadow: hovered === 1 || hovered === null ? "0 8px 32px rgba(200,100,40,0.12)" : "none",
                }}
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(null)}
              />
              <div
                className="rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: "#d8d2c8",
                  height: "clamp(120px, 18vw, 200px)",
                  border: `2px solid ${hovered === 2 ? "#d4845a" : "transparent"}`,
                  boxShadow: hovered === 2 ? "0 8px 32px rgba(200,100,40,0.10)" : "none",
                }}
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(null)}
              />
              {[3, 4, 5].map((id) => (
                <div
                  key={id}
                  className="rounded-2xl cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: "#d8d2c8",
                    height: "clamp(90px, 13vw, 150px)",
                    border: `2px solid ${hovered === id ? "#d4845a" : "transparent"}`,
                    boxShadow: hovered === id ? "0 8px 32px rgba(200,100,40,0.10)" : "none",
                  }}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
              <p className="text-sm text-[#6a5a4a]">
                Not sure where to start?{" "}
                <span className="cursor-pointer hover:underline text-[#c0622b]">We'll guide you.</span>
              </p>
              <button className="flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold tracking-widest bg-[#1a1a18] text-white transition-all hover:scale-105 w-fit">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#3a3a34]">📞</span>
                CALL NOW
              </button>
            </div>
          </div>
        </section>

        {/* Part 3: News */}
        <section
          id="news"
          ref={(el) => { sectionRefs.current.news = el; }}
          className="min-h-screen bg-[#100F0A] flex flex-col justify-center overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-12">
            <h2 className="text-[clamp(36px,5vw,60px)] font-extrabold text-white mb-6 leading-none">
              What's<br />happening<span className="text-[#989898]">.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[12px] font-black text-[#CA5400]">LATEST · FOOD ACCESS</span>
                  <div className="flex-1 h-px bg-[#CA5400]" />
                </div>
                <h3 className="text-[clamp(24px,3vw,40px)] font-extrabold mb-4 leading-tight text-white">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit quisque.
                </h3>
                <p className="text-[12px] leading-relaxed text-[#D9D9D9]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing
                  elit quisque faucibus mc ipsum risus. Ut vulputate adipiscing sem placerat id risus.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm aspect-video rounded-2xl bg-[#D9D9D9]" />
              </div>
            </div>

            <div className="w-full h-px mb-6 bg-[#A8A8A8]" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {newsItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="px-4 py-4 cursor-pointer group transition-all"
                  style={{ borderLeft: idx !== 0 ? "2px solid #A8A8A8" : "none" }}
                >
                  <span className="text-2xl md:text-3xl font-black block mb-1 text-[#D9D9D9] opacity-40">{item.id}</span>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-[11px] font-black text-[#CA5400]">{item.category}</span>
                    <div className="w-4 h-px bg-[#c0392b]" />
                  </div>
                  <p className="text-xs font-bold leading-relaxed text-white group-hover:text-[#FD6900] transition-colors">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 4: Events */}
        <section
          id="events"
          ref={(el) => { sectionRefs.current.events = el; }}
          className="min-h-screen bg-[#fefcf8] flex flex-col justify-center overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <h2 className="text-[clamp(36px,5vw,60px)] font-extrabold text-[#100F0A] mb-6 leading-[1.1]">
                  <span className="text-[#FD6900]">Join us</span><br />in person
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Part 5: Newsletter */}
        <section
          id="newsletter"
          ref={(el) => { sectionRefs.current.newsletter = el; }}
          className="relative min-h-screen overflow-hidden bg-[#4a7c59] flex flex-col justify-center"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <p className="text-xs font-extrabold tracking-wide mb-6 text-white">STAY CONNECTED</p>
                <h2 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white mb-6 leading-[1.1]">
                  Never miss<br />what matters.
                </h2>
                <p className="text-[clamp(12px,1.5vw,14px)] leading-relaxed mb-6 text-white max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing
                  elit quisque faucibus ex sapien vitae.
                </p>
                <ul className="space-y-2">
                  {["Weekly updates every Monday morning", "Event reminders 48 hours in advance", "Your data stays private"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#e8f5e9]">
                      <span className="text-[#a5d6a7]">›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-0 md:pt-8">
                {[
                  { label: "YOUR NAME", type: "text", placeholder: "Full Name" },
                  { label: "EMAIL ADDRESS", type: "email", placeholder: "you@example.com" },
                  { label: "ZIP CODE", type: "text", placeholder: "For local event alerts" },
                ].map(({ label, type, placeholder }) => (
                  <div key={label} className="mb-5">
                    <label className="block text-xs font-bold tracking-widest mb-1 text-[#e8f5e9]">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full bg-transparent pb-2 text-sm outline-none text-white placeholder:text-white/50"
                      style={{ borderBottom: "1px solid #a5c8a8" }}
                    />
                  </div>
                ))}

                <div className="mb-6">
                  <label className="block text-xs font-bold tracking-widest mb-3 text-[#e8f5e9]">TOPICS I CARE ABOUT</label>
                  <div className="flex flex-wrap gap-3">
                    {topicKeys.map((topic) => (
                      <label key={topic} className="flex items-center gap-1 cursor-pointer text-sm text-[#e8f5e9]">
                        <input type="checkbox" checked={topics[topic]} onChange={() => toggleTopic(topic)} className="w-3 h-3 accent-white" />
                        {topic}
                      </label>
                    ))}
                  </div>
                </div>

                <button className="flex items-center gap-3 px-6 py-3 rounded-full text-xs font-bold tracking-widest text-white border border-[#e8f5e9] bg-transparent transition-all hover:gap-5">
                  SUBSCRIBE TO WAsHub WEEKLY <span>→</span>
                </button>
                <p className="text-[12px] mt-3 text-[#a5c8a8]">Unsubscribe anytime. Does not sell your data.</p>
              </div>
            </div>
          </div>

          {/*WAshHub Watermark - stay connected page */}
          <div className="absolute bottom-0 left-0 right-0 text-center font-extrabold text-[#5C8963] leading-[0.65] select-none pointer-events-none"
            style={{ fontSize: "clamp(60px, 18vw, 260px)" }}>
            WAsHub
          </div>
        </section>

        {/* ── Footer ──── */}
        <Footer />

      </div>
    </>
  );
}