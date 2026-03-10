"use client";

export default function CashbackWidget() {
  const percentage = 68; // Demo progress
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative rounded-3xl overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-violet-600/20" />
      
      <div className="relative bg-[#1a1625]/90 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/50 text-sm font-medium mb-1">Cashback earned this week</p>
            <h3 className="text-3xl font-bold text-white">£24.80</h3>
            <p className="text-purple-400 text-sm mt-2">+12% from last week</p>
          </div>
          
          {/* Progress Ring */}
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="48"
                cy="48"
                r="45"
                stroke="rgba(139, 92, 246, 0.2)"
                strokeWidth="6"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="48"
                cy="48"
                r="45"
                stroke="url(#gradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#892B87" />
                  <stop offset="50%" stopColor="#E94258" />
                  <stop offset="100%" stopColor="#F27224" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold">{percentage}%</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/50">Monthly target</span>
            <span className="text-white font-medium">£36.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}





