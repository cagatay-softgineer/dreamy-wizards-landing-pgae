"use client"

import { useEffect, useRef, useCallback, type ReactNode } from "react"

interface ClickSparkProps {
  children: ReactNode
  sparkColor?: string
  sparkCount?: number
  sparkSize?: number
  duration?: number
}

export function ClickSpark({
  children,
  sparkColor = "#D4AF37",
  sparkCount = 8,
  sparkSize = 10,
  duration = 400,
}: ClickSparkProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const createSpark = useCallback(
    (x: number, y: number) => {
      const container = containerRef.current
      if (!container) return

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement("div")
        const angle = (i / sparkCount) * 360
        const velocity = 50 + Math.random() * 50

        spark.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: ${sparkSize}px;
          height: ${sparkSize}px;
          background: ${sparkColor};
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        `

        document.body.appendChild(spark)

        const rad = (angle * Math.PI) / 180
        const dx = Math.cos(rad) * velocity
        const dy = Math.sin(rad) * velocity

        spark.animate(
          [
            { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
            {
              transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0)`,
              opacity: 0,
            },
          ],
          {
            duration,
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          },
        ).onfinish = () => spark.remove()
      }
    },
    [sparkColor, sparkCount, sparkSize, duration],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleClick = (e: MouseEvent) => {
      createSpark(e.clientX, e.clientY)
    }

    container.addEventListener("click", handleClick)
    return () => container.removeEventListener("click", handleClick)
  }, [createSpark])

  return <div ref={containerRef}>{children}</div>
}
