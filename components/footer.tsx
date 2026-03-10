import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  solutions: {
    title: "Solutions",
    links: [
      { name: "Services", href: "/services" },
      { name: "Insights", href: "/insights" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-6 lg:mb-0">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo/capitalpay-full.png"
                alt="CapitalPay"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xs">
              Payment and compliance infrastructure for Kenya&apos;s trade and logistics sector.
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-sm">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white/70 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} CapitalPay Kenya. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-white/30 text-sm hover:text-white/50 transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-white/30 text-sm hover:text-white/50 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
