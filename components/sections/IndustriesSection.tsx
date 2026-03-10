"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, Ship, Scale, Users, Building2 } from "lucide-react";

const industries = [
  {
    icon: Truck,
    name: "Clearing & forwarding",
    description: "Licensed agents managing customs clearance and trade documentation.",
  },
  {
    icon: Ship,
    name: "Ports & trade corridors",
    description: "Cross-border trade and corridor payment infrastructure.",
  },
  {
    icon: Scale,
    name: "Regulated fees & levies",
    description: "Standardised collection of government and regulatory fees.",
  },
  {
    icon: Users,
    name: "Associations & member bodies",
    description: "Member payment systems and governance infrastructure.",
  },
  {
    icon: Building2,
    name: "Government collections",
    description: "Revenue collection for permits, licenses, and services.",
  },
];

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      cardsRef.current?.children || [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
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
            Built for complex ecosystems.
          </h2>
        </div>

        {/* Industry Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="group bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-[#892B87] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#892B87]/20 to-[#E94258]/20 flex items-center justify-center mb-4 group-hover:from-[#892B87]/30 group-hover:to-[#E94258]/30 transition-all">
                <industry.icon className="w-6 h-6 text-[#E94258]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {industry.name}
              </h3>

              <p className="text-sm text-white/60">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
