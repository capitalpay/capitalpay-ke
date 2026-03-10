"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceBriefData } from "./ServiceBrief.types";

interface ServiceBriefPageProps {
  data: ServiceBriefData;
}

export default function ServiceBriefPage({ data }: ServiceBriefPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLElement>(null);
  const deliverablesRef = useRef<HTMLElement>(null);
  const fitRef = useRef<HTMLElement>(null);
  const workflowsRef = useRef<HTMLElement>(null);
  const proofRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = [
      heroRef.current,
      scopeRef.current,
      deliverablesRef.current,
      fitRef.current,
      workflowsRef.current,
      proofRef.current,
    ].filter(Boolean);

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
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
    });
  }, []);

  return (
    <main
      className="bg-[#060B18] min-h-screen pt-32 pb-20"
      style={{
        background: `radial-gradient(circle at center, rgba(196,72,190,0.28) 0%, rgba(233,66,88,0.22) 22%, rgba(242,114,36,0.18) 36%, rgba(0,12,28,1) 100%)`,
        backgroundColor: "#060B18",
      }}
    >
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link
          href="/services"
          className="text-white/50 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
        >
          ← Services
        </Link>
      </div>

      {/* A) HERO */}
      <div ref={heroRef} className="max-w-7xl mx-auto px-6 mb-24" style={{ opacity: 0 }}>
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              {data.tagline}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              {data.intro}
            </p>
          </div>

          {/* Outcome Summary Card */}
          <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
              Outcomes
            </h3>
            <ul className="space-y-4">
              {data.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E94258] mt-2 flex-shrink-0" />
                  <span className="text-white/90">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* B) SERVICE SCOPE */}
      <section ref={scopeRef} className="max-w-7xl mx-auto px-6 mb-24" style={{ opacity: 0 }}>
        <h2 className="text-3xl font-bold text-white mb-10">Scope</h2>
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
          <div className="divide-y divide-white/10">
            {data.scope.map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">
                    Problem
                  </div>
                  <div className="text-lg text-white/80">{item.problem}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-emerald-400/70 uppercase tracking-wider mb-2">
                    Outcome
                  </div>
                  <div className="text-lg text-white font-medium">{item.outcome}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C) DELIVERABLES */}
      <section ref={deliverablesRef} className="max-w-7xl mx-auto px-6 mb-24" style={{ opacity: 0 }}>
        <h2 className="text-3xl font-bold text-white mb-10">Deliverables</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-6">Core</h3>
            <ul className="space-y-3">
              {data.deliverables.core.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-6">Controls</h3>
            <ul className="space-y-3">
              {data.deliverables.controls.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-6">Reporting</h3>
            <ul className="space-y-3">
              {data.deliverables.reporting.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* D) BEST FIT */}
      <section ref={fitRef} className="max-w-7xl mx-auto px-6 mb-24" style={{ opacity: 0 }}>
        <h2 className="text-3xl font-bold text-white mb-10">Best fit</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.bestFit.map((fit, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white mb-3">{fit.label}</h3>
              <p className="text-white/60 text-sm mb-6">{fit.note}</p>
              <div className="space-y-2">
                {fit.examples.map((example, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#892B87] mt-1.5 flex-shrink-0" />
                    <span className="text-white/70 text-xs">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E) WORKFLOWS */}
      <section ref={workflowsRef} className="max-w-7xl mx-auto px-6 mb-24" style={{ opacity: 0 }}>
        <h2 className="text-3xl font-bold text-white mb-10">Typical workflows</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.workflows.map((workflow, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl border border-white/10 p-8 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold text-white mb-6">{workflow.name}</h3>
              <ol className="space-y-3">
                {workflow.steps.map((step, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(137, 43, 135, 0.3) 0%, rgba(233, 66, 88, 0.3) 100%)",
                        border: "1px solid rgba(137, 43, 135, 0.5)",
                      }}
                    >
                      <span className="text-white/90">{j + 1}</span>
                    </div>
                    <span className="text-white/70 text-sm mt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* F) PROOF (if exists) */}
      {data.proof && data.proof.items.length > 0 && (
        <section ref={proofRef} className="max-w-7xl mx-auto px-6 mb-24" style={{ opacity: 0 }}>
          <h2 className="text-3xl font-bold text-white mb-10">Proof</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.proof.items.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group bg-white/5 rounded-2xl border border-white/10 p-8 hover:border-[#892B87] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E94258] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 mb-4">{item.description}</p>
                <div className="text-sm font-semibold text-[#892B87] group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* G) CTA */}
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="relative rounded-3xl p-12 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(137, 43, 135, 0.15) 0%, rgba(233, 66, 88, 0.15) 50%, rgba(242, 114, 36, 0.15) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">{data.cta.title}</h2>
          <p className="text-white/60 mb-8 text-lg">{data.cta.subtitle}</p>
          <Link
            href={data.cta.href}
            className="cp-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:brightness-110"
            style={{ boxShadow: "0 8px 32px rgba(233, 66, 88, 0.35)" }}
          >
            {data.cta.button}
          </Link>
        </div>
      </div>
    </main>
  );
}
