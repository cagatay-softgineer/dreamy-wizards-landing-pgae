"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

interface CircularTextProps {
  text: string
  radius?: number
  fontSize?: number
  className?: string
  spinDuration?: number
  reverse?: boolean
}

export function CircularText({
  text,
  radius = 80,
  fontSize = 14,
  className,
  spinDuration = 20,
  reverse = false,
}: CircularTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const characters = text.split("")
  const angleStep = 360 / characters.length

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{
        width: radius * 2,
        height: radius * 2,
        animation: `spin ${spinDuration}s linear infinite ${reverse ? "reverse" : ""}`,
      }}
    >
      {characters.map((char, i) => {
        const angle = i * angleStep
        const x = radius + radius * Math.cos((angle - 90) * (Math.PI / 180))
        const y = radius + radius * Math.sin((angle - 90) * (Math.PI / 180))

        return (
          <span
            key={i}
            className="absolute text-primary font-medium"
            style={{
              left: x,
              top: y,
              fontSize,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        )
      })}
    </div>
  )
}
