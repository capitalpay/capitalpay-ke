"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, ArrowDownLeft, CreditCard } from "lucide-react";

export default function PhoneMockup() {
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      phoneRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: phoneRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={phoneRef} className="relative" style={{ opacity: 0 }}>
      {/* Glow behind phone - CP Gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[500px] blur-[80px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse, rgba(233, 66, 88, 0.5) 0%, rgba(137, 43, 135, 0.3) 50%, transparent 70%)",
        }}
      />

      {/* Phone Frame */}
      <div className="relative w-[280px] h-[560px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
        <div className="w-full h-full bg-[#0a0a14] rounded-[2.5rem] overflow-hidden flex flex-col">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-8 pt-4">
            <span className="text-white/50 text-xs font-medium">9:41</span>
            <div className="w-24 h-6 bg-black rounded-full" />
            <span className="text-white/50 text-xs font-medium">100%</span>
          </div>

          {/* App Header */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="cp-gradient w-10 h-10 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-white font-semibold">CapitalPay</span>
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="mx-6 mb-6">
            <div
              className="rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(137, 43, 135, 0.3) 0%, rgba(233, 66, 88, 0.2) 50%, rgba(242, 114, 36, 0.15) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <p className="text-white/50 text-xs mb-1">Total Balance</p>
              <p className="text-white text-3xl font-bold">£12,458.32</p>
              <p className="text-emerald-400 text-sm mt-2">
                +£845.20 this month
              </p>
            </div>
          </div>

          {/* Actions - Using Lucide Icons */}
          <div className="px-6 mb-6">
            <div className="flex justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-white/70" />
                </div>
                <span className="text-white/50 text-xs">Send</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ArrowDownLeft className="w-5 h-5 text-white/70" />
                </div>
                <span className="text-white/50 text-xs">Receive</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white/70" />
                </div>
                <span className="text-white/50 text-xs">Cards</span>
              </div>
            </div>
          </div>

          {/* Cashback Card */}
          <div className="mx-6 mt-auto mb-6">
            <div className="rounded-2xl p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/50 text-xs">Cashback earned</p>
                  <p className="text-amber-400 text-xl font-bold">+£24.80</p>
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-xs">this week</p>
                  <p className="text-emerald-400 text-sm">↑ 12%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-center pb-4">
            <div className="w-32 h-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
