"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Transactions", href: "/dashboard/transactions" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a14] border-b border-white/5">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-[#892B87] via-[#E94258] to-[#F27224]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Links to Home */}
          <Link href="/" className="flex items-center ml-2">
            <Image
              src="/logo/capitalpay-full.png"
              alt="CapitalPay"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Tabs */}
          <div className="flex items-center gap-1">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === tab.href
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Notifications & Profile */}
          <div className="flex items-center gap-4">
            {/* Notifications Link */}
            <Link 
              href="/dashboard/notifications"
              className={`relative p-2 transition-colors rounded-lg ${
                pathname === "/dashboard/notifications" 
                  ? "bg-white/10 text-white" 
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E94258]" />
            </Link>
            
            {/* Profile Link */}
            <Link
              href="/dashboard/profile"
              className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm cursor-pointer transition-all ${
                pathname === "/dashboard/profile" ? "ring-2 ring-white/30" : ""
              }`}
              style={{
                background: "linear-gradient(135deg, #892B87 0%, #E94258 50%, #F27224 100%)",
              }}
            >
              JD
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
