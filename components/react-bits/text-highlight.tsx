"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TextHighlightProps {
  children: ReactNode
  className?: string
  highlightColor?: string
}

export function TextHighlight({ children, className, highlightColor = "rgba(212, 175, 55, 0.3)" }: TextHighlightProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={cn("relative inline", className)}>
      <span
        className="absolute inset-0 -skew-x-3 transition-transform duration-700 ease-out origin-left"
        style={{
          backgroundColor: highlightColor,
          transform: isVisible ? "scaleX(1)" : "scaleX(0)",
        }}
      />
      <span className="relative">{children}</span>
    </span>
  )
}
