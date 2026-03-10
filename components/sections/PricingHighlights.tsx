"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    title: "Low Fees",
    highlight: "1.4% + £0.05",
    description: "per transaction",
    subtext: "No contracts, no terminals",
  },
  {
    title: "Cashback Rewards",
    highlight: "Up to 0.4%",
    description: "monthly cashback",
    subtext: "On all transactions processed",
  },
  {
    title: "Simple Monthly Plan",
    highlight: "£20",
    description: "per month",
    subtext: "Zero hidden fees",
  },
];

export default function PricingHighlights() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            What you get with CapitalPay
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Simple pricing, powerful features, and real rewards.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                {feature.title}
              </h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  {feature.highlight}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{feature.description}</p>
              <p className="text-sm text-gray-400">{feature.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





