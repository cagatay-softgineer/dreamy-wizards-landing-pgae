"use client"

import type React from "react"

import { useState, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface Ripple {
  x: number
  y: number
  id: number
}

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "outline"
}

export function RippleButton({ children, className, variant = "primary", onClick, ...props }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)

    onClick?.(e)
  }

  return (
    <button
      className={cn(
        "relative overflow-hidden px-6 py-3 rounded-lg font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "border border-primary/50 text-primary hover:bg-primary/10",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
