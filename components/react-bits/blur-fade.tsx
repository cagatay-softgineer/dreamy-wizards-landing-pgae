"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BlurFadeProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  blur?: number
  inView?: boolean
  yOffset?: number
}

export function BlurFade({ children, className, delay = 0, duration = 400, blur = 10, yOffset = 8 }: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.01 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : `blur(${blur}px)`,
        transform: isVisible ? "translateY(0)" : `translateY(${yOffset}px)`,
        transition: `opacity ${duration}ms ease-out ${delay}ms, filter ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
