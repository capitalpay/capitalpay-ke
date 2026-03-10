"use client";

import Link from "next/link";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";

const reviews = [
  {
    stars: 5,
    text: "Super smooth and easy to use. Payments go through instantly. Best decision for our coffee shop.",
    name: "Rosa Martinez",
    date: "10th December 2025",
  },
  {
    stars: 5,
    text: "Great for my small business. No terminals, no hassle. Just tap and done. Highly recommend!",
    name: "James Clarke",
    date: "6th December 2025",
  },
  {
    stars: 5,
    text: "The cashback rewards are amazing. We save money every month while accepting card payments.",
    name: "Sophie Turner",
    date: "2nd December 2025",
  },
];

export default function ReviewCarouselHero() {

  return (
    <section 
      className="h-screen w-full grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16 relative overflow-hidden bg-[#060B18]"
      style={{
        background: `radial-gradient(circle at center, rgba(196,72,190,0.28) 0%, rgba(233,66,88,0.22) 22%, rgba(242,114,36,0.18) 36%, rgba(0,12,28,1) 100%)`,
        backgroundColor: '#060B18'
      }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#892B87]/10 via-[#E94258]/10 to-[#F27224]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* LEFT SIDE: Rotating Carousel */}
      <div className="relative flex items-center justify-center h-full">
        <TestimonialCarousel items={reviews} />
      </div>

      {/* RIGHT SIDE: Static Text Block */}
      <div className="flex flex-col justify-center md:pl-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Businesses love
          <br />
          CapitalPay
        </h2>

        <p className="mt-6 text-gray-300 text-lg max-w-md leading-relaxed">
          Trusted by UK businesses for secure, fast, and simple contactless
          payments. Join thousands who&apos;ve made the switch.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center justify-center w-fit rounded-full px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-[1.03]"
          style={{
            background:
              "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
            boxShadow: "0 8px 32px rgba(233, 66, 88, 0.35)",
          }}
        >
          Get in Touch
        </Link>

        {/* Trust badges */}
        <div className="mt-12 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-[#0a0a14]"
                />
              ))}
            </div>
            <span className="text-white/60 text-sm ml-2">2,400+ businesses</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-400">
            <span>★★★★★</span>
            <span className="text-white/60 text-sm ml-1">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

