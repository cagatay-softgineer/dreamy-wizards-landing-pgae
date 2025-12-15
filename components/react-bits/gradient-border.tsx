"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface GradientBorderProps {
  children: React.ReactNode
  className?: string
  borderWidth?: number
  gradient?: string
  animate?: boolean
}

export function GradientBorder({
  children,
  className,
  borderWidth = 2,
  gradient = "linear-gradient(90deg, var(--primary), #ffd700, var(--primary))",
  animate = true,
}: GradientBorderProps) {
  return (
    <div
      className={cn("relative rounded-xl p-[2px]", className)}
      style={{
        background: gradient,
        backgroundSize: animate ? "200% 200%" : "100% 100%",
        animation: animate ? "gradient-shift 3s ease infinite" : undefined,
      }}
    >
      <div className="relative bg-background rounded-[10px] h-full w-full">{children}</div>
    </div>
  )
}
