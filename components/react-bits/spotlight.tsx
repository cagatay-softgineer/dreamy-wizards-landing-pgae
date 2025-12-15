"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps {
  className?: string
  size?: number
}

export function Spotlight({ className, size = 400 }: SpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(${size}px circle at ${e.clientX}px ${e.clientY}px, rgba(212, 175, 55, 0.15), transparent 80%)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [size])

  return (
    <div
      ref={spotlightRef}
      className={cn("pointer-events-none fixed inset-0 z-30 transition-opacity duration-300", className)}
    />
  )
}
