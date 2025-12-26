"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "orange" | "blue" | "green" | "purple" | "pink" | "yellow";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "orange", children, ...props }, ref) => {
    const variants = {
      orange: "bg-brutalist-orange",
      blue: "bg-brutalist-blue",
      green: "bg-brutalist-green",
      purple: "bg-brutalist-purple text-white",
      pink: "bg-brutalist-pink",
      yellow: "bg-brutalist-yellow",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1",
          "font-bold text-xs uppercase tracking-wider",
          "border-2 border-black",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
