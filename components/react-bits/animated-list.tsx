"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedListProps {
  children: ReactNode[]
  className?: string
  delay?: number
  staggerDelay?: number
}

export function AnimatedList({ children, className, delay = 0, staggerDelay = 100 }: AnimatedListProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          // Stagger the appearance of each item
          children.forEach((_, index) => {
            setTimeout(
              () => {
                setVisibleItems((prev) => [...prev, index])
              },
              delay + index * staggerDelay,
            )
          })
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [children, delay, staggerDelay, hasAnimated])

  return (
    <div ref={ref} className={cn("", className)}>
      {children.map((child, index) => (
        <div
          key={index}
          className="transition-all duration-500 ease-out"
          style={{
            opacity: visibleItems.includes(index) ? 1 : 0,
            transform: visibleItems.includes(index) ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
