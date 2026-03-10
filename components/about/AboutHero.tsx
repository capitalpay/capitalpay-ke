"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/hero/image3.jpg"
        alt="CapitalPay Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center md:text-left text-white">
        <p className="text-lg font-medium opacity-90 mb-4">
          About CapitalPay
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          We're building the future of UK payments.
        </h1>

        <p className="text-lg max-w-2xl opacity-90 mb-8">
          CapitalPay helps UK businesses accept payments faster, smarter,
          and more securely — all from a single tap. We're here to empower
          every entrepreneur with modern financial tools that just work.
        </p>

        <a
          href="/pricing"
          className="inline-block bg-gradient-to-r from-[#892B87] via-[#E94258] to-[#F27224] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition"
        >
          Try CapitalPay Now
        </a>
      </div>
    </section>
  );
}





