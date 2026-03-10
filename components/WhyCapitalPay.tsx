"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Lock, CheckCircle, Fingerprint } from "lucide-react";

export default function WhyCapitalPay() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
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

    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
        {/* Left - Text */}
        <div ref={textRef}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Your payments, protected.
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-md">
            CapitalPay uses bank-grade encryption, secure authentication, and real-time fraud monitoring to keep every transaction safe — no terminals, no compromises.
          </p>
        </div>

        {/* Right - Security Visual */}
        <div
          ref={logoRef}
          className="relative flex justify-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
            {/* Main Shield Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Shield with Gradient */}
                <div 
                  className="w-32 h-32 rounded-3xl flex items-center justify-center shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
                  }}
                >
                  <Shield className="w-20 h-20 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Checkmark Badge */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <CheckCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Security Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Encryption */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Lock className="w-6 h-6 text-[#892B87]" />
                </div>
                <p className="text-xs font-semibold text-gray-700">256-bit Encryption</p>
              </div>

              {/* Biometric */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <Fingerprint className="w-6 h-6 text-[#E94258]" />
                </div>
                <p className="text-xs font-semibold text-gray-700">Biometric Auth</p>
              </div>

              {/* PCI Compliant Badge */}
              <div className="col-span-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 flex items-center justify-center gap-3 border border-emerald-200">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900">PCI-DSS Level 1</p>
                  <p className="text-xs text-gray-600">Certified Compliant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Glow Behind - CP Gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#892B87]/20 via-[#E94258]/20 to-[#F27224]/20 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
