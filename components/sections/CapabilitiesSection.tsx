"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const capabilities = [
  "Multi-rail payments",
  "Automated invoicing",
  "Real-time settlement",
  "Reconciliation engine",
  "API integrations",
  "Audit trails",
  "Role-based approvals",
  "Dashboards & reporting",
];

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      gridRef.current?.children || [],
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#060B18] py-24 md:py-32"
      style={{
        background: `radial-gradient(circle at center, rgba(196,72,190,0.15) 0%, rgba(233,66,88,0.12) 22%, rgba(242,114,36,0.10) 36%, rgba(0,12,28,1) 100%)`,
        backgroundColor: "#060B18",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Capabilities.
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((capability, i) => (
            <div
              key={i}
              className="group bg-white/5 rounded-xl border border-white/10 p-6 hover:border-[#E94258] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
            >
              <div className="text-lg font-bold text-white group-hover:text-[#E94258] transition-colors">
                {capability}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
