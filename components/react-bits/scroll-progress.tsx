"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollProgressProps {
  className?: string
  color?: string
  height?: number
}

export function ScrollProgress({ className = "", color = "var(--primary)", height = 3 }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-[60]", className)} style={{ height }}>
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${color}, ${color}dd)`,
          boxShadow: `0 0 10px ${color}80`,
        }}
      />
    </div>
  )
}
