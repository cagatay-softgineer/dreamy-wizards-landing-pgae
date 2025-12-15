"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FadeUpProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
}

export function FadeUp({ children, className, delay = 0, duration = 600, distance = 30 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn("transition-all", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${distance}px)`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  )
}
