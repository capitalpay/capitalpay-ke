"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DollarSign, RefreshCw, ShieldCheck, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const servicePillars = [
  {
    icon: DollarSign,
    title: "Payments & Collection Engine",
    tagline: "Collect once. Route anywhere.",
    bullets: [
      "Standardised invoicing and references",
      "Multi-rail payment collection",
      "Structured receipts and notifications",
    ],
    href: "/services/payment-aggregation",
  },
  {
    icon: RefreshCw,
    title: "Reconciliation & Settlement Infrastructure",
    tagline: "Every payment matched.",
    bullets: [
      "Auto-matching and exception handling",
      "Real-time or scheduled settlement",
      "End-to-end transaction traceability",
    ],
    href: "/services/reconciliation-settlement",
  },
  {
    icon: ShieldCheck,
    title: "Compliance, Validation & Controls",
    tagline: "Rules built in.",
    bullets: [
      "Eligibility and accreditation checks",
      "Approval workflows",
      "Policy-based routing",
    ],
    href: "/services/compliance-controls",
  },
  {
    icon: BarChart3,
    title: "Reporting, Oversight & Integrations",
    tagline: "One source of truth.",
    bullets: [
      "Operational dashboards",
      "Audit-ready exports",
      "Secure APIs and webhooks",
    ],
    href: "/services/reporting-integrations",
  },
];

export default function ServicesPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const engagementRef = useRef<HTMLDivElement>(null);

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
      }
    );

    gsap.fromTo(
      pillarsRef.current?.children || [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pillarsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      engagementRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: engagementRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

  }, []);

  return (
    <main 
      className="bg-[#060B18] min-h-screen pt-32 pb-20"
      style={{
        background: `radial-gradient(circle at center, rgba(196,72,190,0.28) 0%, rgba(233,66,88,0.22) 22%, rgba(242,114,36,0.18) 36%, rgba(0,12,28,1) 100%)`,
        backgroundColor: '#060B18'
      }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="max-w-4xl mx-auto px-6 text-center mb-20"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50 mb-4">
          Services
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Services for ecosystem operators.
        </h1>
        <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
          We design and operate the payment layer — collections, settlement, controls, and oversight.
        </p>
      </div>

      {/* Service Pillars Grid */}
      <div ref={pillarsRef} className="max-w-7xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-6">
        {servicePillars.map((pillar, i) => (
          <Link
            key={i}
            href={pillar.href}
            className="group bg-white/5 rounded-2xl border border-white/10 p-8 hover:border-[#892B87] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#892B87]/20 to-[#E94258]/20 flex items-center justify-center group-hover:from-[#892B87]/30 group-hover:to-[#E94258]/30 transition-all">
                <pillar.icon className="w-7 h-7 text-[#E94258]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#E94258] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/50">{pillar.tagline}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              {pillar.bullets.map((bullet, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="text-sm font-semibold text-[#892B87] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>

      {/* Engagement Model */}
      <div
        ref={engagementRef}
        className="max-w-5xl mx-auto px-6 mb-24"
      >
        <div className="bg-white/5 rounded-2xl border border-white/10 p-10 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6">Engagement model.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Assess the ecosystem and flows",
              "Define rules, references, and settlement paths",
              "Integrate to existing systems",
              "Launch with reporting and governance",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-white/70">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
