"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DollarSign, RefreshCw, ShieldCheck, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ContactlessSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
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

  const services = [
    {
      icon: DollarSign,
      title: "Payments & Collection Engine",
      description: "Unified collections across multi-rail systems.",
      bullets: [
        "Standardised invoicing and references",
        "Bank + mobile money support",
        "Reduced cash handling and leakages",
      ],
      href: "/services#collections",
    },
    {
      icon: RefreshCw,
      title: "Reconciliation & Settlement",
      description: "Every payment matched automatically.",
      bullets: [
        "Auto-match invoices to payments",
        "Exception handling workflows",
        "Scheduled or real-time settlement",
      ],
      href: "/services#reconciliation",
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Validation",
      description: "Rules and checks built into the flow.",
      bullets: [
        "Accreditation / membership validation",
        "Role-based approvals",
        "Policy checks before settlement",
      ],
      href: "/services#compliance",
    },
    {
      icon: BarChart3,
      title: "Reporting & Oversight Dashboards",
      description: "Visibility for operators and regulators.",
      bullets: [
        "Operational dashboards",
        "Collections performance tracking",
        "Audit exports and reporting",
      ],
      href: "/services#dashboards",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="bg-white text-[#0B1E3D] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div ref={textRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            What we deliver.
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#892B87] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#892B87]/10 to-[#E94258]/10 flex items-center justify-center mb-4 group-hover:from-[#892B87]/20 group-hover:to-[#E94258]/20 transition-all">
                <service.icon className="w-6 h-6 text-[#892B87]" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#892B87] transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-sm font-semibold text-[#892B87] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
