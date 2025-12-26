"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PhoneMockupProps extends HTMLAttributes<HTMLDivElement> {
  screenshot?: string;
  alt?: string;
}

const PhoneMockup = forwardRef<HTMLDivElement, PhoneMockupProps>(
  ({ screenshot, alt = "App screenshot", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-black border-4 border-black rounded-[40px] overflow-hidden",
          "shadow-brutalist-orange",
          "w-[280px] md:w-[320px]",
          className
        )}
        style={{ aspectRatio: "9 / 19.5" }}
        {...props}
      >
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

        {/* Screen */}
        <div className="absolute inset-2 bg-[#1C1C1E] rounded-[32px] overflow-hidden">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={alt}
              fill
              className="object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white/30 text-center p-4">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-sm uppercase tracking-wider">App Preview</span>
              </div>
            </div>
          )}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
      </div>
    );
  }
);

PhoneMockup.displayName = "PhoneMockup";

export { PhoneMockup };
