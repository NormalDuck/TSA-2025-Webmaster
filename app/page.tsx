"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/footer";

// Polaroid images for section 1
const IMAGES_COL_1 = [
  { src: "/resources/familyworks/family_works_logo.png", rotate: "-rotate-1", title: "Family Works Seattle" },
  { src: "/resources/farestart/fare_start_logo.jpg", rotate: "rotate-2", title: "FareStart" },
  { src: "/resources/seattlecommitte/seattle_food_committee.png", rotate: "-rotate-2", title: "Seattle Food Committee" },
  { src: "/resources/seattlerecreative/seattle_recreative.png", rotate: "rotate-1", title: "Seattle ReCreative" },
  { src: "/resources/neighborhoodhouse/neighborhood_house_logo.png", rotate: "-rotate-1", title: "Neighborhood House" },
];

const IMAGES_COL_2 = [
  { src: "/resources/northwestharvest/nw_harvest_logo.jpg", rotate: "rotate-2", title: "Northwest Harvest" },
  { src: "/resources/perscholas/per_scholas_logo.png", rotate: "-rotate-1", title: "Per Scholas" },
  { src: "/resources/pikefoodbank/pike_foodbank_logo.jpg", rotate: "rotate-1", title: "Pike Market Senior Center & Food Bank" },
  { src: "/resources/thirahealth/thira_health.png", rotate: "-rotate-2", title: "THIRA Health" },
  { src: "/resources/universityfoodbank/udfb_logo.jpg", rotate: "rotate-1", title: "University District Food Bank" },
];


function PolaroidCard({ src, rotate, title }: { src: string; rotate: string, title: string }) {
  return (
    <Link href={`/resources?resource=${encodeURIComponent(title)}`} className={`bg-white p-3 pb-10 shadow-lg ${rotate} shrink-0 w-full`}>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img src={src} alt="" className="w-full h-full aspect-4/3 object-cover" />
    </Link>
  );
}

function ScrollColumn({
  images,
  direction = "up",
  duration = "26s",
}: {
  images: { src: string; rotate: string, title: string }[];
  direction?: "up" | "down";
  duration?: string;
}) {
  const doubled = [...images, ...images];

  return (
    <div
      className="overflow-hidden flex-1"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <div
        className="flex flex-col gap-3"
        style={{
          animation: `${direction === "up" ? "scrollUp" : "scrollDown"} ${duration} linear infinite`,
        }}
      >
        {doubled.map((img, i) => {
          return (
            <PolaroidCard key={i} src={img.src} rotate={img.rotate} title={img.title} />
          )
        })}
      </div>
    </div>
  );
}

// Data for Top Resources section
const topThreeResources = [
  {
    id: 1,
    tag: "FOOD ACCESS",
    title: "Rainier Valley Food Bank",
    description: "RVFB is the primary emergency food resource for Seattle’s most racially, ethnically, and economically diverse neighborhood. It serves as a critical resource for people of color, immigrants, and refugees facing systemic obstacles.",
    icon: "🥦",
    color: "#FD6900",
    span: "col-span-2 row-span-2",
    image: "/topresources/landing_page_news_1.jpg",
  },
  {
    id: 2,
    tag: "HOUSING",
    title: "Mary's Place",
    description: "Since 1999, Mary’s Place has helped women and families move out of homelessness into stable situations, providing emergency shelter, housing, and employment services.",
    icon: "🏠",
    color: "#52AD6A",
    span: "col-span-1 row-span-1",
    image: "/topresources/landing_page_news_2.jpg",
  },
  {
    id: 3,
    tag: "HEALTH",
    title: "THIRA Health",
    description: "Adult residential treatment program for individuals aged 18+ struggling with anxiety, depression, and trauma, offering paths toward mental wellness.",
    icon: "🩺",
    color: "#ff3333",
    span: "col-span-1 row-span-1",
    image: "/topresources/landing_page_news_3.jpg",
  },
];

// ── Data for News page ─────────

const newsItems = [
  { id: "01", category: "FOOD ACCESS", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque." },
  { id: "02", category: "EDUCATION", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque." },
  { id: "03", category: "FOOD ACCESS", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque." },
  { id: "04", category: "FOOD ACCESS", title: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque." },
];


const topicKeys = ["Housing", "Food", "Health", "Jobs", "Events"] as const;
type Topic = (typeof topicKeys)[number];


const sections = [
  { id: "hero", label: "Home" },
  { id: "resources", label: "Resources" },
  { id: "news", label: "News" },
  { id: "events", label: "Events" },
  { id: "newsletter", label: "Newsletter" },
];

// Dot colors per section background
const dotColors: Record<string, { active: string; inactive: string }> = {
  hero: { active: "#FD6900", inactive: "#1a1a1a40" },
  resources: { active: "#FD6900", inactive: "#1a1a1a40" },
  news: { active: "#FD6900", inactive: "#ffffff40" },
  events: { active: "#FD6900", inactive: "#1a1a1a40" },
  newsletter: { active: "#ffffff", inactive: "#ffffff40" },
};


export default function Home() {
  const [topics, setTopics] = useState<Record<Topic, boolean>>({
    Housing: false, Food: false, Health: false, Jobs: false, Events: false,
  });
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [autoHovered, setAutoHovered] = useState<number>(1);
  const [isManualHover, setIsManualHover] = useState(false);

  const toggleTopic = (topic: Topic) =>
    setTopics((prev) => ({ ...prev, [topic]: !prev[topic] }));

  // Track active section for top resources section
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

  // Auto-hover carousel cards every 4 seconds, but pause on manual hover
  useEffect(() => {
    if (isManualHover) return;
    const interval = setInterval(() => {
      setAutoHovered((prev) => (prev % topThreeResources.length) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isManualHover]);

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

      {/* ── Scroll Snap Container ────── */}
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
          className="min-h-screen bg-[#FEFCF8] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 flex items-center"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* ── Left: text content ── */}
          <div className="flex flex-col justify-center flex-1 py-20">
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
                <span className="absolute left-0 bottom-0 h-0.5 w-[72%] bg-[#CA641B] translate-y-1 opacity-40" />
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
          </div>

          {/* ── Right: polaroid scroll columns ── */}
          <div className="hidden flex-1 lg:flex gap-8 w-105 xl:w-125 shrink-0 h-screen py-10 overflow-hidden">
            <ScrollColumn images={IMAGES_COL_1} direction="up" duration="20s" />
            <ScrollColumn images={IMAGES_COL_2} direction="down" duration="26s" />
          </div>
        </section>

        {/* Part 2: Top Resources */}
        <section
          id="resources"
          ref={(el) => { sectionRefs.current.resources = el; }}
          className="min-h-screen bg-[#ede8e0] flex flex-col justify-center overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-12 flex flex-col h-full py-4 pt-25">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 gap-2 shrink-0">
              <div>
                <p className="text-[13px] font-black tracking-widest text-[#CA5400] mb-.5">
                  TOP RESOURCES
                </p>
                <h2 className="text-[clamp(24px,3.5vw,44px)] font-black leading-[.85] tracking-tight">
                  What<br />
                  <span className="text-[#CA5400]">we offer</span>
                </h2>
              </div>
              <Link href="/resources">
                <button className="flex items-center gap-2 text-[13px] font-bold tracking-wide text-[#c0622b] transition-all hover:gap-4 whitespace-nowrap group">
                  BROWSE ALL PROGRAMS
                  <span className="w-7 h-7 rounded-full bg-[#c0622b] text-white flex items-center justify-center text-xs group-hover:bg-[#FD6900] transition-colors">
                    →
                  </span>
                </button>
              </Link>
            </div>

            {/* Bento Grid */}
            <div
              className="grid grid-cols-3 gap-2 flex-1 min-h-0"
              style={{ gridTemplateRows: "280px 280px" }}
            >
              {topThreeResources.map((r) => (
                <div
                  key={r.id}
                  className={`${r.span} rounded-2xl cursor-pointer transition-all duration-500 relative overflow-hidden group`}
                  style={{
                    boxShadow: (isManualHover ? hovered : autoHovered) === r.id
                      ? `0 20px 60px ${r.color}50`
                      : "0 4px 20px rgba(0,0,0,0.10)",
                    transform: (isManualHover ? hovered : autoHovered) === r.id
                      ? "translateY(-3px)"
                      : "translateY(0)",
                  }}
                  onMouseEnter={() => {
                    setIsManualHover(true);
                    setHovered(r.id);
                  }}
                  onMouseLeave={() => {
                    setIsManualHover(false);
                    setHovered(null);
                  }}
                >
                  {/* Background image */}
                  <img
                    src={r.image}
                    alt={r.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Permanent dark gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Accent color overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${r.color}dd 0%, ${r.color}55 50%, transparent 100%)`,
                      opacity: (isManualHover ? hovered : autoHovered) === r.id ? 1 : 0,
                    }}
                  />

                  {/* TOP: tag + icon */}
                  <div className="absolute top-0 left-0 right-0 p-3 flex items-center justify-between z-10">
                    <span
                      className="text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${r.color}dd`, color: "white" }}
                    >
                      {r.tag}
                    </span>
                    <span
                      className="text-base w-8 h-8 flex items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
                    >
                      {r.icon}
                    </span>
                  </div>

                  {/* BOTTOM: text content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3
                      className="font-black text-white leading-tight drop-shadow-lg"
                      style={{
                        fontSize: r.id === 1 ? "clamp(18px, 2vw, 26px)" : "clamp(12px, 1.2vw, 15px)",
                      }}
                    >
                      {r.title}
                    </h3>

                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: (isManualHover ? hovered : autoHovered) === r.id ? "60px" : "0px",
                        opacity: (isManualHover ? hovered : autoHovered) === r.id ? 1 : 0,
                      }}
                    >
                      <p
                        className="leading-snug mt-1.5 text-white/90"
                        style={{ fontSize: r.id === 1 ? "12px" : "10px" }}
                      >
                        {r.description}
                      </p>
                    </div>

                    <div
                      className="flex items-center gap-2 mt-2 transition-all duration-300"
                      style={{
                        opacity: (isManualHover ? hovered : autoHovered) === r.id ? 1 : 0,
                      }}
                    >
                      <Link href={`/resources?resource=${encodeURIComponent(r.title)}`}>
                        <span className="text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full text-white border border-white/40 hover:bg-white/20 transition-colors">
                          LEARN MORE →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer row */}
            <div className="w-full h-px mt-8 bg-[#B2AFAF]" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5 gap-4">
              <p className="text-sm text-[#000000] font-bold">
                Not sure where to start?{" "}
                <span className="cursor-pointer hover:underline text-[#CA5400]">
                  We'll guide you.
                </span>
              </p>
              <button className="flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold tracking-widest bg-[#1a1a18] text-white transition-all hover:scale-105 w-fit">
                <span className="flex items-center justify-center w-6 h-5 rounded-full bg-[#3a3a34]">
                  📞
                </span>
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
                <h2 className="text-[clamp(32px,5vw,60px)] font-extrabold text-white mb-6 leading-[.9]">
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
