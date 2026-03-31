"use client";

import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { subscribeToWaitlist } from "@/lib/api";

export function FinalCTA() {
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
            Join the waitlist and be the first to know when Meeple launches.<br />
            3 free scans included for early supporters.
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-slide-up delay-200">
            {status === "success" ? (
              <div className="bg-brutalist-green text-black p-4 border-3 border-white font-bold">
                You&apos;re on the list! We&apos;ll notify you at launch.
              </div>
            ) : (
              <>
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
                {status === "error" && errorMessage && (
                  <p className="text-red-400 font-bold text-sm mt-2">
                    {errorMessage}{" "}
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="underline hover:text-red-300"
                    >
                      Try Again
                    </button>
                  </p>
                )}
              </>
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
