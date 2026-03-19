"use client";

import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Apple, ExternalLink, GraduationCap, House, Linkedin, Mail, Map, Phone, Plus, SquareChartGantt, UsersRound } from "lucide-react";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import Footer from "@/components/footer";
import { useSearchParams } from "next/navigation";
import { Category, Resources, resources } from "@/constants/resources";

//Meta information for each category
const categoryMeta: Record<string, { color: string; bg: string; icon: React.ReactNode }> = {
  "Food": { color: "#FD6900", bg: "#FFF3E0", icon: <Apple size={14} /> },
  "Social & Family Support": { color: "#52AD6A", bg: "#E8F5E9", icon: <UsersRound size={14} /> },
  "Housing": { color: "#4a7c59", bg: "#E8F5E9", icon: <House size={14} /> },
  "Health & Wellness": { color: "#e05c5c", bg: "#FFEBEE", icon: <Plus size={14} /> },
  "Education": { color: "#CA5400", bg: "#FBE9E7", icon: <GraduationCap size={14} /> },
};

//Icons for each category
const categories = [
  { icon: <SquareChartGantt size={20} />, label: "All" },
  { icon: <Apple size={20} />, label: "Food" },
  { icon: <UsersRound size={20} />, label: "Social & Family Support" },
  { icon: <House size={20} />, label: "Housing" },
  { icon: <Plus size={20} />, label: "Health & Wellness" },
  { icon: <GraduationCap size={20} />, label: "Education" },
];

export default function ResourcesPage() {
  const [resourceSearch, setResourceSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");
  const [opportunity, setOpportunity] = useState<Resources>();

  const visibleOpportunities = useMemo(() => {
    const byCategory = category !== "All"
      ? resources.filter((o) => o.category === category)
      : resources;

    if (!resourceSearch.trim()) return byCategory;

    const q = resourceSearch.toLowerCase();
    return byCategory.filter(
      (o) =>
        o.name.toLowerCase().includes(q) ||
        o.description.toLowerCase().includes(q) ||
        o.contact.address.toLowerCase().includes(q)
    );
  }, [category, resourceSearch]);

  const meta = opportunity ? categoryMeta[opportunity.category] : null;


  //Learn more button
  const titleToOpportunityName: Record<string, string> = {
    "Rainier Valley Food Bank": "Rainier Valley Food Bank",
    "Mary's Place": "Mary's Place",
    "THIRA Health": "THIRA Health",
  };

  const searchParams = useSearchParams();

  useEffect(() => {
    const resourceName = searchParams.get("resource");
    if (!resourceName) return;

    const match = resources.find(
      (o) => o.name.toLowerCase() === decodeURIComponent(resourceName).toLowerCase()
    );

    if (match) {
      setOpportunity(match);
      setTimeout(() => {
        (document.getElementById("opportunity_description") as HTMLDialogElement)?.showModal();
      }, 100);
    }
  }, [searchParams]);


  return (
    <><div className="grid grid-cols-12 gap-6 p-4 mt-16 md:p-8 bg-[#FEFCF8] min-h-screen">

      {/*Sidebar*/}
      <aside className="hidden md:flex flex-col gap-4 md:col-span-4 lg:col-span-3">
        <div className="sticky top-6 flex flex-col gap-3 pt-20">

          <p className="text-[12px] uppercase tracking-[0.18em] text-[#000000] font-semibold px-1 mb-1">
            Categories
          </p>

          {/* Search bar */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9a8a7a]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search for resources..."
              value={resourceSearch}
              onChange={(e) => setResourceSearch(e.target.value)}
              className="w-full pl-8 pr-8 py-2 text-[13px] rounded-xl border transition-all duration-150 outline-none"
              style={{
                backgroundColor: "#faf7f2",
                border: "1px solid #e8e0d5",
                color: "#4a3c30",
                caretColor: "#CA5400",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#CA5400";
                e.currentTarget.style.boxShadow = "0 0 0 3px #CA540018";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "#e8e0d5";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            {resourceSearch && (
              <button
                onClick={() => setResourceSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "#c4b8ac", color: "white" }}
              >
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-0.5">
            {categories.map((cat) => {
              const isActive = cat.label === category;
              const m = categoryMeta[cat.label];
              return (
                <button
                  key={cat.label}
                  onClick={() => setCategory(cat.label as Category)}
                  className="relative flex items-center gap-3 px-3 py-2.5 rounded-2xl text-left w-full transition-all duration-150 overflow-hidden"
                  style={{
                    backgroundColor: isActive ? (m?.bg ?? "#f5f0e8") : "transparent",
                    color: isActive ? (m?.color ?? "#CA5400") : "#6a5a4a",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#faf7f2";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                      style={{ backgroundColor: m?.color ?? "#CA5400" }}
                    />
                  )}
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-150"
                    style={{
                      backgroundColor: isActive ? (m?.color ?? "#CA5400") + "18" : "#ede8e0",
                    }}
                  >
                    <span className="text-[15px]" style={{ color: isActive ? (m?.color ?? "#CA5400") : "#9a8a7a" }}>
                      {cat.icon}
                    </span>
                  </span>
                  <span
                    className="flex-1 text-[14px] tracking-[-0.01em] transition-colors duration-150"
                    style={{ fontWeight: isActive ? 700 : 500 }}
                  >
                    {cat.label}
                  </span>
                  {isActive && (
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full tabular-nums"
                      style={{
                        backgroundColor: (m?.color ?? "#CA5400") + "18",
                        color: m?.color ?? "#CA5400",
                      }}
                    >
                      {visibleOpportunities.length}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

        </div>
      </aside>

      {/* ── Main ── */}
      <main className="col-span-12 md:col-span-8 lg:col-span-9">

        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-[32px] font-bold text-[#100F0A]">Resources</h2>
          </div>

          {/* Mobile dropdown */}
          <div className="lg:hidden md:hidden dropdown dropdown-end">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f5f0e8] text-sm font-bold text-[#6a5a4a]">
              Categories ▾
            </button>
            <ul className="dropdown-content menu bg-[#FEFCF8] rounded-2xl z-10 w-56 p-2 shadow-xl border border-[#e8e0d8] mt-2">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#f5f0e8] transition-colors text-left"
                  onClick={() => setCategory(cat.label as Category)}
                >
                  <span className="text-[#CA5400]">{cat.icon}</span>
                  <span className="font-bold text-sm text-[#3a3028]">{cat.label}</span>
                </button>
              ))}
            </ul>
          </div>
        </div>

        {/* Cards Grid */}
        {visibleOpportunities.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2"
              style={{ backgroundColor: "#f5f0e8" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9a8a7a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <p className="text-[18px] font-bold text-[#3a3028]">No resources found</p>
            <p className="text-[13px] text-[#9a8a7a] max-w-xs">
              No results for <span className="font-semibold text-[#6a5a4a]">"{resourceSearch}"</span>. Try a different keyword or browse by category.
            </p>
            <button
              onClick={() => setResourceSearch("")}
              className="mt-3 px-5 py-2 rounded-xl text-[13px] font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#CA5400" }}
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {visibleOpportunities.map((item) => {
              const m = categoryMeta[item.category];
              return (
                <div
                  key={item.name}
                  onClick={() => {
                    setOpportunity(item);
                    (document.getElementById("opportunity_description")! as HTMLDialogElement).showModal();
                  }}
                  className="flex flex-col group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#f0ebe3] hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-[#f5f0e8]">
                    {item.coverImage && (
                      <Image
                        src={item.coverImage}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    )}
                    <span
                      className="absolute top-3 left-3 text-[12px] font-bold tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1"
                      style={{ backgroundColor: m?.color ?? "#CA5400", color: "white" }}
                    >
                      {m?.icon}
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <h3 className="text-base font-bold text-[#100F0A] leading-[.9] group-hover:text-[#CA5400] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6a5a4a] line-clamp-3 leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Map size={11} className="text-[#CA5400] shrink-0" />
                      <p className="text-[12px] text-[#9a8a7a] truncate">{item.contact.address}</p>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div
                    className="px-4 py-2.5 flex items-center justify-between border-t"
                    style={{ borderColor: "#f0ebe3" }}
                  >
                    <span className="text-[12px] uppercase font-extrabold tracking-wide" style={{ color: m?.color ?? "#CA5400" }}>
                      View Details
                    </span>
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs transition-transform group-hover:translate-x-0.5"
                      style={{ backgroundColor: m?.color ?? "#CA5400" }}
                    >
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}</main>

      {/* ── Pop up ───*/}
      <dialog id="opportunity_description" className="modal">
        <div className="modal-box w-11/12 max-w-3xl bg-[#FEFCF8] rounded-3xl p-0 overflow-hidden shadow-2xl border-0">

          {/* Colored header */}
          <div
            className="relative w-full h-32 flex items-end p-5"
            style={{
              background: meta
                ? `linear-gradient(135deg, ${meta.color} 0%, ${meta.color}cc 100%)`
                : "linear-gradient(135deg, #FD6900, #CA5400)",
            }}
          >
            {/*Close Button*/}
            <form method="dialog">
              <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center text-white text-xs font-black transition-colors">
                ✕
              </button>
            </form>

            <span className="absolute top-4 left-5 text-[10px] font-medium tracking-widest px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
              {opportunity?.category?.toUpperCase()}
            </span>

            <div className="absolute -bottom-7 left-5 w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              {opportunity?.coverImage && (
                <Image
                  src={opportunity.coverImage}
                  alt={opportunity.name ?? ""}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full" />
              )}
            </div>
          </div>

          {/* Scrollable body */}
          <div className="px-5 pt-12 pb-4 overflow-y-auto max-h-[68vh] flex flex-col gap-5">

            {/* Title + URL */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-[28px] text-[#100F0A] leading-tight">
                  {opportunity?.name}
                </h3>
                <p className="text-[14px] text-[#9a8a7a] mt-0.5 flex items-center gap-1">
                  <Map size={10} className="shrink-0" />
                  {opportunity?.contact.address}
                </p>
              </div>

              {/* Website Button */}
              {opportunity?.contact.url && (
                <a
                  href={opportunity.contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-1.75 rounded-xl text-[10px] font-bold tracking-widest text-white transition-colors"
                  style={{ backgroundColor: meta?.color ?? "#CA5400" }}
                >
                  <ExternalLink size={10} />
                  WEBSITE
                </a>
              )}
            </div>

            {/* Description + Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="bg-[#f5f0e8] rounded-2xl p-4">
                <p className="text-[14px] font-extrabold mb-2 text-[#CA5400]">
                  ABOUT
                </p>
                <p className="text-[14px] text-[#100F0A] leading-[1.2]">
                  {opportunity?.description}
                </p>
              </div>
              <div className="bg-[#f5f0e8] rounded-2xl p-4">
                <p className="text-[14px] font-extrabold mb-2 text-[#CA5400]">
                  LOCATION
                </p>
                <div className="overflow-hidden rounded-xl">
                  <iframe
                    src={opportunity?.mapSrc}
                    width="100%"
                    height="300"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#f5f0e8] rounded-2xl p-4">
              <p className="text-[14px] font-extrabold tracking-widest mb-3" style={{ color: meta?.color ?? "#CA5400" }}>
                CONTACT
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {opportunity?.contact.phone && (
                  <a
                    href={`tel:${opportunity.contact.phone}`}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white transition-all duration-200 group"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = meta?.color ?? "#CA5400")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: (meta?.color ?? "#CA5400") + "22" }}>
                      <Phone size={12} style={{ color: meta?.color ?? "#CA5400" }} />
                    </div>
                    <span className="text-xs font-semibold text-[#3a3028] group-hover:text-white transition-colors truncate">
                      {opportunity.contact.phone}
                    </span>
                  </a>
                )}
                {opportunity?.contact.email && (
                  <a
                    href={`mailto:${opportunity.contact.email}`}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white transition-all duration-200 group"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = meta?.color ?? "#CA5400")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: (meta?.color ?? "#CA5400") + "22" }}>
                      <Mail size={12} style={{ color: meta?.color ?? "#CA5400" }} />
                    </div>
                    <span className="text-xs font-semibold text-[#3a3028] group-hover:text-white transition-colors truncate">
                      {opportunity.contact.email}
                    </span>
                  </a>
                )}
                {opportunity?.contact.socials?.instagram && (
                  <a
                    href={opportunity.contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white transition-all duration-200 group"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = meta?.color ?? "#CA5400")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: (meta?.color ?? "#CA5400") + "22" }}>
                      <SiInstagram size={12} style={{ color: meta?.color ?? "#CA5400" }} />
                    </div>
                    <span className="text-xs font-semibold text-[#3a3028] group-hover:text-white transition-colors truncate">
                      Instagram
                    </span>
                  </a>
                )}
                {opportunity?.contact.socials?.linkedin && (
                  <a
                    href={opportunity.contact.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white transition-all duration-200 group"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = meta?.color ?? "#CA5400")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: (meta?.color ?? "#CA5400") + "22" }}>
                      <Linkedin size={12} style={{ color: meta?.color ?? "#CA5400" }} />
                    </div>
                    <span className="text-xs font-semibold text-[#3a3028] group-hover:text-white transition-colors truncate">
                      LinkedIn
                    </span>
                  </a>
                )}
                {opportunity?.contact.socials?.facebook && (
                  <a
                    href={opportunity.contact.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white transition-all duration-200 group"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = meta?.color ?? "#CA5400")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: (meta?.color ?? "#CA5400") + "22" }}>
                      <SiFacebook size={12} style={{ color: meta?.color ?? "#CA5400" }} />
                    </div>
                    <span className="text-xs font-semibold text-[#3a3028] group-hover:text-white transition-colors truncate">
                      Facebook
                    </span>
                  </a>
                )}
                {opportunity?.contact.socials?.x && (
                  <a
                    href={opportunity.contact.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white transition-all duration-200 group"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = meta?.color ?? "#CA5400")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: (meta?.color ?? "#CA5400") + "22" }}>
                      <SiX size={12} style={{ color: meta?.color ?? "#CA5400" }} />
                    </div>
                    <span className="text-xs font-semibold text-[#3a3028] group-hover:text-white transition-colors truncate">
                      X / Twitter
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Gallery */}
            {opportunity?.additionalImages && opportunity.additionalImages.length > 0 && (
              <div className="mt-2">
                <p className="text-[14px] ml-4 font-extrabold tracking-widest mb-3" style={{ color: meta?.color ?? "#CA5400" }}>
                  GALLERY
                </p>
                <Carousel
                  responsive={{
                    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
                    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2, slidesToSlide: 1 },
                    mobile: { breakpoint: { max: 640, min: 0 }, items: 1, slidesToSlide: 1 },
                  }}
                  keyBoardControl
                  transitionDuration={400}
                  containerClass="pb-4"
                  itemClass="px-2"
                  customLeftArrow={
                    <button className="absolute left-0 z-10 bg-white/90 hover:bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 border border-[#e8e0d8]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6a5a4a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                  }
                  customRightArrow={
                    <button className="absolute right-0 z-10 bg-white/90 hover:bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center transition-all duration-200 border border-[#e8e0d8]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6a5a4a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  }
                >
                  {opportunity.additionalImages.map((link, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-2xl aspect-4/3 border border-[#e8e0d8] shadow-sm"
                    >
                      <Image
                        src={link}
                        width={600}
                        height={450}
                        alt={`${opportunity.name} image ${i + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </dialog>

      {/* Footer */}
    </div>
      <Footer />
    </>
  );
}
