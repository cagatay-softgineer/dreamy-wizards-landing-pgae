"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className, speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distance = elementCenter - viewportCenter

      setOffset(distance * speed * -0.1)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={cn("will-change-transform", className)} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  )
}
