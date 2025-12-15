"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TextGradientScrollProps {
  text: string
  className?: string
}

export function TextGradientScroll({ text, className }: TextGradientScrollProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height

      const start = windowHeight
      const end = -elementHeight
      const current = start - elementTop
      const total = start - end

      const prog = Math.max(0, Math.min(1, current / total))
      setProgress(prog)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <span
      ref={ref}
      className={cn("inline-block", className)}
      style={{
        background: `linear-gradient(90deg, 
          #D4AF37 0%, 
          #D4AF37 ${progress * 100}%, 
          rgba(255,255,255,0.3) ${progress * 100}%, 
          rgba(255,255,255,0.3) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {text}
    </span>
  )
}
