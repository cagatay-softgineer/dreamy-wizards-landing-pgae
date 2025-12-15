"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface PixelTrailProps {
  className?: string
  pixelSize?: number
  fadeDuration?: number
  color?: string
}

export function PixelTrail({
  className,
  pixelSize = 20,
  fadeDuration = 500,
  color = "rgba(212, 175, 55, 0.6)",
}: PixelTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pixels, setPixels] = useState<{ id: number; x: number; y: number }[]>([])
  const idRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = Math.floor((e.clientX - rect.left) / pixelSize) * pixelSize
      const y = Math.floor((e.clientY - rect.top) / pixelSize) * pixelSize

      const newPixel = { id: idRef.current++, x, y }
      setPixels((prev) => [...prev, newPixel])

      setTimeout(() => {
        setPixels((prev) => prev.filter((p) => p.id !== newPixel.id))
      }, fadeDuration)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [pixelSize, fadeDuration])

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          className="absolute transition-opacity duration-500"
          style={{
            left: pixel.x,
            top: pixel.y,
            width: pixelSize,
            height: pixelSize,
            backgroundColor: color,
            opacity: 1,
            animation: `fadeOut ${fadeDuration}ms ease-out forwards`,
          }}
        />
      ))}
    </div>
  )
}
