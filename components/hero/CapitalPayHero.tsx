"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const STATS = [
  "1,200+ Licensed Clearing Agents",
  "Real-time settlement across Kenya's ports & borders",
  "Compliance infrastructure for trade & logistics",
  "Partners including KIFWA, KRA, and KenTrade",
];

export default function CapitalPayHero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [statIndex, setStatIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatIndex((i) => (i + 1) % STATS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - NO GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/image7.jpg')" }}
      />

      {/* Subtle dark overlay for text readability only */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
              Kenya
            </p>

            <h1
              ref={headlineRef}
              className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ opacity: 0 }}
            >
              Payments infrastructure for large-volume ecosystems.
            </h1>

            <div className="mt-4 h-6 flex items-center min-w-0">
              <span
                key={statIndex}
                className="text-sm font-medium"
                style={{
                  background: "linear-gradient(90deg, #892B87 0%, #E94258 50%, #F27224 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "stats-ticker-fade 3s ease-in-out forwards",
                }}
              >
                {STATS[statIndex]}
              </span>
            </div>

            <p
              ref={subtitleRef}
              className="mt-8 max-w-lg text-xl leading-relaxed text-white/80"
              style={{ opacity: 0 }}
            >
              Capital Pay Kenya builds collections, settlement, and compliance rails for complex systems — trade, logistics, and regulated services.
            </p>

            <div
              ref={buttonsRef}
              className="mt-10 flex flex-wrap items-center gap-4"
              style={{ opacity: 0 }}
            >
              {/* Primary Button - CP Gradient */}
              <Link
                href="/services"
                className="cp-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:brightness-110"
                style={{
                  boxShadow: "0 8px 32px rgba(233, 66, 88, 0.4)",
                }}
              >
                Explore services
              </Link>

              {/* Secondary Button - White Outline */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/50 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                Talk to the Kenya team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
