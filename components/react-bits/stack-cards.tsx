"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface StackCard {
  id: number
  content: React.ReactNode
}

interface StackCardsProps {
  cards: StackCard[]
  className?: string
}

export function StackCards({ cards, className }: StackCardsProps) {
  const [stack, setStack] = useState(cards)

  const moveToEnd = (id: number) => {
    setStack((prev) => {
      const index = prev.findIndex((card) => card.id === id)
      if (index === -1) return prev
      const newStack = [...prev]
      const [card] = newStack.splice(index, 1)
      newStack.push(card)
      return newStack
    })
  }

  return (
    <div className={cn("relative h-[300px] w-full max-w-[400px]", className)}>
      {stack.map((card, index) => {
        const isTop = index === 0
        const offset = index * 8
        const scale = 1 - index * 0.05
        const zIndex = stack.length - index

        return (
          <div
            key={card.id}
            onClick={() => isTop && moveToEnd(card.id)}
            className={cn(
              "absolute left-1/2 top-0 w-full cursor-pointer rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-md p-6 shadow-xl transition-all duration-500 ease-out",
              isTop && "hover:scale-[1.02]",
            )}
            style={{
              transform: `translateX(-50%) translateY(${offset}px) scale(${scale})`,
              zIndex,
            }}
          >
            {card.content}
          </div>
        )
      })}
    </div>
  )
}
