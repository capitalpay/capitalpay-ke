"use client";

import { ArrowUpRight, ArrowDownLeft, CreditCard, Percent } from "lucide-react";

const actions = [
  { icon: ArrowUpRight, label: "Send" },
  { icon: ArrowDownLeft, label: "Receive" },
  { icon: CreditCard, label: "Cards" },
  { icon: Percent, label: "Cashback" },
];

export default function BalanceCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(137, 43, 135, 0.3) 0%, rgba(233, 66, 88, 0.3) 50%, rgba(242, 114, 36, 0.3) 100%)",
        }}
      />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] blur-[80px] opacity-50 bg-gradient-to-r from-[#892B87] via-[#E94258] to-[#F27224]" />
      
      {/* Content */}
      <div className="relative bg-[#0a0a14]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-white/50 text-sm font-medium mb-2">Available Balance</p>
            <h2 className="text-5xl font-bold text-white tracking-tight">£12,458.32</h2>
            <div className="flex items-center gap-2 mt-3">
              <span className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
                +£845.20
              </span>
              <span className="text-white/40 text-sm">this month</span>
            </div>
          </div>
          
          <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
            Active
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="grid grid-cols-4 gap-3">
          {actions.map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white/70 text-xs font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}





