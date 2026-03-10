import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { AnalyticsProvider } from "@/components/analytics-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CapitalPay Kenya - Digital Payment Infrastructure",
  description:
    "Digital payment, compliance, and settlement infrastructure for Kenya's trade, logistics, and clearing & forwarding sectors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-screen bg-[#060B18] text-white antialiased">
        <AnalyticsProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
