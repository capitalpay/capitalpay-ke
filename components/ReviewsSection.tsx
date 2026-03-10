"use client";

export default function ReviewsSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left text column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Businesses love CapitalPay
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            From fast onboarding to instant payouts, UK businesses trust CapitalPay
            for secure, simple, contactless payments.
          </p>
        </div>

        {/* Review 1 */}
        <div className="bg-[#1E1A2B] text-white p-8 rounded-2xl shadow-lg">
          <div className="flex gap-1 mb-4">
            {"★★★★★".split("").map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-lg">&quot;Super smooth and easy to use. Payments go through instantly.&quot;</p>
          <p className="mt-6 text-sm text-gray-300">Rosa – 10th June 2025</p>
        </div>

        {/* Review 2 */}
        <div className="bg-[#A78BFA] text-gray-900 p-8 rounded-2xl shadow-lg">
          <div className="flex gap-1 mb-4 text-gray-900">
            {"★★★★★".split("").map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-lg">&quot;Great for my small business. No terminals, no hassle.&quot;</p>
          <p className="mt-6 text-sm text-gray-700">JC – 6th June 2025</p>
        </div>
      </div>
    </section>
  );
}





