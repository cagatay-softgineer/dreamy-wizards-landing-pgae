"use client"

import { cn } from "@/lib/utils"

interface GlitchTextProps {
  children: string
  className?: string
  glitchColor1?: string
  glitchColor2?: string
}

export function GlitchText({
  children,
  className = "",
  glitchColor1 = "rgba(212, 175, 55, 0.8)",
  glitchColor2 = "rgba(255, 255, 255, 0.8)",
}: GlitchTextProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute top-0 left-0 opacity-80 animate-glitch-1"
        style={{ color: glitchColor1, clipPath: "inset(0 0 50% 0)" }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className="absolute top-0 left-0 opacity-80 animate-glitch-2"
        style={{ color: glitchColor2, clipPath: "inset(50% 0 0 0)" }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  )
}
