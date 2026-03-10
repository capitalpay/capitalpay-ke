// "use client";
//
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Link from "next/link";
//
// const pricingPlans = [
//   {
//     name: "CapitalPay Standard",
//     price: "£0",
//     period: "/month",
//     description: "Perfect for getting started",
//     features: [
//       "Tap to Pay on phone",
//       "1.9% + £0.10 per transaction",
//       "Next-day payouts",
//       "Basic analytics",
//       "Email support",
//     ],
//     cta: "Get in Touch",
//     highlighted: false,
//   },
//   {
//     name: "CapitalPay Member",
//     price: "£20",
//     period: "/month",
//     description: "For growing businesses",
//     features: [
//       "Everything in Standard",
//       "1.4% + £0.05 per transaction",
//       "Up to 0.4% cashback",
//       "Same-day payouts",
//       "Advanced analytics",
//       "Priority support",
//       "No contract required",
//     ],
//     cta: "Start Free Trial",
//     highlighted: true,
//   },
// ];
//
// export default function PricingSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const cardsRef = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//
//     gsap.fromTo(
//       cardsRef.current?.children || [],
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.7,
//         stagger: 0.15,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 65%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);
//
//   return (
//     <section ref={sectionRef} className="bg-gray-50 py-24 md:py-32">
//       <div className="max-w-6xl mx-auto px-6 lg:px-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
//             Simple Pricing
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
//             Choose your plan
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             Transparent pricing with no hidden fees. Start free or upgrade for
//             lower rates and cashback rewards.
//           </p>
//         </div>
//
//         {/* Pricing Cards */}
//         <div
//           ref={cardsRef}
//           className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
//         >
//           {pricingPlans.map((plan) => (
//             <div
//               key={plan.name}
//               className={`relative rounded-3xl p-8 ${
//                 plan.highlighted
//                   ? "bg-white shadow-2xl ring-2"
//                   : "bg-white shadow-lg"
//               }`}
//               style={{
//                 ringColor: plan.highlighted
//                   ? "rgba(233, 66, 88, 0.3)"
//                   : undefined,
//               }}
//             >
//               {plan.highlighted && (
//                 <div
//                   className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-semibold"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
//                   }}
//                 >
//                   Most Popular
//                 </div>
//               )}
//
//               {/* Plan Header */}
//               <div className="mb-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div
//                     className="w-10 h-10 rounded-xl flex items-center justify-center"
//                     style={{
//                       background: plan.highlighted
//                         ? "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)"
//                         : "#f3f4f6",
//                     }}
//                   >
//                     <span
//                       className={`font-bold ${
//                         plan.highlighted ? "text-white" : "text-gray-600"
//                       }`}
//                     >
//                       C
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {plan.name}
//                   </h3>
//                 </div>
//                 <p className="text-gray-500 text-sm">{plan.description}</p>
//               </div>
//
//               {/* Price */}
//               <div className="mb-6">
//                 <span className="text-5xl font-bold text-gray-900">
//                   {plan.price}
//                 </span>
//                 <span className="text-gray-500">{plan.period}</span>
//               </div>
//
//               {/* Features */}
//               <ul className="space-y-3 mb-8">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <svg
//                       className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
//                         plan.highlighted ? "text-emerald-500" : "text-gray-400"
//                       }`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span className="text-gray-600 text-sm">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//
//               {/* CTA */}
//               <Link
//                 href="/auth/login"
//                 className={`block w-full text-center rounded-full py-4 font-semibold transition-all duration-300 ${
//                   plan.highlighted
//                     ? "text-white hover:brightness-110"
//                     : "bg-gray-900 text-white hover:bg-gray-800"
//                 }`}
//                 style={
//                   plan.highlighted
//                     ? {
//                         background:
//                           "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
//                       }
//                     : undefined
//                 }
//               >
//                 {plan.cta}
//               </Link>
//             </div>
//           ))}
//         </div>
//
//         {/* Bottom Note */}
//         <p className="text-center text-gray-500 text-sm mt-12">
//           All plans include PCI-DSS compliance, fraud protection, and 24/7
//           monitoring.
//         </p>
//       </div>
//     </section>
//   );
// }
//
//
//
//
//


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const pricingPlans = [
  {
    name: "CapitalPay Standard",
    price: "£0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Tap to Pay on phone",
      "1.9% + £0.10 per transaction",
      "Next-day payouts",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get in Touch",
    highlighted: false,
  },
  {
    name: "CapitalPay Member",
    price: "£20",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Everything in Standard",
      "1.4% + £0.05 per transaction",
      "Up to 0.4% cashback",
      "Same-day payouts",
      "Advanced analytics",
      "Priority support",
      "No contract required",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardsRef.current?.children || [],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
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
    <section ref={sectionRef} className="bg-gray-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Simple Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Choose your plan
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Start free or upgrade for
            lower rates and cashback rewards.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-white shadow-2xl ring-2 ring-[rgba(233,66,88,0.3)]"
                  : "bg-white shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: plan.highlighted
                        ? "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)"
                        : "#f3f4f6",
                    }}
                  >
                    <span
                      className={`font-bold ${
                        plan.highlighted ? "text-white" : "text-gray-600"
                      }`}
                    >
                      C
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-emerald-500" : "text-gray-400"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/auth/login"
                className={`block w-full text-center rounded-full py-4 font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "text-white hover:brightness-110"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
                style={
                  plan.highlighted
                    ? {
                        background:
                          "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
                      }
                    : undefined
                }
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-500 text-sm mt-12">
          All plans include PCI-DSS compliance, fraud protection, and 24/7
          monitoring.
        </p>
      </div>
    </section>
  );
}