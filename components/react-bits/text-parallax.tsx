"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TextParallaxProps {
  children: ReactNode
  baseVelocity?: number
  className?: string
}

export function TextParallax({ children, baseVelocity = 5, className }: TextParallaxProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const xRef = useRef(0)
  const directionRef = useRef(1)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const direction = window.scrollY > lastScrollY ? 1 : -1
      directionRef.current = direction
      lastScrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const animate = () => {
      xRef.current -= baseVelocity * directionRef.current

      if (scrollRef.current) {
        const firstChild = scrollRef.current.firstElementChild as HTMLElement
        if (firstChild) {
          const width = firstChild.offsetWidth
          if (Math.abs(xRef.current) >= width) {
            xRef.current = 0
          }
        }
        scrollRef.current.style.transform = `translateX(${xRef.current}px)`
      }

      requestAnimationFrame(animate)
    }

    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [baseVelocity])

  return (
    <div className={cn("overflow-hidden", className)}>
      <div ref={scrollRef} className="flex whitespace-nowrap">
        <div className="flex-shrink-0">{children}</div>
        <div className="flex-shrink-0">{children}</div>
        <div className="flex-shrink-0">{children}</div>
      </div>
    </div>
  )
}
