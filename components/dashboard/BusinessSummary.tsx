"use client";

const stats = [
  { label: "Today", value: "£1,240.50", change: "+18%" },
  { label: "This Week", value: "£8,456.20", change: "+12%" },
  { label: "This Month", value: "£32,890.00", change: "+24%" },
];

export default function BusinessSummary() {
  return (
    <div className="bg-[#0a0a14]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Business Summary</h3>
      
      {/* Mini Chart Placeholder */}
      <div className="relative h-32 mb-6 rounded-2xl bg-white/5 overflow-hidden">
        {/* Fake chart line */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(233, 66, 88, 0.3)" />
              <stop offset="100%" stopColor="rgba(233, 66, 88, 0)" />
            </linearGradient>
          </defs>
          {/* Area fill */}
          <path
            d="M0,100 L0,70 Q20,60 40,65 T80,55 T120,45 T160,50 T200,35 T240,40 T280,25 T320,30 L320,100 Z"
            fill="url(#chartGradient)"
          />
          {/* Line */}
          <path
            d="M0,70 Q20,60 40,65 T80,55 T120,45 T160,50 T200,35 T240,40 T280,25 T320,30"
            fill="none"
            stroke="#E94258"
            strokeWidth="2"
          />
        </svg>
        
        {/* Labels */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[10px] text-white/30">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
      
      {/* Stats */}
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-white/50 text-sm">{stat.label}</span>
            <div className="flex items-center gap-3">
              <span className="text-white font-semibold">{stat.value}</span>
              <span className="text-emerald-400 text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/10">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





