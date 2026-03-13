"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "RESOURCES", href: "/resources" },
  { label: "EVENTS", href: "/events" },
  { label: "DONATE", href: "/donate" },
  { label: "ABOUT US", href: "/about" },
];

const ORANGE = "#FD6900";

function NavLink({
  label,
  href,
  isActive,
  scrolled,
  onClick,
}: {
  label: string;
  href: string;
  isActive: boolean;
  scrolled: boolean;
  onClick?: () => void;
}) {
  const baseColor = isActive ? ORANGE : scrolled ? "#ffffff" : "#404040";

  return (
     <Link
      href={href}
      onClick={onClick}
      className="px-4 py-2 rounded-lg text-[12px] font-semibold transition-all duration-200"
      style={{
        letterSpacing: "0.08em",
        color: baseColor,
        background: "transparent", 
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = ORANGE;
        e.currentTarget.style.background = "rgba(253,105,0,0.10)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = baseColor;
        e.currentTarget.style.background = "transparent"; 
      }}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(
      "[data-scroll-container]"
    );

    const onScroll = () => {
      const scrollY = container ? container.scrollTop : window.scrollY;
      setScrolled(scrollY > 60);
    };

    const target: EventTarget = container ?? window;
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div
          className="flex items-center justify-between px-6 sm:px-8 lg:px-30 py-4 transition-all duration-500"
          style={{
            margin: scrolled ? "12px 16px 0" : "0",
            borderRadius: scrolled ? "14px" : "0px",
            background: scrolled
              ? "rgba(20, 20, 20, 0.25)"
              : "rgba(245, 243, 238, 0.97)",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
            border: scrolled ? "1.5px solid rgba(255,255,255,0.15)" : "none",
            boxShadow: scrolled ? "none" : "0 2px 12px rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center select-none shrink-0">
            <span
              className="text-[20px] font-extrabold tracking-tight"
            >
              <span
                className="transition-colors duration-500"
                style={{ color: scrolled ? "#ffffff" : "#1a1a1a" }}
              >
                WAs
              </span>
              <span style={{ color: ORANGE }}>Hub</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <NavLink
                key={label}
                label={label}
                href={href}
                isActive={pathname === href}
                scrolled={scrolled}
              />
            ))}
          </div>

          {/* Find Nearby Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden md:inline-flex px-5 py-1.75 rounded-2xl text-[14px] font-bold transition-all duration-300 hover:opacity-75 active:scale-95"
              style={{
                background: scrolled ? "rgba(255,255,255,0.15)" : "#111",
                color: "#fff",
                letterSpacing: "0.06em",
                border: scrolled
                  ? "1.5px solid rgba(255,255,255,0.5)"
                  : "1.5px solid transparent",
                boxShadow: scrolled ? "none" : "0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              FIND NEARBY
            </Link>
            
            {/* Hamburger Menu for Mobile */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: scrolled ? "#fff" : "#1a1a1a" }}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden mx-4 mt-1 rounded-xl overflow-hidden shadow-lg transition-all duration-300 origin-top ${
            menuOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-95 pointer-events-none"
          }`}
          style={{
            background: "rgba(245, 243, 238, 0.97)",
            backdropFilter: "blur(14px)",
            border: "1.5px solid rgba(255,255,255,0.5)",
          }}
        >
          <div className="flex flex-col p-3 gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-semibold text-neutral-700 hover:bg-black/5 transition-colors text-center"
                style={{ letterSpacing: "0.08em" }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/find-nearby"
              onClick={() => setMenuOpen(false)}
              className="mt-1 px-5 py-3 rounded-full text-sm font-bold text-white text-center hover:opacity-80 transition-opacity"
              style={{ background: "#111", letterSpacing: "0.06em" }}
            >
              FIND NEARBY
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}