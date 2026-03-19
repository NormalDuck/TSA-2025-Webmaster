// app/checkout/page.tsx

"use client";

// app/checkout/page.tsx

import { createCheckoutRedirectProduct, createCheckoutRedirectSubscription } from "@/lib/checkout-stripe";
import { Heart, Leaf, Users, Home, Apple, GraduationCap, ArrowRight, Shield, RefreshCcw } from "lucide-react";
import { useState } from "react";

const PRESET_AMOUNTS = [10, 25, 50, 100];

const PRICE_PURCHASE = {
  10: "price_1TCZtsPfrJiRgO05bKuv6p2u",
  25: "price_1TCjKfPfrJiRgO05KH4GBR11",
  50: "price_1TCjKxPfrJiRgO05e84Vc1pR",
  100: "price_1TCjL9PfrJiRgO05b19VKw88"
}

const SUBSCRIPTION_PURCHASE = {
  10: "price_1TCjvAPfrJiRgO058Tc4jiTc",
  25: "price_1TCjvhPfrJiRgO05a31BJChW",
  50: "price_1TCjw6PfrJiRgO053wq3tj7i",
  100: "price_1TCjwXPfrJiRgO05CbpZ1dwO"
}

const IMPACT = [
  { icon: <Apple size={16} />, color: "#FD6900", bg: "#FFF3E0", amount: 10, label: "Feeds a family for a week through our food bank partners." },
  { icon: <Users size={16} />, color: "#52AD6A", bg: "#E8F5E9", amount: 25, label: "Funds one counseling session for a family in need." },
  { icon: <Home size={16} />, color: "#4a7c59", bg: "#E8F5E9", amount: 50, label: "Helps cover one night of emergency shelter." },
  { icon: <GraduationCap size={16} />, color: "#CA5400", bg: "#FBE9E7", amount: 100, label: "Sponsors a student in an after-school program for a month." },
];

export default function CheckoutPage() {
  const [selected, setSelected] = useState<10 | 25 | 50 | 100>(25);
  const [custom, setCustom] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);

  const displayAmount = custom ? parseFloat(custom) || 0 : selected;
  const activeImpact = IMPACT.reduce((prev, curr) =>
    displayAmount >= curr.amount ? curr : prev
  );

  return (
    <div className="min-h-screen bg-[#FEFCF8] flex flex-col">

      <div className="bg-[#FEFCF8] px-6 py-6 pt-25 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
        />
        {/*Support our community header*/}
        <div className="relative z-10 max-w-xl mx-auto py-5">
          <div className="inline-flex items-center gap-2 bg-[#FD6900]/15 border border-[#FD6900]/30 rounded-full px-4 py-1.5 mb-4">
            <Heart size={12} className="text-[#FD6900]" fill="#FD6900" />
            <span className="text-[10px] font-black tracking-widest text-[#FD6900] uppercase">Support Our Community</span>
          </div>
          {/*Header*/}
          <h1 className="text-[clamp(28px,5vw,48px)] font-black text-black leading-[.9] tracking-tight mb-4">
            Every dollar<br />
            <span className="text-[#FD6900]">stays local.</span>
          </h1>
          <p className="text-[13px] text-[#6a5a4a] max-w-xs mx-auto leading-[1.2]">
            100% of donations go directly to Washington-area programs serving families, food access, housing, and more.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Left — donation form */}
        <div className="bg-white rounded-3xl shadow-sm border border-[#f0ebe3] overflow-hidden">

          {/* Recurring toggle */}
          <div className="grid grid-cols-2 border-b border-[#f0ebe3]">
            {["One-Time", "Monthly"].map((type) => {
              const recurring = type === "Monthly";
              const active = isRecurring === recurring;
              return (
                <button
                  key={type}
                  onClick={() => setIsRecurring(recurring)}
                  className="py-3.5 text-[14px] font-bold tracking-widest transition-all duration-200"
                  style={{
                    color: active ? "#CA5400" : "#9a8a7a",
                    borderBottom: active ? "2px solid #CA5400" : "2px solid transparent",
                    background: active ? "#FBE9E7" : "transparent",
                  }}
                >
                  {type.toUpperCase()}
                </button>
              );
            })}
          </div>

          <div className="p-6 flex flex-col gap-5">

            {/* Preset amounts */}
            <div>
              <p className="text-[11px] font-extrabold tracking-wide text-[#9a8a7a] mb-3 uppercase">Choose an amount</p>
              <div className="grid grid-cols-4 gap-2">
                {PRESET_AMOUNTS.map((amt) => {
                  const active = !custom && selected === amt;
                  return (
                    <button
                      key={amt}
                      onClick={() => { setSelected(amt as never); setCustom(""); }}
                      className="py-3 rounded-xl text-[14px] font-bold transition-all duration-200"
                      style={{
                        background: active ? "#CA5400" : "#faf7f2",
                        color: active ? "white" : "#4a3c30",
                        border: active ? "2px solid #CA5400" : "2px solid transparent",
                        transform: active ? "scale(1.04)" : "scale(1)",
                        boxShadow: active ? "0 4px 16px #CA540030" : "none",
                      }}
                    >
                      ${amt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom amount */}
            <div>
              <p className="text-[11px] font-extrabold tracking-wide text-[#9a8a7a] mb-2 uppercase">Or enter custom</p>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#CA5400] font-bold text-sm">$</span>
                <input
                  type="number"
                  min={1}
                  placeholder="Other amount"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); }}
                  className="w-full pl-8 pr-4 py-3 rounded-xl border text-[14px] font-bold outline-none transition-all"
                  style={{
                    background: "#faf7f2",
                    border: custom ? "2px solid #CA5400" : "2px solid transparent",
                    color: "#100F0A",
                  }}
                  onFocus={(e) => (e.currentTarget.style.border = "2px solid #CA5400")}
                  onBlur={(e) => { if (!custom) e.currentTarget.style.border = "2px solid transparent"; }}
                />
              </div>
            </div>

            {/* Impact callout */}
            <div
              className="rounded-xl p-3.5 flex items-start gap-3 transition-all duration-300"
              style={{ background: activeImpact.bg }}
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: activeImpact.color + "22", color: activeImpact.color }}
              >
                {activeImpact.icon}
              </span>
              <div>
                <p className="text-[10px] font-black tracking-widest mb-0.5" style={{ color: activeImpact.color }}>
                  YOUR IMPACT
                </p>
                <p className="text-[12px] text-[#3a3028] leading-snug">{activeImpact.label}</p>
              </div>
            </div>

            {/* Submit */}
            <form action={() => isRecurring ? createCheckoutRedirectSubscription(SUBSCRIPTION_PURCHASE[selected]) : createCheckoutRedirectProduct(PRICE_PURCHASE[selected])}>
              <input type="hidden" name="amount" value={displayAmount} />
              <input type="hidden" name="recurring" value={String(isRecurring)} />
              <button
                type="submit"
                disabled={displayAmount <= 0}
                className="w-full py-4 rounded-2xl font-bold text-[14px] tracking-wide text-white flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  background: displayAmount > 0 ? "linear-gradient(135deg, #FD6900, #CA5400)" : "#ccc",
                  boxShadow: displayAmount > 0 ? "0 8px 24px #CA540040" : "none",
                }}
              >
                <Heart size={14} fill="white" />
                DONATE ${displayAmount > 0 ? displayAmount.toFixed(2) : "—"}
                {isRecurring ? " / MO" : ""}
                <ArrowRight size={14} />
              </button>
            </form>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="flex items-center gap-1 text-[10px] text-[#9a8a7a] font-semibold">
                <Shield size={10} className="text-[#52AD6A]" /> Secure & encrypted
              </span>
              <span className="text-[#e8e0d5]">·</span>
              <span className="flex items-center gap-1 text-[10px] text-[#9a8a7a] font-semibold">
                <RefreshCcw size={10} className="text-[#52AD6A]" /> Cancel anytime
              </span>
              <span className="text-[#e8e0d5]">·</span>
              <span className="flex items-center gap-1 text-[10px] text-[#9a8a7a] font-semibold">
                <Leaf size={10} className="text-[#52AD6A]" /> Tax-deductible
              </span>
            </div>
          </div>
        </div>

        {/* Right — what your donation funds */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-[12px] font-bold tracking-widest text-[#CA5400] mb-1 uppercase">Where it goes</p>
            <h2 className="text-[22px] font-extrabold text-[#100F0A] leading-tight">
              Funding <span className="text-[#52AD6A]">real </span>change<br />across Washington.
            </h2>
          </div>

          {IMPACT.map((item) => (
            <div
              key={item.amount}
              className="flex items-start gap-4 p-4 rounded-2xl border transition-all duration-200"
              style={{
                borderColor: displayAmount >= item.amount ? item.color + "40" : "#f0ebe3",
                background: displayAmount >= item.amount ? item.bg : "white",
              }}
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: item.color + "18", color: item.color }}
              >
                {item.icon}
              </span>
              <div className="flex-1">
                <p className="text-[13px] font-black text-[#100F0A] mb-0.5">${item.amount}+</p>
                <p className="text-[12px] text-[#6a5a4a] leading-snug">{item.label}</p>
              </div>
              {displayAmount >= item.amount && (
                <span
                  className="text-[9px] font-black px-2 py-1 rounded-full shrink-0"
                  style={{ background: item.color, color: "white" }}
                >
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
