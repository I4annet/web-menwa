import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "dark" | "gold-border";
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] p-6 transition-all duration-300",
        {
          // Default light card with elegant shadow
          "border border-slate-200/80 bg-white shadow-[0_20px_40px_-24px_rgba(15,23,42,0.12)]":
            variant === "default",
          // Glassmorphic card
          "border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_30px_60px_-30px_rgba(15,23,42,0.3)] text-white":
            variant === "glass",
          // Dark stealth card
          "border border-slate-800 bg-slate-950 text-white shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]":
            variant === "dark",
          // Antique gold accents
          "border border-[#C5A880]/30 bg-slate-900/90 text-white shadow-[0_30px_60px_-20px_rgba(197,168,128,0.08)]":
            variant === "gold-border",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
