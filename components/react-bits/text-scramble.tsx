"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface TextScrambleProps {
  text: string
  className?: string
  scrambleOnHover?: boolean
  duration?: number
  characters?: string
}

export function TextScramble({
  text,
  className = "",
  scrambleOnHover = true,
  duration = 1000,
  characters = "!<>-_\\/[]{}—=+*^?#________",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const frameRef = useRef(0)

  const scramble = () => {
    if (isScrambling) return
    setIsScrambling(true)

    const chars = characters.split("")
    const originalText = text
    let iteration = 0
    const totalIterations = originalText.length * 3

    const animate = () => {
      const progress = iteration / totalIterations
      const revealIndex = Math.floor(originalText.length * progress)

      const scrambledText = originalText
        .split("")
        .map((char, index) => {
          if (char === " ") return " "
          if (index < revealIndex) return originalText[index]
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join("")

      setDisplayText(scrambledText)

      iteration++
      if (iteration < totalIterations) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setDisplayText(originalText)
        setIsScrambling(false)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    // Initial scramble on mount
    scramble()
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  return (
    <span className={cn("inline-block", className)} onMouseEnter={scrambleOnHover ? scramble : undefined}>
      {displayText}
    </span>
  )
}
