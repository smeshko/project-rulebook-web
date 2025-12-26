"use client";

import { SectionHeader, Card } from "@/components/ui";

const painPoints = [
  {
    quote: "I have 47 games. 12 are still in shrink wrap because nobody wants to read another 20-page rulebook.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    persona: "The Collector",
  },
  {
    quote: "Game night starts at 7. By 7:45 we're still arguing about setup. By 8:30 someone suggests just playing cards.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    persona: "The Host",
  },
  {
    quote: "Getting handed the rulebook while everyone waits is the worst feeling. I just want to play, not become the expert.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    persona: "The Guest",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface-secondary">
      <div className="container-landing">
        <SectionHeader
          title="Sound Familiar?"
          subtitle="These are the moments Rulebook was built to fix."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((item, index) => (
            <Card
              key={item.persona}
              className="p-8 bg-white animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center border-3 border-black bg-surface-tertiary mb-4">
                {item.icon}
              </div>

              <blockquote className="text-lg mb-6 leading-relaxed italic text-content-secondary">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="border-t-3 border-black/10 pt-4">
                <p className="font-black uppercase tracking-wider text-sm">{item.persona}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
