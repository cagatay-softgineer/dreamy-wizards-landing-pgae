"use client"

import type React from "react"

import { useEffect, useRef, useState, Children, cloneElement, type ReactElement, isValidElement } from "react"
import { cn } from "@/lib/utils"

interface StaggerChildrenProps {
  children: ReactElement[]
  className?: string
  staggerDelay?: number
  initialDelay?: number
}

export function StaggerChildren({ children, className, staggerDelay = 100, initialDelay = 0 }: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), initialDelay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [initialDelay])

  return (
    <div ref={ref} className={cn("", className)}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child

        return cloneElement(child as ReactElement<{ style?: React.CSSProperties; className?: string }>, {
          style: {
            ...(child.props as { style?: React.CSSProperties }).style,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all 600ms cubic-bezier(0.22, 1, 0.36, 1) ${index * staggerDelay}ms`,
          },
        })
      })}
    </div>
  )
}
