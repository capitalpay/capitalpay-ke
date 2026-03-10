"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Clearing & forwarding digitisation",
    description: "Centralised payment, compliance, and settlement infrastructure for Kenya's clearing and forwarding industry — including partners such as KIFWA.",
    type: "Programme",
    href: "/about",
  },
  {
    title: "Association collections & member payments",
    description: "Automated fee collection and reconciliation system for membership organizations.",
    type: "Capability",
    href: "/services",
  },
  {
    title: "Regulated fee collection + reconciliation",
    description: "Payment infrastructure for government-regulated service fees with real-time oversight.",
    type: "Capability",
    href: "/services",
  },
];

export default function ProofOfWorkSection() {
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
        stagger: 0.15,
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
      className="bg-white text-[#0B1E3D] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            In the field.
          </h2>
        </div>

        {/* Case Study Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <Link
              key={i}
              href={study.href}
              className="group bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#892B87] hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#892B87]/10 to-[#E94258]/10 text-xs font-semibold text-[#892B87] mb-4">
                {study.type}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#892B87] transition-colors">
                {study.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {study.description}
              </p>

              <div className="text-sm font-semibold text-[#892B87] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                Read more
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
