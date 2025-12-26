"use client";

import { SectionHeader, Card } from "@/components/ui";

const usps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Photo-to-Rules Pipeline",
    description: "Other apps assume you already know your game. Rulebook is the only solution covering the complete journey—from \"what is this?\" to \"let's play.\"",
    color: "shadow-brutalist-orange",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Multi-Model AI Resilience",
    description: "Our fallback chain ensures recognition even for obscure, damaged, or international game boxes. Low confidence? Enter the name manually.",
    color: "shadow-brutalist-blue",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    title: "Progressive Disclosure",
    description: "Rules structured the way you actually learn: Setup → First Round → Deep Dive. Not a wall of text—a guided journey.",
    color: "shadow-brutalist-yellow",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No Subscription Trap",
    description: "Buy credits when you need them. They never expire. No recurring charges, no pressure, no hidden fees.",
    color: "shadow-brutalist-green",
  },
];

export function USP() {
  return (
    <section className="py-20 md:py-28 bg-white border-y-4 border-black">
      <div className="container-landing">
        <SectionHeader
          title="What Makes Rulebook Different"
          subtitle="Built by board game lovers who were tired of the same problems."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {usps.map((usp, index) => (
            <Card
              key={usp.title}
              className={`p-8 ${usp.color} animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 flex items-center justify-center border-3 border-black bg-surface-tertiary">
                  {usp.icon}
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase tracking-wide mb-2">{usp.title}</h3>
                  <p className="text-content-secondary text-base leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
