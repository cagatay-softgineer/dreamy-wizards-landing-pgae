"use client"

import { useEffect, useState } from "react"
import { AlertTriangle } from "lucide-react"
import { underDevelopment } from "@/data/content"

export function DevBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (underDevelopment.isActive) {
      // Slight delay for fade-in animation
      const timer = setTimeout(() => setIsVisible(true), 100)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!underDevelopment.isActive) return null

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] bg-background/95 border-b border-primary/40 backdrop-blur-sm transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-6 py-2 flex items-center justify-center gap-2">
        <AlertTriangle className="h-4 w-4 text-primary shrink-0" />
        <p className="text-xs sm:text-sm text-muted-foreground text-center">{underDevelopment.bannerText}</p>
      </div>
    </div>
  )
}
