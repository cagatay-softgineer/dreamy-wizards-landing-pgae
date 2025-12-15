"use client"

import { useEffect, useRef } from "react"

interface ParticlesProps {
  className?: string
  particleCount?: number
  particleColor?: string
  particleSize?: number
  speed?: number
  connectionDistance?: number
  connectionColor?: string
}

export function Particles({
  className = "",
  particleCount = 50,
  particleColor = "rgba(212, 175, 55, 0.6)",
  particleSize = 2,
  speed = 0.5,
  connectionDistance = 150,
  connectionColor = "rgba(212, 175, 55, 0.15)",
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * particleSize + 1,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = connectionColor.replace(/[\d.]+\)$/, `${0.15 * (1 - distance / connectionDistance)})`)
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [particleCount, particleColor, particleSize, speed, connectionDistance, connectionColor])

  return <canvas ref={canvasRef} className={cn("absolute inset-0 pointer-events-none", className)} />
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
