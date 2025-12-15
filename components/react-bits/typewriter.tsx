"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
  cursorClassName?: string
}

export function Typewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
  cursorClassName = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{displayText}</span>
      <span className={cn("ml-1 w-[3px] h-[1em] bg-primary animate-pulse", cursorClassName)} />
    </span>
  )
}
