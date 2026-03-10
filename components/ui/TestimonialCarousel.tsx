"use client";

import React, { useEffect, useState } from "react";

interface TestimonialItem {
  stars: number;
  text: string;
  name: string;
  date: string;
}

interface TestimonialCarouselProps {
  items: TestimonialItem[];
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5 seconds with infinite wrap
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  // Card background colors for visual variety
  const cardBackgrounds = [
    "#0B1220", // Deep navy
    "#171A2A", // Dark purple
    "#0A0F1A", // Almost-black navy
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-[420px] md:h-[480px]">
      {/* CARDS - Fixed width container */}
      <div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[420px]">
        {items.map((item, i) => {
          const isActive = i === activeIndex;

          return (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 translate-x-0 z-20"
                  : "opacity-0 translate-x-10 z-10 pointer-events-none"
              }`}
            >
              <div 
                className="relative rounded-2xl p-8 text-white w-full h-full flex flex-col justify-between shadow-2xl"
                style={{
                  backgroundColor: cardBackgrounds[i % cardBackgrounds.length]
                }}
              >
                {/* Soft CapitalPay gradient glow behind card */}
                <div 
                  className="absolute inset-0 -z-10 rounded-full blur-3xl"
                  style={{
                    background: "linear-gradient(135deg, #892B87, #E94258, #F27224)",
                    opacity: isActive ? 0.2 : 0.15,
                    transform: "scale(1.3)",
                  }}
                />

                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 text-xl">
                  {Array.from({ length: item.stars }).map((_, starIdx) => (
                    <span key={starIdx}>★</span>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-white text-lg leading-relaxed flex-1 mt-6">
                  &ldquo;{item.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-white/60 text-sm">{item.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-gradient-to-r from-[#892B87] via-[#E94258] to-[#F27224] w-6"
                : "bg-gray-500/30 hover:bg-white/40 w-2"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

