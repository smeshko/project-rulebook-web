"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "feature" | "persona" | "screenshot";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const baseStyles = "relative bg-white border-3 border-black";

    const variants = {
      default: cn(
        "shadow-brutalist-md p-6",
        hover && "transition-all duration-200 ease-out hover:shadow-brutalist-lg hover:-translate-x-0.5 hover:-translate-y-0.5"
      ),
      feature: cn(
        "shadow-brutalist-md p-6",
        hover && "transition-all duration-200 ease-out hover:shadow-brutalist-lg hover:-translate-x-0.5 hover:-translate-y-0.5"
      ),
      persona: cn(
        "shadow-brutalist-lg p-8 bg-surface-secondary"
      ),
      screenshot: cn(
        "shadow-brutalist-orange p-0 overflow-hidden bg-surface-primary-dark"
      ),
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Feature Card component
interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor?: string;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description, accentColor = "bg-brutalist-orange", className, ...props }, ref) => {
    return (
      <Card ref={ref} variant="feature" className={cn("flex flex-col", className)} {...props}>
        <div className={cn("w-12 h-12 flex items-center justify-center border-3 border-black shadow-brutalist-sm mb-4", accentColor)}>
          {icon}
        </div>
        <h3 className="font-black text-lg uppercase tracking-wide mb-2">{title}</h3>
        <p className="text-content-secondary text-base leading-relaxed">{description}</p>
      </Card>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

// Persona Card component
interface PersonaCardProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  title: string;
  description: string;
}

const PersonaCard = forwardRef<HTMLDivElement, PersonaCardProps>(
  ({ quote, title, description, className, ...props }, ref) => {
    return (
      <Card ref={ref} variant="persona" className={cn("flex flex-col", className)} {...props}>
        <p className="text-xl italic text-content-secondary mb-4">&ldquo;{quote}&rdquo;</p>
        <h3 className="font-black text-lg uppercase tracking-wide mb-2">{title}</h3>
        <p className="text-content-secondary text-base leading-relaxed">{description}</p>
      </Card>
    );
  }
);

PersonaCard.displayName = "PersonaCard";

export { Card, FeatureCard, PersonaCard };
