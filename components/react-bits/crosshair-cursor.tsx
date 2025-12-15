"use client"

import { useEffect, useRef, useState } from "react"

interface CrosshairCursorProps {
  color?: string
  size?: number
  thickness?: number
}

export function CrosshairCursor({ color = "rgba(212, 175, 55, 0.8)", size = 40, thickness = 1 }: CrosshairCursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)
  const rafRef = useRef<number>()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        setIsVisible(true)
      })
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Horizontal line */}
      <div
        className="absolute transition-opacity duration-150"
        style={{
          left: 0,
          right: 0,
          top: position.y,
          height: thickness,
          background: `linear-gradient(90deg, transparent, ${color} 20%, ${color} 80%, transparent)`,
          opacity: 0.5,
        }}
      />
      {/* Vertical line */}
      <div
        className="absolute transition-opacity duration-150"
        style={{
          top: 0,
          bottom: 0,
          left: position.x,
          width: thickness,
          background: `linear-gradient(180deg, transparent, ${color} 20%, ${color} 80%, transparent)`,
          opacity: 0.5,
        }}
      />
      {/* Center circle */}
      <div
        className="absolute rounded-full border transition-transform duration-75"
        style={{
          left: position.x - size / 2,
          top: position.y - size / 2,
          width: size,
          height: size,
          borderColor: color,
          borderWidth: thickness,
        }}
      />
      {/* Inner dot */}
      <div
        className="absolute rounded-full"
        style={{
          left: position.x - 2,
          top: position.y - 2,
          width: 4,
          height: 4,
          backgroundColor: color,
        }}
      />
    </div>
  )
}
