"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "relative inline-flex items-center justify-center gap-2",
      "font-black uppercase tracking-wider",
      "border-3 border-black",
      "transition-all duration-150 ease-out",
      "disabled:opacity-50 disabled:cursor-not-allowed"
    );

    const variants = {
      primary: cn(
        "bg-brutalist-pink text-black",
        "shadow-brutalist-sm",
        "hover:shadow-brutalist-md hover:-translate-x-0.5 hover:-translate-y-0.5",
        "active:shadow-none active:translate-x-1 active:translate-y-1"
      ),
      secondary: cn(
        "bg-white text-black",
        "hover:bg-surface-tertiary"
      ),
      ghost: cn(
        "border-0 bg-transparent text-brutalist-orange underline underline-offset-4",
        "hover:text-brutalist-pink"
      ),
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
