"use client"

import { useEffect, useRef, useState } from "react"
import { Compass, Server, Smartphone, Puzzle } from "lucide-react"
import { cn } from "@/lib/utils"
import { services, servicesIntro, type Service } from "@/data/content"
import { TiltCard } from "@/components/react-bits/tilt-card"
import { DecodeText } from "@/components/react-bits/decode-text"
import { MagneticText } from "@/components/react-bits/magnetic-text"

const iconMap = {
  compass: Compass,
  server: Server,
  smartphone: Smartphone,
  puzzle: Puzzle,
}

export function ServicesSection() {
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
    <section id="services" className="py-24 lg:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            <MagneticText strength={0.3}>How We</MagneticText>{" "}
            <span className="text-primary">
              <DecodeText text="Work" speed={60} />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{servicesIntro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service: Service, i: number) => {
            const Icon = iconMap[service.icon]
            return (
              <TiltCard
                key={service.id}
                className={cn(
                  "transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                )}
                tiltAmount={8}
                glareEnabled={true}
              >
                <div
                  className="group p-6 glass-card rounded-xl h-full transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_32px_rgba(212,175,55,0.1)]"
                  style={{ transitionDelay: isVisible ? `${(i + 1) * 100}ms` : "0ms" }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20 group-hover:animate-bounce-subtle">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
