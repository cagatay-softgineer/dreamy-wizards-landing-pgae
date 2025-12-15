"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ElasticLineProps {
  className?: string
  lineColor?: string
  lineWidth?: number
}

export function ElasticLine({ className, lineColor = "#D4AF37", lineWidth = 2 }: ElasticLineProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [path, setPath] = useState("")
  const mouseY = useRef(0)
  const targetY = useRef(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const updatePath = () => {
      const rect = svg.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const midY = height / 2

      targetY.current += (mouseY.current - targetY.current) * 0.1

      const controlY = midY + (targetY.current - midY) * 0.5

      setPath(`M 0 ${midY} Q ${width / 2} ${controlY} ${width} ${midY}`)
      requestAnimationFrame(updatePath)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect()
      mouseY.current = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      const rect = svg.getBoundingClientRect()
      mouseY.current = rect.height / 2
    }

    svg.addEventListener("mousemove", handleMouseMove)
    svg.addEventListener("mouseleave", handleMouseLeave)

    const animationId = requestAnimationFrame(updatePath)

    return () => {
      svg.removeEventListener("mousemove", handleMouseMove)
      svg.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <svg ref={svgRef} className={cn("w-full h-16 cursor-crosshair", className)}>
      <path d={path} fill="none" stroke={lineColor} strokeWidth={lineWidth} strokeLinecap="round" />
    </svg>
  )
}
