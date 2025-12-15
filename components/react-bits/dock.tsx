"use client"

import type React from "react"

import { useState, useRef, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface DockItem {
  icon: React.ReactNode
  label: string
  href?: string
  onClick?: () => void
}

interface DockProps {
  items: DockItem[]
  className?: string
  magnification?: number
  distance?: number
}

export function Dock({ items, className, magnification = 1.5, distance = 100 }: DockProps) {
  const [mouseX, setMouseX] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMouseX(e.clientX - rect.left)
    }
  }

  const handleMouseLeave = () => {
    setMouseX(null)
  }

  return (
    <div
      ref={containerRef}
      className={cn("flex items-end gap-2 p-3 glass-card rounded-2xl", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, index) => {
        let scale = 1

        if (mouseX !== null && containerRef.current) {
          const itemElements = containerRef.current.children
          const itemElement = itemElements[index] as HTMLElement
          if (itemElement) {
            const itemRect = itemElement.getBoundingClientRect()
            const containerRect = containerRef.current.getBoundingClientRect()
            const itemCenterX = itemRect.left - containerRect.left + itemRect.width / 2
            const distanceFromMouse = Math.abs(mouseX - itemCenterX)
            scale = Math.max(1, magnification - (distanceFromMouse / distance) * (magnification - 1))
          }
        }

        const Component = item.href ? "a" : "button"
        const props = item.href
          ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
          : { onClick: item.onClick }

        return (
          <Component
            key={index}
            {...props}
            className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-background/50 border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "bottom",
              transition: "transform 0.1s ease-out",
            }}
          >
            {item.icon}
            <span className="absolute -top-10 px-2 py-1 text-xs font-medium bg-background border border-primary/30 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </Component>
        )
      })}
    </div>
  )
}
