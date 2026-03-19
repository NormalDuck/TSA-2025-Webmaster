import Link from "next/link";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import Image from "next/image";

export default function Footer() {
    return(
         <footer className="bg-[#1a1a1a] flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40"
                 style={{ scrollSnapAlign: "start" }}>

           <div className="px-25 py-15 grid grid-cols-1 md:grid-cols-2 ">

             <div className="flex flex-col">
               <div>
                 <Link href="/" className="flex items-center select-none shrink-0">
                    <Image
                      src="/walogo.png"
                      alt="WAsHub Logo"
                      width={50}
                      height={50}
                      className="rounded-full m-1 bg-white p-1.5"
                    />
                    <span className="text-[20px] font-extrabold tracking-tight">
                      <span style={{ color: "#FFFFFF"}}>WAs</span>
                      <span style={{ color: "#FD6900" }}>Hub</span>
                    </span>
                  </Link>
                 <p className="text-[#FFFFFF] text-opacity-80 leading-relaxed max-w-sm text-[14px]">
                   Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
                 </p>


                 <div className="flex gap-5 text-2xl mt-5 font-extrabold text-[8px] text-white" >
                   <a href="#" className="hover:text-blue-400 transition-transform hover:-translate-y-1"><SiFacebook /></a>
                   <a href="#" className="hover:text-pink-400 transition-transform hover:-translate-y-1"><SiInstagram /></a>
                 </div>
               </div>
             </div>




             <div className="grid lg:grid-cols-4 gap-2">
               <div className="flex flex-col gap-3">
                 <h3 className="font-extrabold text-[#9f9f9d] pb-2  text-[12px]">QUICK LINKS</h3>
                 <Link href="/resources" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Resources</Link>
                 <Link href="/about" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">About</Link>
                 <Link href="/donate" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Donate</Link>
                 <Link href="/references" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">References</Link>
               </div>


               <div className="flex flex-col gap-3">
                 <h3 className="font-extrabold text-[#9f9f9d] pb-2  text-[12px]">RESOURCES</h3>
                 <a href="#topresources" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Popular Resources</a>
                 <a href="/resources" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Resources Library</a>
                 <a href="/resources" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Search</a>
               </div>


               <div className="flex flex-col gap-3">
                 <h3 className="font-extrabold text-[#9f9f9d] pb-2 text-[12px]">ABOUT US</h3>
                 <Link href="/about#ourstory" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Our Story</Link>
                 <Link href="/about#missionstatement" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Mission</Link>
                 <Link href="/about" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Team</Link>
                 <Link href="/about" className="text-[#9F9F9F] hover:text-white transition-colors text-[14px]">Volunteer</Link>
               </div>


               <div className="flex flex-col gap-2" >
                 <h3 className="font-extrabold text-[#9f9f9d] pb-2 text-[12px]">CONTACT</h3>
                 <p className="font-bold text-[#FFFFFF] text-[16px]">(983) 222-6211 <br /> <span className="text-[#9F9F9F] text-opacity-60 text-[10px]">Mon-Fri . 8am - 5pm</span></p>
                 <p className="font-bold text-[#FFFFFF] text-[16px]">contact@washub.org</p>


                 <button
                   className="flex gap-3 px-4 py-3 text-xs font-bold tracking-widest transition-all hover:gap-5"
                   style={{
                   backgroundColor: "#1D140C",
                   border: "1.5px solid #FD6900",
                   borderRadius: "20px",
                 }}
               >
                 <p className="text-[#FD6900] text-[8px] font-extrabold">24/7 CRISIS LINE<br /> <span className="text-[#FFFFFF] text-[8px]">(555) 999-0000</span> </p>
           </button>
               </div>
             </div>


           </div>


           {/* Bottom Bar */}
           <div className="border-t border-white/20 px-35 py-4 text-sm text-[#C0C0C0] text-[12px]">
             © 2026 WAsHub. All rights reserved.
           </div>
         </footer>
    )
}