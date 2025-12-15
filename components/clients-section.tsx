"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"
import { GradientBorder } from "@/components/react-bits/gradient-border"
import { RevealOnScroll } from "@/components/react-bits/reveal-on-scroll"

const testimonials = [
  {
    quote:
      "Dreamy Wizards transformed our vision into reality. Their attention to detail and technical expertise is unmatched.",
    author: "Sarah Chen",
    role: "CEO, TechStartup",
  },
  {
    quote: "Working with them was a dream. They delivered a polished product that exceeded all our expectations.",
    author: "Michael Torres",
    role: "Founder, AppVenture",
  },
  {
    quote: "Their product thinking combined with technical excellence made them the perfect partner for our project.",
    author: "Emma Williams",
    role: "CTO, DataFlow",
  },
]

export function TestimonialsSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-muted-foreground mb-6">
            <Quote className="h-4 w-4 text-primary" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <RevealOnScroll key={i} delay={i * 0.15} direction="up">
              <GradientBorder animate>
                <div className="p-6 h-full">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </GradientBorder>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
