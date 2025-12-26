"use client";

import { SectionHeader, PhoneMockup } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "Scan",
    description: "Open Rulebook. Point at your game box. Tap capture.",
    screenshot: "/screenshots/camera.png",
    color: "text-brutalist-orange",
  },
  {
    number: "02",
    title: "Learn",
    description: "AI identifies your game and generates progressive rules—overview, setup, first round, advanced.",
    screenshot: "/screenshots/generating.png",
    color: "text-brutalist-blue",
  },
  {
    number: "03",
    title: "Play",
    description: "Read the overview. Follow the setup checklist. You're playing in under 60 seconds.",
    screenshot: "/screenshots/rules.png",
    color: "text-brutalist-green",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface-secondary">
      <div className="container-landing">
        <SectionHeader
          title="Three Taps to Playing"
          subtitle="No signup. No tutorials. Just scan and play."
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step Number */}
              <span className={`font-black text-6xl md:text-7xl ${step.color} mb-4`}>
                {step.number}
              </span>

              {/* Phone Preview */}
              <div className="mb-6 transform scale-75 md:scale-90">
                <PhoneMockup screenshot={step.screenshot} alt={`Step ${step.number}: ${step.title}`} />
              </div>

              {/* Content */}
              <h3 className="font-black text-2xl uppercase tracking-wide mb-3">{step.title}</h3>
              <p className="text-content-secondary text-base leading-relaxed max-w-xs">
                {step.description}
              </p>

              {/* Arrow (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <svg className="w-8 h-8 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
