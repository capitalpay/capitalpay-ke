"use client";

import { ShoppingBag, Coffee, Utensils, Smartphone, Fuel, Music } from "lucide-react";

const transactions = [
  {
    icon: ShoppingBag,
    title: "Amazon UK",
    date: "Today, 2:34 PM",
    amount: -89.99,
    color: "text-orange-400",
  },
  {
    icon: Coffee,
    title: "Starbucks",
    date: "Today, 9:15 AM",
    amount: -4.75,
    color: "text-emerald-400",
  },
  {
    icon: Utensils,
    title: "Restaurant Payment",
    date: "Yesterday, 7:30 PM",
    amount: +156.00,
    color: "text-rose-400",
  },
  {
    icon: Smartphone,
    title: "App Store",
    date: "Yesterday, 3:12 PM",
    amount: -9.99,
    color: "text-blue-400",
  },
  {
    icon: Fuel,
    title: "Shell Station",
    date: "Dec 7, 11:45 AM",
    amount: -65.30,
    color: "text-yellow-400",
  },
  {
    icon: Music,
    title: "Customer Payment",
    date: "Dec 7, 10:00 AM",
    amount: +420.00,
    color: "text-purple-400",
  },
];

export default function TransactionsList() {
  return (
    <div className="bg-[#0a0a14]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
        <button className="text-sm text-white/50 hover:text-white transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-2">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center ${tx.color}`}>
                <tx.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-medium">{tx.title}</p>
                <p className="text-white/40 text-sm">{tx.date}</p>
              </div>
            </div>
            
            <span className={`font-semibold ${tx.amount > 0 ? "text-emerald-400" : "text-white"}`}>
              {tx.amount > 0 ? "+" : ""}£{Math.abs(tx.amount).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}





