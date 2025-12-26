"use client";

import { FeatureCard, SectionHeader } from "@/components/ui";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Instant Recognition",
    description: "Point your camera at any game box. Our AI identifies it in seconds—even obscure titles and international editions.",
    color: "bg-brutalist-orange",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
    title: "Progressive Rules",
    description: "Rules delivered in layers you actually need: Overview first, then Setup, First Round, and Advanced. Learn as you play.",
    color: "bg-brutalist-blue",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "60-Second Setup",
    description: "From \"what is this game?\" to \"let's play\" faster than you can find the rulebook in the box.",
    color: "bg-brutalist-yellow",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
      </svg>
    ),
    title: "Offline Library",
    description: "Every game you scan is saved forever. Access your rules anywhere—no wifi required.",
    color: "bg-brutalist-purple",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Interactive Checklist",
    description: "Track each setup step with checkboxes. Never miss a component again.",
    color: "bg-brutalist-green",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Quick Reference",
    description: "Forgot a rule? Find answers in seconds without pausing the game.",
    color: "bg-brutalist-pink",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white border-y-4 border-black">
      <div className="container-landing">
        <SectionHeader
          title="Why Rulebook?"
          subtitle="Everything you need to start playing any board game in under a minute."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-slide-up h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                accentColor={feature.color}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
