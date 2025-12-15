"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { CountUp } from "./react-bits/count-up"
import { StarBorder } from "./react-bits/star-border"

interface Stat {
  id: string
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { id: "projects", value: 10, suffix: "+", label: "Projects Delivered" },
  { id: "experience", value: 5, suffix: "+", label: "Years Experience" },
  { id: "satisfaction", value: 100, suffix: "%", label: "Client Satisfaction" },
  { id: "technologies", value: 20, suffix: "+", label: "Technologies" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StarBorder
              key={stat.id}
              className={cn(
                "rounded-xl transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              duration={10 + i * 2}
            >
              <div className="p-6 text-center" style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {isVisible && <CountUp end={stat.value} duration={2000 + i * 200} suffix={stat.suffix} />}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </StarBorder>
          ))}
        </div>
      </div>
    </section>
  )
}
