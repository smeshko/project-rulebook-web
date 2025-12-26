"use client";

import { Card, Badge, SectionHeader } from "@/components/ui";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter",
    credits: 1,
    price: "$0.99",
    perScan: "$0.99",
    color: "bg-white",
    badge: null,
  },
  {
    name: "Popular",
    credits: 3,
    price: "$2.49",
    perScan: "$0.83",
    color: "bg-brutalist-green",
    badge: "Most Popular",
    featured: true,
  },
  {
    name: "Best Value",
    credits: 10,
    price: "$6.99",
    perScan: "$0.70",
    color: "bg-brutalist-blue",
    badge: "Save 30%",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface-secondary">
      <div className="container-landing">
        <SectionHeader
          title="Simple Pricing"
          subtitle="Pay per scan. No subscriptions. Credits never expire."
        />

        {/* Free Tier Callout */}
        <div className="bg-brutalist-orange border-3 border-black shadow-brutalist-sm p-4 md:p-6 mb-10 max-w-md mx-auto text-center">
          <p className="font-black text-lg uppercase">
            Start with 3 Free Scans
          </p>
          <p className="text-sm mt-1">No credit card required</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative animate-slide-up ${tier.featured ? "md:-mt-2 md:mb-2" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card
                className={`p-5 ${tier.color} h-full flex flex-col`}
                hover={false}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant={tier.featured ? "green" : "blue"}>
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div className="text-center pt-2">
                  <h3 className="font-black text-sm uppercase tracking-wider mb-3">
                    {tier.name}
                  </h3>

                  <div className="font-black text-3xl mb-1">{tier.credits}</div>
                  <div className="text-content-secondary text-xs uppercase tracking-wider mb-3">
                    {tier.credits === 1 ? "Credit" : "Credits"}
                  </div>

                  <div className="font-black text-2xl">{tier.price}</div>
                  <div className="text-content-secondary text-xs">
                    {tier.perScan}/scan
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-content-secondary text-sm">
          Credits available at launch.{" "}
          <Link href="/pricing" className="text-brutalist-orange underline hover:text-brutalist-pink">
            View full pricing details →
          </Link>
        </p>
      </div>
    </section>
  );
}
