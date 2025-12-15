"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SplitTextProps {
  text: string
  className?: string
  splitType?: "chars" | "words"
  delay?: number
  duration?: number
  threshold?: number
  from?: { opacity: number; y: number; rotateX?: number }
  to?: { opacity: number; y: number; rotateX?: number }
}

export function SplitText({
  text,
  className,
  splitType = "chars",
  delay = 50,
  duration = 0.6,
  threshold = 0.1,
  from = { opacity: 0, y: 40, rotateX: -90 },
  to = { opacity: 1, y: 0, rotateX: 0 },
}: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const items = splitType === "words" ? text.split(" ") : text.split("")

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)} style={{ perspective: "1000px" }}>
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block origin-bottom"
          style={{
            opacity: isVisible ? to.opacity : from.opacity,
            transform: isVisible
              ? `translateY(${to.y}px) rotateX(${to.rotateX || 0}deg)`
              : `translateY(${from.y}px) rotateX(${from.rotateX || 0}deg)`,
            transitionDuration: `${duration}s`,
            transitionDelay: isVisible ? `${index * delay}ms` : "0ms",
            transitionProperty: "opacity, transform",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {item === " " ? "\u00A0" : item}
          {splitType === "words" && index < items.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  )
}
