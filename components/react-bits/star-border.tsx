"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface StarBorderProps {
  children: React.ReactNode
  className?: string
  borderColor?: string
  duration?: number
}

export function StarBorder({
  children,
  className = "",
  borderColor = "rgba(212, 175, 55, 0.8)",
  duration = 8,
}: StarBorderProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute -inset-px rounded-inherit overflow-hidden" style={{ borderRadius: "inherit" }}>
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${borderColor}, transparent 30%)`,
            animation: `star-border-spin ${duration}s linear infinite`,
          }}
        />
      </div>
      <div className="relative bg-background rounded-inherit" style={{ borderRadius: "inherit" }}>
        {children}
      </div>
      <style jsx>{`
        @keyframes star-border-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
