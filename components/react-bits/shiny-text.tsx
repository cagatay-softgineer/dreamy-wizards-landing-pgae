"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ShinyTextProps {
  children: ReactNode
  className?: string
  shimmerWidth?: number
  speed?: number
}

export function ShinyText({ children, className, shimmerWidth = 100, speed = 3 }: ShinyTextProps) {
  return (
    <span
      className={cn("relative inline-block bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(212, 175, 55, 0.7) 0%,
          rgba(255, 223, 120, 1) 25%,
          rgba(212, 175, 55, 0.7) 50%,
          rgba(255, 223, 120, 1) 75%,
          rgba(212, 175, 55, 0.7) 100%
        )`,
        backgroundSize: `${shimmerWidth * 3}% 100%`,
        animation: `shimmer ${speed}s linear infinite`,
      }}
    >
      {children}
    </span>
  )
}
