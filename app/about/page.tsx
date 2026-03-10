"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Image8 from "@/public/images/hero/image8.jpg";

const timeline = [
  {
    date: "October 2025",
    title: "First industry partnership signed",
    description:
      "Long-term agreement with KIFWA to digitise Kenya's clearing and forwarding payment and compliance ecosystem.",
  },
  {
    date: "November 2025",
    title: "Platform development begins",
    description:
      "Engineering begins on the Clearing and Forwarding Compliance Management System — the CCFMS.",
  },
  {
    date: "2026 — ongoing",
    title: "National rollout underway",
    description:
      "Phased deployment across Kenya's licensed clearing agents with live government integrations.",
  },
];

const team = [
  { name: "Garang Mayom Malek", role: "Director" },
  { name: "Ariec Wol Mayar", role: "Director" },
  { name: "Jeremy Momanyi Gisemba", role: "Director" },
  { name: "Eva A.S. Nyamori", role: "Global Chief Strategy Officer (GCSO)" },
  { name: "Alvin Okari", role: "Managing Director (MD)" },
  { name: "Emily N. Mukami", role: "Head of Compliance (HOC)" },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section — keep exactly as is */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <Image
          src={Image8}
          alt="CapitalPay Background"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Building payment infrastructure for large-volume ecosystems.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-10 leading-relaxed">
            We build payment infrastructure for high-volume ecosystems. In Kenya, we focus on trade, logistics, and regulated collections.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-gray-900 font-medium px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Contact Kenya
          </Link>
        </div>
      </section>

      {/* SECTION 1 — Who we are (dark background) */}
      <section className="py-24 px-6 bg-[#0a0a14]">
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            Who we are
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            CapitalPay International is a payment infrastructure company. We build and operate financial systems for regulated, high-volume ecosystems — working directly with industry associations, government institutions, and trade bodies across Africa.
          </p>
        </motion.div>
      </section>

      {/* SECTION 2 — What we do in Kenya (light background) */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
            What we do in Kenya
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Kenya is CapitalPay&apos;s flagship African market. We build payment, compliance, and settlement infrastructure for the clearing and forwarding industry, trade corridors, and regulated collections — working with industry associations including KIFWA, government institutions, and logistics operators.
          </p>
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            Our focus is long-term: digitising payment workflows, enforcing compliance standards, and creating real-time oversight across Kenya&apos;s trade and logistics ecosystem.
          </p>
        </motion.div>
      </section>

      {/* SECTION 3 — Our journey in Kenya (dark background) */}
      <section className="py-24 px-6 bg-[#0a0a14]">
        <motion.div
          {...fadeUp}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight">
            Our journey in Kenya
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeUp}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-white transform -translate-x-1/2 mt-2" style={{ boxShadow: "0 0 0 4px rgba(137, 43, 135, 0.5)" }} />
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span
                      className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-3"
                      style={{
                        background: "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
                      }}
                    >
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 — Our Team */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <motion.div
          {...fadeUp}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16 tracking-tight">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-xl p-8 border-t-2 border-[#F5C518]"
              >
                <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                <p className="text-gray-500 mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 — CTA (gradient background) */}
      <section
        className="py-24 px-6"
        style={{
          background: "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
        }}
      >
        <motion.div
          {...fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
            Want to work with us?
          </h2>
          <Link
            href="/contact"
            className="inline-flex bg-white text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-100"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
