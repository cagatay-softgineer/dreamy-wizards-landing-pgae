"use client"

import { cn } from "@/lib/utils"

interface BounceLoaderProps {
  className?: string
  dotSize?: number
  color?: string
}

export function BounceLoader({ className, dotSize = 12, color = "var(--primary)" }: BounceLoaderProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="animate-bounce rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
            animationDelay: `${i * 0.15}s`,
            animationDuration: "0.6s",
          }}
        />
      ))}
    </div>
  )
}
