"use client";

import { useState } from "react";
import { Button, Input, PhoneMockup } from "@/components/ui";
import { subscribeToWaitlist } from "@/lib/api";

export function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setErrorMessage(null);
    setStatus("loading");

    const result = await subscribeToWaitlist(email);

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      setErrorMessage(result.error.message);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 stripe-pattern opacity-50" />

      <div className="container-landing relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.9] mb-6 animate-slide-up">
              From Box to Playing in{" "}
              <span className="text-brutalist-orange">60 Seconds</span>
            </h1>

            <p className="text-lg md:text-xl text-content-secondary mb-8 max-w-xl animate-slide-up delay-100">
              Take a photo of any board game box. Get instant, digestible rules.
              Start playing immediately—no more 30-minute rulebook sessions.
            </p>

            {/* Waitlist Form */}
            <div className="animate-slide-up delay-200">
              {status === "success" ? (
                <div className="bg-brutalist-green text-black p-4 border-3 border-black shadow-brutalist-sm font-bold max-w-md">
                  You&apos;re on the list! We&apos;ll notify you at launch.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="whitespace-nowrap"
                    >
                      {status === "loading" ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </div>
                  {status === "error" && errorMessage && (
                    <p className="text-red-600 font-bold text-sm mt-2">
                      {errorMessage}{" "}
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="underline hover:text-red-800"
                      >
                        Try Again
                      </button>
                    </p>
                  )}
                  <p className="text-content-tertiary text-sm mt-3">
                    Be first to know when we launch. No spam.
                  </p>
                </form>
              )}
            </div>

            {/* See how it works link */}
            <div className="mt-6 animate-slide-up delay-300">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 font-bold text-brutalist-orange hover:text-brutalist-pink transition-colors"
              >
                See How It Works
                <svg className="w-5 h-5 animate-bounce-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* Social proof mini */}
            <div className="mt-8 pt-8 border-t-3 border-black/10 animate-fade-in delay-400">
              <p className="text-sm text-content-secondary">
                <span className="font-bold text-brutalist-green">3 free scans</span> included at launch • No account required
              </p>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <PhoneMockup screenshot="/screenshots/rules-display.png" alt="Meeple app showing game rules" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
    </section>
  );
}
