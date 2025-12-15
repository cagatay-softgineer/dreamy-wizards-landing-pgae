"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface RotatingTextProps {
  texts: string[]
  interval?: number
  className?: string
}

export function RotatingText({ texts, interval = 3000, className = "" }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsAnimating(false)
      }, 500)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <span className={cn("inline-flex relative overflow-hidden align-bottom", className)}>
      <span
        className={cn(
          "inline-block transition-all duration-500",
          isAnimating ? "translate-y-full opacity-0 blur-sm" : "translate-y-0 opacity-100 blur-0",
        )}
      >
        {texts[currentIndex]}
      </span>
    </span>
  )
}
