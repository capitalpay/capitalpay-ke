"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RotateCw } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Invoice / fee created",
    body: "A reference and amount are generated for the payer.",
    details: [
      "Standardised invoice format with unique reference",
      "Fee calculation based on configured rules",
      "Payer notification with payment instructions",
    ],
  },
  {
    id: 2,
    title: "Payment initiated",
    body: "Payment is made through approved rails with structured references.",
    details: [
      "Multi-channel collection (bank, mobile money)",
      "Structured reference captured with payment",
      "Real-time payment notification received",
    ],
  },
  {
    id: 3,
    title: "Validation checks",
    body: "Eligibility, policy checks, and basic verification are applied.",
    details: [
      "Accreditation and membership status verified",
      "Policy-based routing and holds applied",
      "Compliance flags checked before processing",
    ],
  },
  {
    id: 4,
    title: "Auto-reconciliation",
    body: "Payment is automatically matched to the invoice and logged.",
    details: [
      "Invoice-to-payment matching via reference",
      "Exception handling for mismatches",
      "Transaction logged with full audit trail",
    ],
  },
  {
    id: 5,
    title: "Settlement + audit trail",
    body: "Funds are routed, settled, and recorded for oversight.",
    details: [
      "Multi-party settlement to configured recipients",
      "Stakeholder statements generated",
      "Compliance-ready records stored",
    ],
  },
];

export default function PaymentFlowNavigator() {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const desktopContentRef = useRef<HTMLDivElement>(null);
  const mobileContentRef = useRef<HTMLDivElement>(null);

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

    // Animate desktop content
    if (desktopContentRef.current) {
      gsap.fromTo(
        desktopContentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: desktopContentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate mobile content
    if (mobileContentRef.current) {
      gsap.fromTo(
        mobileContentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mobileContentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const activeStepData = steps.find((s) => s.id === activeStep)!;

  return (
    <section
      ref={sectionRef}
      className="bg-white text-[#0B1E3D] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="mb-16" style={{ opacity: 0 }}>
          <div className="flex items-center gap-3 mb-4">
            <RotateCw className="w-5 h-5 text-[#892B87]" />
            <span className="text-sm font-semibold text-[#892B87] uppercase tracking-wider">
              Continuous cycle
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            How a payment moves.
          </h2>
        </div>

        {/* Desktop: Two-Column Layout */}
        <div
          ref={desktopContentRef}
          className="hidden md:grid md:grid-cols-[1fr_380px] gap-8"
          style={{ opacity: 0 }}
        >
          {/* LEFT: Active Step Detail Card */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-10 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#892B87]/10 to-[#E94258]/10 text-xs font-semibold text-[#892B87] mb-6">
              Step {activeStepData.id}
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {activeStepData.title}
            </h3>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {activeStepData.body}
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                What happens here
              </h4>
              {activeStepData.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#892B87] mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Step Navigator List */}
          <div className="relative">
            <div className="space-y-3">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left rounded-xl border-2 p-4 transition-all duration-300 ${
                    activeStep === step.id
                      ? "bg-white border-[#892B87] shadow-md"
                      : "bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all ${
                        activeStep === step.id ? "" : "bg-gray-200 text-gray-900"
                      }`}
                      style={
                        activeStep === step.id
                          ? { background: "linear-gradient(135deg, #892B87 0%, #E94258 100%)", color: "white" }
                          : undefined
                      }
                    >
                      {step.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-semibold leading-tight ${
                          activeStep === step.id
                            ? "text-gray-900"
                            : "text-gray-600"
                        }`}
                      >
                        {step.title}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Stacked Layout */}
        <div className="md:hidden" style={{ opacity: 0 }} ref={mobileContentRef}>
          {/* Horizontal Step Pills (Scrollable) */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-6 -mx-6 px-6 scrollbar-hide">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex-shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition-all border-2 ${
                  activeStep === step.id
                    ? "bg-gradient-to-r from-[#892B87] to-[#E94258] text-white border-transparent"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                {step.id}. {step.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Active Step Detail Card */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#892B87]/10 to-[#E94258]/10 text-xs font-semibold text-[#892B87] mb-4">
              Step {activeStepData.id}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {activeStepData.title}
            </h3>

            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              {activeStepData.body}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                What happens here
              </h4>
              {activeStepData.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#892B87] mt-1.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
