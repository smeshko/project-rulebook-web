"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, subtitle, align = "center", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-12 md:mb-16",
          align === "center" && "text-center",
          className
        )}
        {...props}
      >
        <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-content-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export { SectionHeader };
