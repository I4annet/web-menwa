import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        {
          // Primary Crimson Crimson Red
          "bg-gradient-to-r from-red-800 to-red-950 text-white shadow-md shadow-red-950/20 hover:from-red-700 hover:to-red-900 hover:shadow-lg hover:shadow-red-700/30 hover:-translate-y-[1px]":
            variant === "primary",
          // Secondary Charcoal / Midnight
          "bg-slate-900 text-white shadow-md shadow-slate-950/10 hover:bg-slate-800 hover:-translate-y-[1px]":
            variant === "secondary",
          // Accent Gold/Brass
          "bg-gradient-to-r from-[#D4AF37] via-[#C5A880] to-[#AA7C11] text-slate-950 shadow-md shadow-amber-950/10 hover:brightness-110 hover:-translate-y-[1px]":
            variant === "accent",
          // Outline
          "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-400":
            variant === "outline",
          // Glass variant for high luxury
          "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/30":
            variant === "glass",
        },
        {
          "px-4 py-2 text-xs": size === "sm",
          "px-6 py-3 text-sm": size === "md",
          "px-8 py-4 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
