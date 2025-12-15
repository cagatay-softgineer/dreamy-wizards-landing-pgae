"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  shimmerColor?: string
  shimmerSize?: string
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "rgba(212, 175, 55, 0.3)",
  shimmerSize = "0.1em",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative overflow-hidden rounded-full px-6 py-3 font-semibold text-foreground transition-all duration-300",
        "bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}
