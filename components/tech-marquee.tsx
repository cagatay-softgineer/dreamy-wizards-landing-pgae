"use client"

import { Marquee } from "@/components/react-bits/marquee"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Flutter",
  "Firebase",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
  "Tailwind CSS",
  "Redis",
  "MongoDB",
  "Kubernetes",
]

export function TechMarquee() {
  return (
    <section className="py-12 border-y border-primary/20 bg-background/50 overflow-hidden">
      <Marquee speed={15} className="py-4">
        {technologies.map((tech) => (
          <div key={tech} className="flex items-center gap-3 px-6 py-2 glass-card rounded-full mx-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{tech}</span>
          </div>
        ))}
      </Marquee>
      <Marquee speed={20} reverse className="py-4">
        {[...technologies].reverse().map((tech) => (
          <div key={`${tech}-reverse`} className="flex items-center gap-3 px-6 py-2 glass-card rounded-full mx-2">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="text-sm font-medium text-muted-foreground/70 whitespace-nowrap">{tech}</span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
