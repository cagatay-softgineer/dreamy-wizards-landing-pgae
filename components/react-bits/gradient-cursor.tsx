"use client"

import { useEffect, useRef } from "react"

interface GradientCursorProps {
  colors?: string[]
  size?: number
  smoothness?: number
}

export function GradientCursor({
  colors = ["#D4AF37", "#F5E6B8", "#B8860B"],
  size = 200,
  smoothness = 0.1,
}: GradientCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * smoothness
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * smoothness

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${positionRef.current.x - size / 2}px, ${positionRef.current.y - size / 2}px)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [size, smoothness])

  const gradient = `conic-gradient(from 0deg, ${colors.join(", ")}, ${colors[0]})`

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-0 blur-2xl opacity-30 animate-spin-slow"
      style={{
        width: size,
        height: size,
        background: gradient,
        borderRadius: "50%",
        animationDuration: "8s",
      }}
    />
  )
}
