"use client";

import { Clock, CheckCircle, Sparkles } from "lucide-react";

const notifications = [
  {
    icon: Clock,
    title: "Your payout is scheduled for tomorrow",
    time: "2 hours ago",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: CheckCircle,
    title: "Your ID verification is complete",
    time: "Yesterday",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Sparkles,
    title: "New feature: Payment Links now live",
    time: "2 days ago",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
];

export default function Notifications() {
  return (
    <div className="bg-[#0a0a14]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Notifications</h3>
        <span className="px-2 py-0.5 rounded-full bg-[#E94258]/20 text-[#E94258] text-xs font-medium">
          3 new
        </span>
      </div>
      
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer"
          >
            <div className={`w-10 h-10 rounded-xl ${notification.bgColor} flex items-center justify-center flex-shrink-0`}>
              <notification.icon className={`w-5 h-5 ${notification.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium leading-tight">
                {notification.title}
              </p>
              <p className="text-white/40 text-xs mt-1">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 rounded-xl bg-white/5 text-white/50 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-200">
        View All Notifications
      </button>
    </div>
  );
}





