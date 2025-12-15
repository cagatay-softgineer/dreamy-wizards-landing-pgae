"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Code2, Lightbulb, Rocket } from "lucide-react"
import { TeamCard } from "@/components/team-card"
import { cn } from "@/lib/utils"
import { teamMembers, aboutIntro, aboutValues, type AboutValue } from "@/data/content"
import { BlurText } from "@/components/react-bits/blur-text"
import { AnimatedList } from "@/components/react-bits/animated-list"
import { DecodeText } from "@/components/react-bits/decode-text"
import { ElasticLine } from "@/components/react-bits/elastic-line"

const iconMap = {
  code: Code2,
  lightbulb: Lightbulb,
  rocket: Rocket,
}

export function AboutSection() {
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
    <section id="about" className="py-24 lg:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-muted-foreground mb-6">
            <Users className="h-4 w-4 text-primary" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight text-balance">
            <BlurText text="About" animateBy="letters" delay={50} direction="top" />{" "}
            <span className="text-primary">
              <DecodeText text="Dreamy Wizards" className="text-primary font-bold" speed={60} />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{aboutIntro}</p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <ElasticLine lineColor="#D4AF37" lineWidth={2} />
        </div>

        <AnimatedList className="grid sm:grid-cols-3 gap-6 mb-16" delay={200} staggerDelay={150}>
          {aboutValues.map((item: AboutValue) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.id}
                className="text-center p-6 glass-card rounded-xl transition-all duration-500 group hover:border-primary/40 hover:shadow-[0_8px_32px_rgba(212,175,55,0.1)] hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </AnimatedList>

        <AnimatedList className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" delay={400} staggerDelay={200}>
          {teamMembers.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </AnimatedList>
      </div>
    </section>
  )
}
