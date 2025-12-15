"use client"

import { useEffect, useRef, useState } from "react"
import { Layers } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { cn } from "@/lib/utils"
import { projects, projectsIntro } from "@/data/content"

export function ProjectsSection() {
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
    <section id="projects" className="py-24 lg:py-32 relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-muted-foreground mb-6">
            <Layers className="h-4 w-4 text-primary" />
            <span>Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">{projectsIntro}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={cn(
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 100}ms` : "0ms" }}
            >
              <ProjectCard
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                link={project.url}
                github={project.githubUrl}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
