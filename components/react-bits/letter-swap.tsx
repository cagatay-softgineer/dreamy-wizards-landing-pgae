"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface LetterSwapProps {
  text: string
  swapText?: string
  className?: string
  swapClassName?: string
}

export function LetterSwap({ text, swapText, className, swapClassName }: LetterSwapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const displayText = swapText || text

  return (
    <span
      className={cn("relative inline-block overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden className="flex flex-col h-[1.2em] overflow-hidden">
        <span
          className={cn(
            "transition-transform duration-300 ease-out",
            isHovered ? "-translate-y-full" : "translate-y-0",
          )}
        >
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block transition-transform duration-300"
              style={{
                transitionDelay: `${i * 20}ms`,
                transform: isHovered ? "translateY(-100%)" : "translateY(0)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span
          className={cn(
            "transition-transform duration-300 ease-out",
            swapClassName,
            isHovered ? "-translate-y-full" : "translate-y-0",
          )}
        >
          {displayText.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block transition-transform duration-300"
              style={{
                transitionDelay: `${i * 20}ms`,
                transform: isHovered ? "translateY(-100%)" : "translateY(0)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}
