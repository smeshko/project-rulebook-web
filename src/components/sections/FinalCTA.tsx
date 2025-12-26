"use client";

import { useState } from "react";
import { Button, Input } from "@/components/ui";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            white,
            white 2px,
            transparent 2px,
            transparent 20px
          )`
        }} />
      </div>

      <div className="container-landing relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-6 animate-slide-up">
            Ready for Better{" "}
            <span className="text-brutalist-orange">Game Nights?</span>
          </h2>

          <p className="text-xl text-white/70 mb-10 animate-slide-up delay-100">
            Join the waitlist and be the first to know when Rulebook launches.<br />
            3 free scans included for early supporters.
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-slide-up delay-200">
            {status === "success" ? (
              <div className="bg-brutalist-green text-black p-4 border-3 border-white font-bold">
                You&apos;re on the list! We&apos;ll notify you at launch.
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white text-black"
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-brutalist-orange border-white whitespace-nowrap"
                >
                  {status === "loading" ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
            )}

            <p className="text-white/40 text-sm mt-4">
              No spam. Unsubscribe anytime.{" "}
              <a href="/privacy" className="underline hover:text-white/60">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
