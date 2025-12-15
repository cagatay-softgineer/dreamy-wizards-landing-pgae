"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  duration?: number
  distance?: number
  delay?: number
}

export function FloatingElement({ children, className, duration = 3, distance = 10, delay = 0 }: FloatingElementProps) {
  return (
    <div
      className={cn("animate-float", className)}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        // @ts-ignore - CSS custom property
        "--float-distance": `${distance}px`,
      }}
    >
      {children}
    </div>
  )
}
