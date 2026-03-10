"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServiceSectionProps {
  title: string;
  description: string;
  reverse?: boolean;
  icon?: ReactNode;
  hideIconBackground?: boolean;
}

export default function ServiceSection({
  title,
  description,
  reverse = false,
  icon,
  hideIconBackground = false,
}: ServiceSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-7xl mx-auto py-20 px-6"
    >
      <div
        className={`grid md:grid-cols-2 gap-16 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
        style={{ direction: reverse ? "rtl" : "ltr" }}
      >
        {/* Icon/Image Side */}
        <div style={{ direction: "ltr" }}>
          <div className="relative">
            {hideIconBackground ? (
              // No background container - just the icon
              <div className="w-full aspect-square max-w-sm mx-auto flex items-center justify-center">
                {icon}
              </div>
            ) : (
              <>
                {/* Icon Container with background */}
                <div className="w-full aspect-square max-w-sm mx-auto bg-white/5 rounded-3xl flex items-center justify-center border border-white/5 shadow-xl">
                  {icon || (
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#892B87]/30 via-[#E94258]/30 to-[#F27224]/30 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#892B87]/10 via-[#E94258]/10 to-[#F27224]/10 blur-3xl -z-10 scale-110 opacity-50" />
              </>
            )}
          </div>
        </div>

        {/* Text Side */}
        <div style={{ direction: "ltr" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}





