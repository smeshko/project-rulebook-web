"use client";

import Link from "next/link";

const footerLinks = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Support", href: "/support" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-secondary border-t-4 border-black">
      <div className="container-landing py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brutalist-orange border-3 border-black shadow-brutalist-sm flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
                </svg>
              </div>
              <span className="font-black text-xl uppercase tracking-tight">Meeple</span>
            </Link>
            <p className="text-content-secondary text-sm">
              Learn any board game in 60 seconds. AI-powered rules, instant setup.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-content-secondary text-sm hover:text-brutalist-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-content-secondary text-sm hover:text-brutalist-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-3 border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-content-secondary text-sm">
            © {new Date().getFullYear()} Meeple. All rights reserved.
          </p>
          <p className="text-content-tertiary text-sm">
            Coming soon to iOS and Android
          </p>
        </div>
      </div>
    </footer>
  );
}
