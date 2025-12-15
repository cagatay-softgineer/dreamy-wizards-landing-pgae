"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollVelocityProps {
  children: ReactNode
  baseVelocity?: number
  className?: string
  damping?: number
}

export function ScrollVelocity({ children, baseVelocity = 1, className, damping = 0.95 }: ScrollVelocityProps) {
  const [velocity, setVelocity] = useState(baseVelocity)
  const lastScrollY = useRef(0)
  const animationRef = useRef<number>()
  const containerRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollDelta = scrollY - lastScrollY.current
      lastScrollY.current = scrollY

      setVelocity(baseVelocity + Math.abs(scrollDelta) * 0.1)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [baseVelocity])

  useEffect(() => {
    const animate = () => {
      xRef.current -= velocity

      if (containerRef.current) {
        const firstChild = containerRef.current.firstElementChild as HTMLElement
        if (firstChild && xRef.current <= -firstChild.offsetWidth) {
          xRef.current = 0
        }
        containerRef.current.style.transform = `translateX(${xRef.current}px)`
      }

      setVelocity((v) => Math.max(baseVelocity, v * damping))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [velocity, baseVelocity, damping])

  return (
    <div className={cn("overflow-hidden", className)}>
      <div ref={containerRef} className="flex whitespace-nowrap">
        {children}
        {children}
      </div>
    </div>
  )
}
