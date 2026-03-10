"use client";

import { Link2, Banknote, Headphones } from "lucide-react";

const actions = [
  {
    icon: Link2,
    title: "Generate Payment Link",
    description: "Create a shareable payment link",
  },
  {
    icon: Banknote,
    title: "Request Payout",
    description: "Transfer funds to your bank",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Get help from our team",
  },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className="relative group p-6 rounded-2xl bg-[#0a0a14]/80 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 text-left overflow-hidden"
        >
          {/* Glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-[#E94258]/20 to-transparent blur-2xl" />
          </div>
          
          <div className="relative">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: "linear-gradient(135deg, rgba(137, 43, 135, 0.2) 0%, rgba(233, 66, 88, 0.2) 50%, rgba(242, 114, 36, 0.2) 100%)",
              }}
            >
              <action.icon className="w-5 h-5 text-[#E94258]" />
            </div>
            
            <h4 className="text-white font-medium mb-1">{action.title}</h4>
            <p className="text-white/40 text-sm">{action.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}





