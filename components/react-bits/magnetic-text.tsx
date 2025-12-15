"use client"

import type React from "react"

import { useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MagneticTextProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticText({ children, className, strength = 0.5 }: MagneticTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [transform, setTransform] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    setTransform({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 })
  }

  return (
    <span
      ref={ref}
      className={cn("inline-block transition-transform duration-200 ease-out", className)}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  )
}
