"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MorphingTextProps {
  texts: string[]
  className?: string
  morphDuration?: number
  displayDuration?: number
}

export function MorphingText({ texts, className, morphDuration = 1000, displayDuration = 2000 }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsAnimating(false)
      }, morphDuration / 2)
    }, displayDuration + morphDuration)

    return () => clearInterval(interval)
  }, [texts.length, morphDuration, displayDuration])

  return (
    <span
      className={cn(
        "inline-block transition-all",
        isAnimating ? "blur-md opacity-0 scale-95" : "blur-0 opacity-100 scale-100",
        className,
      )}
      style={{ transitionDuration: `${morphDuration / 2}ms` }}
    >
      {texts[currentIndex]}
    </span>
  )
}
