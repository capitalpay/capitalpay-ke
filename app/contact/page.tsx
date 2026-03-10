"use client";

import { useState, FormEvent } from "react";
import { Mail, Clock, MapPin, ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl p-6 transition-all hover:bg-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-xl font-semibold text-white">{question}</span>
        <ChevronDown
          className={`transition-transform duration-300 flex-shrink-0 ml-4 ${
            open ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[300px] mt-4" : "max-h-0"
        }`}
      >
        <div className="text-gray-300 text-lg leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      className="relative min-h-screen py-24 px-6 text-white bg-[#060B18]"
      style={{
        background: `radial-gradient(circle at center, rgba(196,72,190,0.28) 0%, rgba(233,66,88,0.22) 22%, rgba(242,114,36,0.18) 36%, rgba(0,12,28,1) 100%)`,
        backgroundColor: '#060B18'
      }}
    >
      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#892B87]/20 via-[#E94258]/10 to-[#F27224]/10 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in touch with our Kenya team
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you&apos;re an industry association, a government institution, or a partner looking to work with us in Kenya — we&apos;re here.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

            {/* Email */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white/70" />
              </div>
              <div>
                <h3 className="text-gray-300 font-medium mb-2">Email</h3>
                <p className="text-gray-400">
                  <a
                    href="mailto:info@capitalpay.africa"
                    className="text-[#E94258] hover:underline"
                  >
                    info@capitalpay.africa
                  </a>
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-white/10 my-8" />

            {/* Office Hours */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white/70" />
              </div>
              <div>
                <h3 className="text-gray-300 font-medium mb-2">Office Hours</h3>
                <p className="text-gray-400">Monday – Friday: 08:00am – 5:00pm EAT</p>
              </div>
            </div>

            <div className="h-px w-full bg-white/10 my-8" />

            {/* Kenya Office Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white/70" />
              </div>
              <div>
                <h3 className="text-gray-300 font-medium mb-2">Kenya Office Address</h3>
                <p className="text-gray-400">
                  Bay Court, Watermark Business Park<br />
                  Ndege Road — Karen<br /><br />
                  P.O Box 27717 — 00100
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-white/10">
            {submitted ? (
              <div className="flex items-center justify-center min-h-[400px]">
                <p
                  className="text-xl md:text-2xl font-semibold text-center leading-relaxed"
                  style={{
                    background: "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Your message has been submitted. A member of our team will be in touch shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-300 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-[#E94258] focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-[#E94258] focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 focus:ring-2 focus:ring-[#E94258] focus:outline-none transition"
                    >
                      <option value="">Select an option</option>
                      <option value="Clearing & Forwarding Enquiry">Clearing & Forwarding Enquiry</option>
                      <option value="Government & Regulatory">Government & Regulatory</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us more..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-[#E94258] focus:outline-none transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#892B87] via-[#E94258] to-[#F27224] text-white font-medium shadow-lg transition hover:opacity-90"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <FAQItem
              question="What does CapitalPay Kenya do?"
              answer="CapitalPay Kenya builds digital payment and compliance infrastructure for the clearing and forwarding, trade, and logistics sectors. We standardise agency fees, automate reconciliation, and deliver real-time settlement to licensed clearing agents across the country."
            />

            <FAQItem
              question="Who is eligible to use the platform?"
              answer="The platform is designed for licensed clearing and forwarding agents, trade associations, and logistics operators across Kenya's ports, borders, and inland container depots."
            />

            <FAQItem
              question="Who are your partners in Kenya?"
              answer="We work with industry bodies including KIFWA (Kenya International Freight & Warehousing Association), government institutions such as KRA, and trade operators across Kenya's logistics corridor."
            />

            <FAQItem
              question="How does the platform integrate with government systems?"
              answer="The platform connects directly with KRA, Kenya Ports Authority, and KenTrade via secure APIs — enabling real-time credential validation, compliance checks, and transaction reporting."
            />

            <FAQItem
              question="How long does onboarding take?"
              answer="Onboarding is rolled out in phases. Licensed agents and associations are contacted directly as deployment reaches their region."
            />

            <FAQItem
              question="What payment methods are supported?"
              answer="The platform supports bank transfers and mobile money — ensuring accessibility for all clearing agents regardless of their banking arrangements."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
