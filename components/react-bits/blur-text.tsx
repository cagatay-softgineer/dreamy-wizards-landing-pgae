"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface BlurTextProps {
  text: string
  className?: string
  animateBy?: "words" | "letters"
  direction?: "top" | "bottom"
  delay?: number
  stepDuration?: number
  threshold?: number
}

export function BlurText({
  text,
  className,
  animateBy = "words",
  direction = "top",
  delay = 100,
  stepDuration = 0.35,
  threshold = 0.1,
}: BlurTextProps) {
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

  const items = animateBy === "words" ? text.split(" ") : text.split("")

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block transition-all"
          style={{
            opacity: isVisible ? 1 : 0,
            filter: isVisible ? "blur(0px)" : "blur(10px)",
            transform: isVisible ? "translateY(0)" : direction === "top" ? "translateY(-20px)" : "translateY(20px)",
            transitionDuration: `${stepDuration}s`,
            transitionDelay: isVisible ? `${index * delay}ms` : "0ms",
            transitionProperty: "opacity, filter, transform",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {item}
          {animateBy === "words" && index < items.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  )
}
