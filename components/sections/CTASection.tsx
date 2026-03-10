"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#060B18] py-24 md:py-32"
      style={{
        background: `radial-gradient(circle at center, rgba(196,72,190,0.28) 0%, rgba(233,66,88,0.22) 22%, rgba(242,114,36,0.18) 36%, rgba(0,12,28,1) 100%)`,
        backgroundColor: '#060B18'
      }}
    >
      {/* Centered Orb Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#892B87]/20 via-[#E94258]/20 to-[#F27224]/20 blur-[140px] opacity-70"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div
          ref={contentRef}
          className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(137, 43, 135, 0.15) 0%, rgba(233, 66, 88, 0.15) 50%, rgba(242, 114, 36, 0.15) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            opacity: 0,
          }}
        >
          {/* Background glow - CP Gradient */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] blur-[100px] opacity-40"
            style={{
              background:
                "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's build your rails.
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto text-lg">
              If you run a high-volume ecosystem, we can standardise how money moves — end to end.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="cp-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:brightness-110"
                style={{
                  boxShadow: "0 8px 32px rgba(233, 66, 88, 0.35)",
                }}
              >
                Contact Kenya
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
