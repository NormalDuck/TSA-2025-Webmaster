import Footer from "@/components/footer";

export default function AboutPage() {
  return <>
  {/*Section 1: Who we are */}
  <section>
    <div className="min-h-screen p-12 bg-[#100F0A] flex flex-col justify-between">
      <div className="mt-10 px-25">
        <h1 className="text-[90px] font-extrabold text-white mt-[350px] leading-[.9]">
          Who we<br/>
          <span className="text-transparent" style={{ WebkitTextStroke: "1px white" }}>really</span><br/>
          <span className="text-[#FD6900]">are.</span>
        </h1>
        <p className="text-white/60 mt-6 max-w-[550px] text-[16px] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
        </p>
      </div>

      {/* Stats row - bottom right */}
      <div className="flex gap-15 ml-auto w-fit">
        <div>
          <p className="text-white text-[40px] font-extrabold leading-none">2012</p>
          <p className="text-white/40 text-xs tracking-widest uppercase mt-1">Founded</p>
        </div>
        <div>
          <p className="text-white text-[40px] font-extrabold leading-none">12K<span className="text-[#FD6900]">+</span></p>
          <p className="text-white/40 text-xs tracking-widest uppercase mt-1">Served Yearly</p>
        </div>
        <div>
          <p className="text-white text-[40px] font-extrabold leading-none">90</p>
          <p className="text-white/40 text-xs tracking-widest uppercase mt-1">Volunteers</p>
        </div>
      </div>

      {/* Animated down arrow - centered */}
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

  {/*Section 2: Our Mission */}
  <section className="relative bg-[#E8E0D4] min-h-screen flex flex-col justify-between overflow-hidden">
    <div className="p-12 pt-20 max-w-2xl">
      <p className="text-[38px] font-bold leading-[1.2]">
        <span className="text-[#FD6900]">WAsHub</span>{" "}
        is committed to creating a safe space for Washington residents to share resources within the community. Founded in 2012,{" "}
        <span className="text-[#FD6900]">WAsHub</span>{" "}
        continues to follow their philosophy of{" "}
        <span className="text-[#4A7C52]">community</span>,{" "}
        <span className="text-[#4A7C52]">compassion</span>, and{" "}
        <span className="text-[#4A7C52]">equity</span>{" "}
        as they expand this resource hub and host events within local communities.
      </p>
    </div>

    {/* MISSION — half-cropped at bottom */}
    <div
      className="absolute bottom-0 left-0 right-0 text-center font-extrabold text-[#FD6900] opacity-20 leading-[0.69] select-none pointer-events-none"
      style={{ fontSize: "clamp(60px, 18vw, 260px)" }}
    >
    MISSION
  </div>
  </section>
  <Footer />
 </>
}
