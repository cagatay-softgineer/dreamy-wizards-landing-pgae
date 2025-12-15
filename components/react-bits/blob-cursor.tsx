"use client"

import { useEffect, useRef } from "react"

interface BlobCursorProps {
  blobColor?: string
  blobSize?: number
  smoothness?: number
}

export function BlobCursor({
  blobColor = "rgba(212, 175, 55, 0.3)",
  blobSize = 300,
  smoothness = 0.15,
}: BlobCursorProps) {
  const blobRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * smoothness
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * smoothness

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${positionRef.current.x - blobSize / 2}px, ${positionRef.current.y - blobSize / 2}px)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [blobSize, smoothness])

  return (
    <div
      ref={blobRef}
      className="fixed pointer-events-none z-0 blur-3xl opacity-50 transition-opacity duration-300"
      style={{
        width: blobSize,
        height: blobSize,
        background: `radial-gradient(circle, ${blobColor} 0%, transparent 70%)`,
        borderRadius: "50%",
      }}
    />
  )
}
