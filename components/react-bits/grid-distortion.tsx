"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface GridDistortionProps {
  className?: string
  gridSize?: number
  distortionStrength?: number
  color?: string
}

export function GridDistortion({
  className,
  gridSize = 40,
  distortionStrength = 30,
  color = "rgba(212, 175, 55, 0.15)",
}: GridDistortionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    let animationId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = color
      ctx.lineWidth = 1

      const cols = Math.ceil(canvas.width / gridSize) + 1
      const rows = Math.ceil(canvas.height / gridSize) + 1

      for (let i = 0; i < cols; i++) {
        ctx.beginPath()
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize

          const dx = mouseRef.current.x - x
          const dy = mouseRef.current.y - y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 150

          let offsetX = 0
          let offsetY = 0

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * distortionStrength
            offsetX = (dx / dist) * force || 0
            offsetY = (dy / dist) * force || 0
          }

          if (j === 0) {
            ctx.moveTo(x + offsetX, y + offsetY)
          } else {
            ctx.lineTo(x + offsetX, y + offsetY)
          }
        }
        ctx.stroke()
      }

      for (let j = 0; j < rows; j++) {
        ctx.beginPath()
        for (let i = 0; i < cols; i++) {
          const x = i * gridSize
          const y = j * gridSize

          const dx = mouseRef.current.x - x
          const dy = mouseRef.current.y - y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 150

          let offsetX = 0
          let offsetY = 0

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * distortionStrength
            offsetX = (dx / dist) * force || 0
            offsetY = (dy / dist) * force || 0
          }

          if (i === 0) {
            ctx.moveTo(x + offsetX, y + offsetY)
          } else {
            ctx.lineTo(x + offsetX, y + offsetY)
          }
        }
        ctx.stroke()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [gridSize, distortionStrength, color])

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full", className)}
      style={{ pointerEvents: "auto" }}
    />
  )
}
