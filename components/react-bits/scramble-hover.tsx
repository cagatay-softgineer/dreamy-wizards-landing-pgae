"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface ScrambleHoverProps {
  children: string
  className?: string
  scrambleSpeed?: number
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

export function ScrambleHover({ children, className, scrambleSpeed = 30 }: ScrambleHoverProps) {
  const [text, setText] = useState(children)
  const [isHovering, setIsHovering] = useState(false)

  const scramble = useCallback(() => {
    if (isHovering) return

    setIsHovering(true)
    let iteration = 0
    const originalText = children

    const interval = setInterval(() => {
      setText(
        originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index]
            }
            if (char === " ") return " "
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join(""),
      )

      if (iteration >= originalText.length) {
        clearInterval(interval)
        setIsHovering(false)
      }

      iteration += 1 / 3
    }, scrambleSpeed)
  }, [children, isHovering, scrambleSpeed])

  return (
    <span className={cn("inline-block cursor-pointer", className)} onMouseEnter={scramble}>
      {text}
    </span>
  )
}
