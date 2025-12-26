"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full px-4 py-3",
          "bg-white border-3 border-black",
          "text-base placeholder:text-content-tertiary",
          "focus:outline-none focus:ring-0 focus:border-brutalist-orange",
          "transition-colors duration-150",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
