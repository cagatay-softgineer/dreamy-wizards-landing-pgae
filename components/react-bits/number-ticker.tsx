"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface NumberTickerProps {
  value: number
  className?: string
  duration?: number
  delay?: number
}

export function NumberTicker({ value, className, duration = 2000, delay = 0 }: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const timeout = setTimeout(() => {
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setDisplayValue(Math.floor(easeOutQuart * value))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isVisible, value, duration, delay])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {displayValue.toLocaleString()}
    </span>
  )
}
