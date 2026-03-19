import Link from "next/link";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[#1a1a1a] flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="py-10 md:py-15 flex flex-col md:flex-row gap-10 md:gap-6">

        {/* Left: Logo + Description + Socials */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <Link href="/" className="flex items-center select-none shrink-0">
            <Image
              src="/logo_white.png"
              alt="WAsHub Logo"
              width={50}
              height={50}
              className="m-1 "
            />
            <span className="text-[20px] font-extrabold tracking-tight">
              <span style={{ color: "#FFFFFF" }}>WAs</span>
              <span style={{ color: "#FD6900" }}>Hub</span>
            </span>
          </Link>

          <p className="text-[#FFFFFF] text-opacity-80 leading-relaxed text-[14px] max-w-sm">
            WAsHub has been supporting families and communities within Washington for over 10 years, giving local non-profits a digital space to share their resources with others.
          </p>

          <div className="flex gap-5 text-2xl text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform hover:-translate-y-1"
            >
              <SiFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-transform hover:-translate-y-1"
            >
              <SiInstagram />
            </a>
          </div>
        </div>

        {/* Right: Nav Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:flex-1">

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-extrabold text-[#9f9f9d] pb-2 text-[12px] uppercase tracking-wider">
              Quick Links
            </h3>
            <Link href="/resources" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Resources</Link>
            <Link href="/events" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Events</Link>
            <Link href="/about" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">About</Link>
            <Link href="/donate" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Donate</Link>
            <Link href="/references" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">References</Link>
            
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="font-extrabold text-[#9f9f9d] pb-2 text-[12px] uppercase tracking-wider">
              Resources
            </h3>
            <a href="#topresources" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Popular Resources</a>
            <a href="/resources" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Resources Library</a>
            <a href="/resources" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Search</a>
          </div>

          {/* About Us */}
          <div className="flex flex-col gap-3">
            <h3 className="font-extrabold text-[#9f9f9d] pb-2 text-[12px] uppercase tracking-wider">
              About Us
            </h3>
            <Link href="/about#missionstatement" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Mission</Link>
            <Link href="/about#ourstory" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Our Story</Link>
            <Link href="/about#volunteersection" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Volunteer</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-extrabold text-[#9f9f9d] pb-2 text-[12px] uppercase tracking-wider">
              Contact
            </h3>

            <p className="font-bold text-[#FFFFFF] text-[14px]">
              <a href="tel:+19832226211" className="hover:text-blue-400 transition-colors">
                (983) 222-6211
              </a>
              <br />
              <span className="text-[#9F9F9F] text-[11px]">Mon–Fri · 8am – 5pm</span>
            </p>

            <p className="font-bold text-[14px]">
              <a href="mailto:contact@washub.org" className="text-[#FFFFFF] hover:text-blue-400 transition-colors break-all">
                contact@washub.org
              </a>
            </p>

            <a
              href="tel:+15559990000"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-105 w-fit"
              style={{
                backgroundColor: "#1D140C",
                border: "1.5px solid #FD6900",
                boxShadow: "0 0 10px rgba(253,105,0,0.15)",
              }}
            >
              <span className="flex flex-col leading-tight">
                <span className="font-extrabold text-[9px] tracking-widest" style={{ color: "#FD6900" }}>
                  24/7 CRISIS LINE
                </span>
                <span className="font-bold text-white text-[12px]">
                  (555) 999-0000
                </span>
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-[#C0C0C0] text-[12px] gap-2">
        <span>© 2026 WAsHub. All rights reserved.</span>
      </div>
    </footer>
  );
}