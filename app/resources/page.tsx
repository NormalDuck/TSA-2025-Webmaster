"use client";

import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Apple, ExternalLink, GraduationCap, House, Linkedin, Mail, Map, Phone, Plus, SquareChartGantt, UsersRound } from "lucide-react";

import Image from "next/image";
import { useMemo, useState } from "react";
import Carousel from "react-multi-carousel";
import Footer from "@/components/footer";

export interface Opportunity {
  name: string;
  description: string;
  category: Category;
  coverImage: string;
  additionalImages?: string[];
  mapSrc: string;
  contact: {
    email?: string;
    phone?: string;
    address: string;
    url?: string;
    socials?: {
      instagram?: string;
      facebook?: string;
      linkedin?: string;
      x?: string;
    };
  };
}

export type Category = "Food" | "Social & Family Support" | "Housing" | "Health & Wellness" | "Education" | "All";

const categoryMeta: Record<string, { color: string; bg: string; icon: React.ReactNode }> = {
  "Food":                    { color: "#FD6900", bg: "#FFF3E0", icon: <Apple size={14} /> },
  "Social & Family Support": { color: "#52AD6A", bg: "#E8F5E9", icon: <UsersRound size={14} /> },
  "Housing":                 { color: "#4a7c59", bg: "#E8F5E9", icon: <House size={14} /> },
  "Health & Wellness":       { color: "#e05c5c", bg: "#FFEBEE", icon: <Plus size={14} /> },
  "Education":               { color: "#CA5400", bg: "#FBE9E7", icon: <GraduationCap size={14} /> },
};

const opportunities: Opportunity[] = [
  {
    name: "Rainier Valley Food Bank",
    category: "Food",
    description: "RVFB is the primary emergency food resource for Seattle's most racially, ethnically, and economically diverse neighborhood. It serves as a critical resource for people of color, immigrants, and refugees facing systemic obstacles.",
    coverImage: "/resources/rainier_valley_foodbank.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      email: "info@rvfb.org",
      phone: "(206) 723-4105",
      address: "9021 Rainier Ave S, Seattle, WA 98118",
      url: "https://www.rvfb.org/"
    }
  },
  {
    name: "Seattle Food Committee",
    category: "Food",
    description: "Applying an equitable anti-racist and food justice lens, SFC partners with distributors and BIPOC vendors to ensure the city's emergency food system continues to grow stronger and more sustainable.",
    coverImage: "/resources/seattle_food_committee.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      phone: "(206) 694-6756",
      address: "1501 N 45th St, Seattle, WA 98103-6708",
      url: "https://www.seattlefoodcommittee.org/",
      socials: { instagram: "https://www.instagram.com/seattlefoodcommittee/" }
    }
  },
  {
    name: "Family Works Seattle",
    category: "Food",
    description: "Serves families in North Seattle marginalized by food, economic, and racial injustice through a Food Bank and Family Resource Center, providing culturally responsive services to 6,000 households annually.",
    coverImage: "/resources/family_works.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      email: "theteam@familyworksseattle.org",
      phone: "(206) 647-1770",
      address: "85420, Seattle, WA 98145",
      url: "https://familyworksseattle.org/"
    }
  },
  {
    name: "Neighborhood House",
    category: "Social & Family Support",
    description: "Provides safe spaces for youth to reach their potential through after-school mentoring, college-readiness, and STEAM activities, focusing on students aged 6 to 21.",
    coverImage: "/resources/neighborhood_house.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      email: "info@nhwa.org",
      phone: "206-923-6480",
      address: "1225 South Weller Street, Suite 510, Seattle, WA 98144",
      url: "https://nhwa.org/",
      socials: { instagram: "https://www.instagram.com/neighborhoodhousekc/" }
    }
  },
  {
    name: "King County Regional Homelessness Authority",
    category: "Housing",
    description: "Administers performance-based homeless services to decrease unsheltered homelessness across King County using equity and social justice principles.",
    coverImage: "/resources/KCRHA.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      email: "info@kcrha.org",
      phone: "(206) 930-8846",
      address: "400 Yesler Way, Suite 600, Seattle, WA 98104",
      url: "https://kcrha.org/",
      socials: { instagram: "https://www.instagram.com/kingcoRHA/" }
    }
  },
  {
    name: "Mary's Place",
    category: "Housing",
    description: "Since 1999, Mary's Place has helped women and families move out of homelessness into stable situations, providing emergency shelter, housing, and employment services.",
    coverImage: "/resources/marys_place.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      phone: "206-621-8474",
      address: "PO Box 1711, Seattle, WA 98111",
      url: "https://www.marysplaceseattle.org/"
    }
  },
  {
    name: "Seattle Roots Community Health",
    category: "Health & Wellness",
    description: "Provides high-quality, culturally appropriate primary health care regardless of ability to pay, nationality, or immigration status.",
    coverImage: "/resources/seattle_roots.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      phone: "(206) 299-1900",
      address: "2101 East Yesler Way, Seattle, WA 98122",
      url: "https://seattleroots.org/"
    }
  },
  {
    name: "THIRA Health",
    category: "Health & Wellness",
    description: "Adult residential treatment program for individuals aged 18+ struggling with anxiety, depression, and trauma, offering paths toward mental wellness.",
    coverImage: "/resources/thira_health.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      email: "admissions@thirahealth.com",
      phone: "855-483-1561",
      address: "11400 SE 6th St., Ste 200, Bellevue WA 98004",
      url: "https://www.thirahealth.com/"
    }
  },
  {
    name: "Per Scholas",
    category: "Education",
    description: "Provides no-cost technical training and AI skills to advance economic mobility and connect skilled talent to leading tech businesses.",
    coverImage: "/resources/per_scholas.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      email: "seattletraining@perscholas.org",
      phone: "206-209-2940",
      address: "2101 4th Ave Suite 600, Seattle, WA 98121",
      url: "https://perscholas.org/",
      socials: {
        instagram: "https://www.instagram.com/perscholas/",
        linkedin: "https://www.linkedin.com/school/perscholas/"
      }
    }
  },
  {
    name: "Seattle ReCreative",
    category: "Education",
    description: "A non-profit collecting donated reusable materials to fund arts programming and free creative workshops, serving as a hub for environmental stewardship.",
    coverImage: "/resources/seattle_recreative.png",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.844106559886!2d-122.31649568736125!3d47.55136277106465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041e84f94b161%3A0xf64ab011b9276e5c!2sGrover%20Cleveland%20STEM%20High%20School!5e0!3m2!1sen!2sus!4v1773265543184!5m2!1sen!2sus",
    contact: {
      email: "info@seattlerecreative.org",
      phone: "1-833-467-3873",
      address: "6521 5th Ave S, Seattle, WA 98108",
      url: "https://www.seattlerecreative.org/"
    }
  }
];

const categories = [
  { icon: <SquareChartGantt size={20} />, label: "All" },
  { icon: <Apple size={20} />, label: "Food" },
  { icon: <UsersRound size={20} />, label: "Social & Family Support" },
  { icon: <House size={20} />, label: "Housing" },
  { icon: <Plus size={20} />, label: "Health & Wellness" },
  { icon: <GraduationCap size={20} />, label: "Education" },
];

export default function ResourcesPage() {
  const [category, setCategory] = useState<Category>("All");
  const [opportunity, setOpportunity] = useState<Opportunity>();

  const visibleOpportunities = useMemo(() => {
    if (category !== "All") {
      return opportunities.filter((o) => o.category === category);
    }
    return opportunities;
  }, [category]);

  const meta = opportunity ? categoryMeta[opportunity.category] : null;

  return (
    <><div className="grid grid-cols-12 gap-6 p-4 mt-16 md:p-8 bg-[#FEFCF8] min-h-screen">

      {/* ── Sidebar ── */}
      <aside className="hidden md:flex flex-col gap-4 md:col-span-4 lg:col-span-3">
        <h2 className="text-xs uppercase tracking-widest text-[#6a5a4a] font-black">Categories</h2>
        <nav className="flex flex-col gap-1 mt-2">
          {categories.map((cat) => {
            const isActive = cat.label === category;
            const m = categoryMeta[cat.label];
            return (
              <button
                key={cat.label}
                onClick={() => setCategory(cat.label as Category)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left"
                style={{
                  backgroundColor: isActive ? (m?.bg ?? "#f5f0e8") : "transparent",
                  color: isActive ? (m?.color ?? "#CA5400") : "#6a5a4a",
                }}
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                  style={{ backgroundColor: isActive ? (m?.color ?? "#CA5400") + "22" : "#f5f0e8" }}
                >
                  <span style={{ color: isActive ? (m?.color ?? "#CA5400") : "#9a8a7a" }}>
                    {cat.icon}
                  </span>
                </span>
                <span className="font-bold text-[16px]">{cat.label}</span>
                {isActive && (
                  <span
                    className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: m?.color ?? "#CA5400", color: "white" }}
                  >
                    {visibleOpportunities.length}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {visibleOpportunities.map((item) => {
            const m = categoryMeta[item.category];
            return (
              <div
                key={item.name}
                onClick={() => {
                  setOpportunity(item);
                  (document.getElementById("opportunity_description")! as HTMLDialogElement).showModal();
                } }
                className="flex flex-col group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#f0ebe3] hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-[#f5f0e8]">
                  <Image
                    src={item.coverImage}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" />
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
                    <p className="text-[11px] text-[#9a8a7a] truncate">{item.contact.address}</p>
                  </div>
                </div>

                {/* Card footer */}
                <div
                  className="px-4 py-2.5 flex items-center justify-between border-t"
                  style={{ borderColor: "#f0ebe3" }}
                >
                  <span className="text-[10px] font-black tracking-widest" style={{ color: m?.color ?? "#CA5400" }}>
                    VIEW DETAILS
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
      </main>

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
                <p className="text-[14px] font-black mb-2 text-[#CA5400]">
                  ABOUT
                </p>
                <p className="text-[14px] text-[#100F0A] leading-[1.2]">
                  {opportunity?.description}
                </p>
              </div>
              <div className="bg-[#f5f0e8] rounded-2xl p-4">
                <p className="text-[14px] font-black mb-2 text-[#CA5400]">
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
              <p className="text-[14px] font-black tracking-widest mb-3" style={{ color: meta?.color ?? "#CA5400" }}>
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
              <div>
                <p className="text-[10px] font-black tracking-widest mb-3" style={{ color: meta?.color ?? "#CA5400" }}>
                  GALLERY
                </p>
                <Carousel
                  responsive={{
                    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
                    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
                    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
                  }}
                  keyBoardControl
                  transitionDuration={500}
                  containerClass="pb-2"
                  itemClass="px-1.5"
                >
                  {opportunity.additionalImages.map((link, i) => (
                    <div key={i} className="overflow-hidden rounded-xl aspect-video border border-[#e8e0d8]">
                      <Image
                        src={link}
                        width={400}
                        height={250}
                        alt={`${opportunity.name} image ${i + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
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