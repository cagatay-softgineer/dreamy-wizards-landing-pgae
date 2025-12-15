"use client"

import { cn } from "@/lib/utils"

interface FlipTextProps {
  children: string
  className?: string
}

export function FlipText({ children, className }: FlipTextProps) {
  return (
    <span className={cn("group inline-block overflow-hidden", className)}>
      <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
        <span>{children}</span>
        <span className="text-primary">{children}</span>
      </span>
    </span>
  )
}
