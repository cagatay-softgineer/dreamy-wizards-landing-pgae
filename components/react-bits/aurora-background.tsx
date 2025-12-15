"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AuroraBackgroundProps {
  children?: ReactNode
  className?: string
  showRadialGradient?: boolean
}

export function AuroraBackground({ children, className, showRadialGradient = true }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Aurora layers */}
      <div className="absolute inset-0">
        {/* Primary gold aurora */}
        <div
          className="absolute -inset-[100px] opacity-50"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)
            `,
            animation: "aurora 15s ease-in-out infinite alternate",
          }}
        />
        {/* Secondary shimmer */}
        <div
          className="absolute -inset-[100px] opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 50% 80% at 60% 20%, rgba(255, 215, 0, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 40% 60% at 30% 80%, rgba(218, 165, 32, 0.15) 0%, transparent 50%)
            `,
            animation: "aurora 20s ease-in-out infinite alternate-reverse",
          }}
        />
        {/* Ambient glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
            animation: "pulse-glow 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      {showRadialGradient && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 80% at 50% 0%, transparent 40%, rgba(8, 8, 8, 0.8) 100%)",
          }}
        />
      )}

      {children}
    </div>
  )
}
