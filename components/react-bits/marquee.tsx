"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  speed?: number // duration in seconds (lower = faster)
}

export function Marquee({ children, className, reverse = false, pauseOnHover = true, speed = 20 }: MarqueeProps) {
  const duration = `${speed}s`

  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem] gap-[var(--gap)]",
        pauseOnHover && "[&:hover_.marquee-content]:[animation-play-state:paused]",
        className,
      )}
    >
      <div
        className={cn(
          "marquee-content flex shrink-0 items-center justify-around gap-[var(--gap)]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ animationDuration: duration }}
      >
        {children}
      </div>
      <div
        className={cn(
          "marquee-content flex shrink-0 items-center justify-around gap-[var(--gap)]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ animationDuration: duration }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}
