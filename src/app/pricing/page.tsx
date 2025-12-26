import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Card, Badge, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing | Rulebook",
  description: "Simple, transparent pricing for Rulebook. Pay per scan, no subscriptions. Credits never expire.",
};

const pricingTiers = [
  {
    name: "Starter",
    credits: 1,
    price: "$0.99",
    perScan: "$0.99",
    description: "Try a single scan",
    color: "bg-white",
    shadow: "shadow-brutalist-md",
    badge: null,
  },
  {
    name: "Popular",
    credits: 3,
    price: "$2.49",
    perScan: "$0.83",
    description: "Perfect for game night",
    color: "bg-brutalist-green",
    shadow: "shadow-brutalist-lg",
    badge: "Most Popular",
    featured: true,
  },
  {
    name: "Best Value",
    credits: 10,
    price: "$6.99",
    perScan: "$0.70",
    description: "For collectors",
    color: "bg-brutalist-blue",
    shadow: "shadow-brutalist-lg",
    badge: "Save 30%",
  },
];

const features = [
  {
    title: "Credits Never Expire",
    description: "Use them whenever you want. No pressure, no deadlines.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "No Subscriptions",
    description: "Pay only for what you use. No recurring charges ever.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  {
    title: "Offline Access Included",
    description: "Scanned games are saved forever. Access without internet.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
      </svg>
    ),
  },
  {
    title: "Instant Results",
    description: "AI-powered recognition in under 60 seconds.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "What's included in the free trial?",
    a: "Every new user gets 3 free scans when they complete onboarding. No credit card required.",
  },
  {
    q: "What counts as one scan?",
    a: "One credit = one successful game identification. If the scan fails or you cancel, no credit is used.",
  },
  {
    q: "Can I get a refund?",
    a: "Credits are non-refundable once purchased. That's why we give you 3 free scans to try first.",
  },
  {
    q: "Do credits transfer between devices?",
    a: "Credits are tied to your App Store or Google Play account. Restore purchases to access them on a new device.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface-secondary pt-24 md:pt-28">
        {/* Hero */}
        <div className="container-landing py-12 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-black text-4xl md:text-5xl uppercase mb-4">
              Simple, Honest Pricing
            </h1>
            <p className="text-xl text-content-secondary">
              Pay per scan. No subscriptions. No hidden fees.<br />
              Credits never expire.
            </p>
          </div>

          {/* Free Tier Highlight */}
          <div className="bg-brutalist-orange border-3 border-black shadow-brutalist-md p-6 md:p-8 mb-12 max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <span className="font-black text-2xl uppercase">Start Free</span>
            </div>
            <p className="text-lg">
              <strong>3 free scans</strong> included when you sign up. No credit card required.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative ${tier.featured ? "md:-mt-4 md:mb-4" : ""}`}
              >
                <Card
                  className={`p-6 ${tier.color} ${tier.shadow} h-full flex flex-col`}
                  hover={false}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant={tier.featured ? "green" : "blue"}>
                        {tier.badge}
                      </Badge>
                    </div>
                  )}

                  <div className="text-center mb-6 pt-2">
                    <h3 className="font-black text-lg uppercase tracking-wider mb-1">
                      {tier.name}
                    </h3>
                    <p className="text-content-secondary text-sm">{tier.description}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="font-black text-4xl mb-1">{tier.credits}</div>
                    <div className="text-content-secondary text-sm uppercase tracking-wider">
                      {tier.credits === 1 ? "Credit" : "Credits"}
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="font-black text-3xl">{tier.price}</div>
                    <div className="text-content-secondary text-sm">
                      {tier.perScan} per scan
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="w-full py-3 bg-black/10 border-3 border-black/20 text-center font-bold uppercase tracking-wider text-sm">
                      Available at Launch
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div className="max-w-4xl mx-auto mb-20">
            <SectionHeader
              title="What's Included"
              subtitle="Every scan comes with these features. No upsells."
            />

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-6 bg-white border-3 border-black shadow-brutalist-sm"
                >
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center border-3 border-black bg-surface-tertiary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-content-secondary text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto mb-20">
            <SectionHeader
              title="Questions?"
              subtitle="Everything you need to know about pricing."
            />

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-3 border-black shadow-brutalist-sm p-6"
                >
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-content-secondary">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-black text-2xl uppercase mb-4">
              Ready to simplify game night?
            </h2>
            <p className="text-content-secondary mb-6">
              Join the waitlist and get notified when Rulebook launches.
            </p>
            <a
              href="/#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brutalist-pink text-black font-black uppercase tracking-wider border-3 border-black shadow-brutalist-sm hover:shadow-brutalist-md hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
