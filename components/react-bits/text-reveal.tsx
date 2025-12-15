"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
}

export function TextReveal({ text, className }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const words = text.split(" ")

  return (
    <div ref={ref} className={cn("flex flex-wrap gap-x-2 gap-y-1", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden">
          <span
            className={cn(
              "inline-block transition-all duration-700",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
            )}
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  )
}
