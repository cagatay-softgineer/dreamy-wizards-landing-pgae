"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface DecodeTextProps {
  text: string
  className?: string
  speed?: number
  characters?: string
  onComplete?: () => void
}

export function DecodeText({
  text,
  className,
  speed = 50,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
  onComplete,
}: DecodeTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " "
            if (index < iteration) return text[index]
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join(""),
      )

      iteration += 1 / 3

      if (iteration >= text.length) {
        clearInterval(interval)
        setDisplayText(text)
        onComplete?.()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [isVisible, text, speed, characters, onComplete])

  return (
    <span ref={elementRef} className={cn("font-mono", className)}>
      {displayText || text.replace(/./g, " ")}
    </span>
  )
}
