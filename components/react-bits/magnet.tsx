"use client"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface MagnetProps {
  children: ReactNode
  className?: string
  padding?: number
  magnetStrength?: number
  disabled?: boolean
}

export function Magnet({ children, className, padding = 100, magnetStrength = 2, disabled = false }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    setPosition({
      x: distanceX / magnetStrength,
      y: distanceY / magnetStrength,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      className={cn("relative inline-block", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ padding: `${padding}px`, margin: `-${padding}px` }}
    >
      <div
        className="transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
