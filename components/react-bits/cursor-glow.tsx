"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface CursorGlowProps {
  className?: string
  color?: string
  size?: number
}

export function CursorGlow({ className, color = "rgba(212, 175, 55, 0.15)", size = 400 }: CursorGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return
      glowRef.current.style.left = `${e.clientX - size / 2}px`
      glowRef.current.style.top = `${e.clientY - size / 2}px`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [size])

  return (
    <div
      ref={glowRef}
      className={cn("fixed pointer-events-none z-0 transition-opacity duration-300 rounded-full blur-3xl", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
    />
  )
}
